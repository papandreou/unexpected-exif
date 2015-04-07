/*global describe, it, __dirname*/
var unexpected = require('unexpected'),
    fs = require('fs'),
    pathModule = require('path');

describe('unexpected-exif', function () {
    var expect = unexpected.clone()
        .installPlugin(require('../lib/unexpectedExif'))
        .addAssertion('Error', 'to have message', function (expect, subject, value) {
            this.errorMode = 'nested';
            return expect(subject._isUnexpected ? subject.output.toString() : subject.message, 'to satisfy', value);
        });

    var testImagePath = pathModule.resolve(__dirname, '..', 'testdata', 'exifOriented.jpg');

    describe('with an image specified by file name', function () {
        it('should succeed', function () {
            return expect(testImagePath, 'to be an image whose EXIF data satisfies', { tags: { Model: 'iPhone 6' } });
        });

        it('should fail with a diff', function () {
            expect(function () {
                return expect(testImagePath, 'to be an image whose EXIF data satisfies', {
                    tags: {
                        Make: 'Apple',
                        ShutterSpeedValue: expect.it('to be within', 8, 9)
                    }
                });
            }, 'to throw',
                "expected '" + testImagePath + "' to be an image whose EXIF data satisfies\n" +
                "{\n" +
                "  tags: {\n" +
                "    Make: 'Apple',\n" +
                "    ShutterSpeedValue: expect.it('to be within', 8, 9)\n" +
                "  }\n" +
                "}\n" +
                "\n" +
                "{\n" +
                "  startMarker: { openWithOffset: ..., offset: 0 },\n" +
                "  tags: {\n" +
                "    Make: 'Apple',\n" +
                "    Model: 'iPhone 6',\n" +
                "    Orientation: 6,\n" +
                "    XResolution: 72,\n" +
                "    YResolution: 72,\n" +
                "    ResolutionUnit: 2,\n" +
                "    Software: '8.1.1',\n" +
                "    ModifyDate: '2014:12:01 11:01:21',\n" +
                "    YCbCrPositioning: 1,\n" +
                "    ExposureTime: 0.025,\n" +
                "    FNumber: 2.2,\n" +
                "    ExposureProgram: 2,\n" +
                "    ISO: 32,\n" +
                "    DateTimeOriginal: 1417431681,\n" +
                "    CreateDate: 1417431681,\n" +
                "    ShutterSpeedValue: 5.322274881516588, // expected 5.322274881516588 to be within 8..9\n" +
                "    ApertureValue: 2.2750071245369052,\n" +
                "    BrightnessValue: 4.812554489973845,\n" +
                "    ExposureCompensation: 0,\n" +
                "    MeteringMode: 5,\n" +
                "    Flash: 16,\n" +
                "    FocalLength: 4.15,\n" +
                "    SubjectArea: [...],\n" +
                "    SubSecTimeOriginal: '222',\n" +
                "    SubSecTimeDigitized: '222',\n" +
                "    ColorSpace: 1,\n" +
                "    ExifImageWidth: 3264,\n" +
                "    ExifImageHeight: 2448,\n" +
                "    SensingMethod: 2,\n" +
                "    ExposureMode: 0,\n" +
                "    WhiteBalance: 0,\n" +
                "    FocalLengthIn35mmFormat: 29,\n" +
                "    SceneCaptureType: 0,\n" +
                "    LensInfo: [...],\n" +
                "    LensMake: 'Apple',\n" +
                "    LensModel: 'iPhone 6 back camera 4.15mm f/2.2'\n" +
                "  },\n" +
                "  imageSize: { height: 2448, width: 3264 },\n" +
                "  thumbnailOffset: 1678,\n" +
                "  thumbnailLength: 4476,\n" +
                "  thumbnailType: 6,\n" +
                "  app1Offset: 6\n" +
                "}"
            );
        });
    });

    describe('with an image specified by a Buffer instance', function () {
        it('should succeed', function () {
            return expect(fs.readFileSync(testImagePath), 'to be an image whose EXIF data satisfies', { tags: { Model: 'iPhone 6' } });
        });
    });
});
