/*global describe, it, __dirname*/
var unexpected = require('unexpected');

var fs = require('fs');

var pathModule = require('path');

describe('unexpected-exif', function() {
  var expect = unexpected
    .clone()
    .installPlugin(require('../lib/unexpectedExif'));

  expect.output.preferredWidth = 80;

  var testImagePath = pathModule.resolve(
    __dirname,
    '..',
    'testdata',
    'exifOriented.jpg'
  );

  describe('with an image specified by file name', function() {
    it('should succeed', function() {
      return expect(testImagePath, 'to have EXIF data satisfying', {
        tags: { Model: 'iPhone 6' }
      });
    });

    it('should fail with a diff', function() {
      expect(
        function() {
          return expect(testImagePath, 'to have EXIF data satisfying', {
            tags: {
              Make: 'Apple',
              ShutterSpeedValue: expect.it('to be within', 8, 9)
            }
          });
        },
        'to throw',
        'expected ' +
          testImagePath +
          ' (image/jpeg)\n' +
          "to have EXIF data satisfying { tags: { Make: 'Apple', ShutterSpeedValue: expect.it('to be within', 8, 9) } }\n" +
          '\n' +
          '{\n' +
          '  tags: {\n' +
          "    Make: 'Apple',\n" +
          "    Model: 'iPhone 6',\n" +
          '    Orientation: 6,\n' +
          '    XResolution: 72,\n' +
          '    YResolution: 72,\n' +
          '    ResolutionUnit: 2,\n' +
          "    Software: '8.1.1',\n" +
          '    ModifyDate: 1417431681,\n' +
          '    YCbCrPositioning: 1,\n' +
          '    ExposureTime: 0.025,\n' +
          '    FNumber: 2.2,\n' +
          '    ExposureProgram: 2,\n' +
          '    ISO: 32,\n' +
          '    DateTimeOriginal: 1417431681,\n' +
          '    CreateDate: 1417431681,\n' +
          '    ShutterSpeedValue: 5.322274881516588, // should be within 8..9\n' +
          '    ApertureValue: 2.2750071245369052,\n' +
          '    BrightnessValue: 4.812554489973845,\n' +
          '    ExposureCompensation: 0,\n' +
          '    MeteringMode: 5,\n' +
          '    Flash: 16,\n' +
          '    FocalLength: 4.15,\n' +
          '    SubjectArea: [ 1631, 1223, 1795, 1077 ],\n' +
          "    SubSecTimeOriginal: '222',\n" +
          "    SubSecTimeDigitized: '222',\n" +
          '    ColorSpace: 1,\n' +
          '    ExifImageWidth: 3264,\n' +
          '    ExifImageHeight: 2448,\n' +
          '    SensingMethod: 2,\n' +
          '    ExposureMode: 0,\n' +
          '    WhiteBalance: 0,\n' +
          '    FocalLengthIn35mmFormat: 29,\n' +
          '    SceneCaptureType: 0,\n' +
          '    LensInfo: [ 4.15, 4.15, 2.2, 2.2 ],\n' +
          "    LensMake: 'Apple',\n" +
          "    LensModel: 'iPhone 6 back camera 4.15mm f/2.2'\n" +
          '  },\n' +
          '  imageSize: { height: 2448, width: 3264 },\n' +
          '  thumbnailOffset: 1678,\n' +
          '  thumbnailLength: 4476,\n' +
          '  thumbnailType: 6,\n' +
          '  app1Offset: 6\n' +
          '}'
      );
    });
  });

  describe('with an image specified by a Buffer instance', function() {
    it('should succeed', function() {
      return expect(
        fs.readFileSync(testImagePath),
        'to have EXIF data satisfying',
        { tags: { Model: 'iPhone 6' } }
      );
    });
  });
});
