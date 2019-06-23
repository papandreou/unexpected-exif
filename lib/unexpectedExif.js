const exifParser = require('exif-parser');
const fs = require('fs');

module.exports = {
  name: 'unexpected-exif',
  version: require('../package.json').version,
  installInto(expect) {
    expect.installPlugin(require('magicpen-media'));

    expect.addAssertion(
      '<string|Buffer> to have (exif|EXIF) data satisfying <any>',
      (expect, subject, value) => {
        let title, subjectUrl;
        if (typeof subject === 'string') {
          const matchDataUrl = subject.match(/^data:[^;]*;base64,(.*)$/);
          if (matchDataUrl) {
            subject = Buffer.from(matchDataUrl[1], 'base64');
          } else {
            title = subject;
            subjectUrl = subject;
            subject = fs.readFileSync(subject);
          }
        } else if (subject instanceof Uint8Array) {
          subject = Buffer.from(subject);
        }

        expect.subjectOutput = function() {
          this.image(subjectUrl || subject, {
            width: 10,
            height: 5,
            link: true,
            title
          });
        };

        const exifData = exifParser.create(subject).parse();
        if (exifData && exifData.startMarker) {
          delete exifData.startMarker;
        }
        return expect(exifData, 'to satisfy', value);
      }
    );
  }
};
