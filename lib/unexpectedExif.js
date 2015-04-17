var exifParser = require('exif-parser'),
    fs = require('fs');

module.exports = {
    name: 'unexpected-exif',
    installInto: function (expect) {
        expect.addAssertion(['string', 'Buffer'], 'to have (exif|EXIF) data satisfying', function (expect, subject, value) {
            if (typeof subject === 'string') {
                subject = fs.readFileSync(subject);
            }
            return expect(exifParser.create(subject).parse(), 'to satisfy', value);
        });
    }
};