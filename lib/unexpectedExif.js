/*global Uint8Array*/
var exifParser = require('exif-parser'),
    fs = require('fs');

module.exports = {
    name: 'unexpected-exif',
    installInto: function (expect) {
        expect.installPlugin(require('magicpen-media'));

        expect.addAssertion(['string', 'Buffer'], 'to have (exif|EXIF) data satisfying', function (expect, subject, value) {
            var title,
                subjectUrl;
            if (typeof subject === 'string') {
                var matchDataUrl = subject.match(/^data:[^;]*;base64,(.*)$/);
                if (matchDataUrl) {
                    subject = new Buffer(matchDataUrl[1], 'base64');
                } else {
                    title = subject;
                    subjectUrl = subject;
                    subject = fs.readFileSync(subject);
                }
            } else if (subject instanceof Uint8Array) {
                subject = new Buffer(subject);
            }

            this.subjectOutput = function () {
                this.image(subjectUrl || subject, { width: 10, height: 5, link: true, title: title });
            };

            return expect(exifParser.create(subject).parse(), 'to satisfy', value);
        });
    }
};
