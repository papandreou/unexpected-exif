/*global unexpected*/
// THIS FILE IS AUTOGENERATED! DO NOT CHANGE IT MANUALLY.
// It is built based on the examples in the documentation folder
// when the documentation site gets build by running "make site-build".
it.skipIf = function (condition) {
    (condition ? it.skip : it).apply(it, Array.prototype.slice.call(arguments, 1));
};

describe("documentation tests", function () {
    var isBrowser = typeof weknowhow !== 'undefined';
    var isPhantom = typeof mochaPhantomJS !== 'undefined';
    var expect;
    beforeEach(function () {
        expect = unexpected.clone();
        expect.output.preferredWidth = 80;

    });

    it("assertions/Buffer/to-have-EXIF-data-satisfying.md contains correct examples", function () {
        var testPromises = [];
        testPromises.push(expect.promise(function () {
            return expect(require('fs').readFileSync('magic-pen-6-colours.jpg'), 'to have EXIF data satisfying', {
                tags: {
                    XResolution: 72
                }
            });
        }));

        testPromises.push(expect.promise(function () {
            return expect(require('fs').readFileSync('magic-pen-6-colours.jpg'), 'to have EXIF data satisfying', {
                tags: {
                    XResolution: 96
                }
            });
        }).then(function () {
            return expect.promise(function () {
                expect.fail(function (output) {
                    output.error("expected:").nl();
                    output.code("return expect(require('fs').readFileSync('magic-pen-6-colours.jpg'), 'to have EXIF data satisfying', {").nl();
                    output.code("    tags: {").nl();
                    output.code("        XResolution: 96").nl();
                    output.code("    }").nl();
                    output.code("});").nl();
                    output.error("to throw");
                });
            });
        }).caught(function (e) {
            expect(e, "to have message",
                "expected Buffer[13509] (image) to have EXIF data satisfying { tags: { XResolution: 96 } }\n" +
                "\n" +
                "{\n" +
                "  startMarker: { openWithOffset: ..., offset: 0 },\n" +
                "  tags: {\n" +
                "    ProcessingSoftware: 'gThumb 3.0.2',\n" +
                "    Orientation: 1,\n" +
                "    XResolution: 72, // should equal 96\n" +
                "    YResolution: 72,\n" +
                "    ResolutionUnit: 2,\n" +
                "    ModifyDate: '2014:07:13 16:21:04',\n" +
                "    YCbCrPositioning: 1,\n" +
                "    ColorSpace: 1,\n" +
                "    ExifImageWidth: 380,\n" +
                "    ExifImageHeight: 248\n" +
                "  },\n" +
                "  imageSize: { height: 248, width: 380 },\n" +
                "  thumbnailOffset: 300,\n" +
                "  thumbnailLength: 2152,\n" +
                "  thumbnailType: 6,\n" +
                "  app1Offset: 24\n" +
                "}"
            );
        }));

        return expect.promise.all(testPromises);
    });

    it("assertions/string/to-have-EXIF-data-satisfying.md contains correct examples", function () {
        var testPromises = [];
        testPromises.push(expect.promise(function () {
            return expect('magic-pen-6-colours.jpg', 'to have EXIF data satisfying', {
                tags: {
                    XResolution: 72
                }
            });
        }));

        testPromises.push(expect.promise(function () {
            return expect('magic-pen-6-colours.jpg', 'to have EXIF data satisfying', {
                tags: {
                    XResolution: 96
                }
            });
        }).then(function () {
            return expect.promise(function () {
                expect.fail(function (output) {
                    output.error("expected:").nl();
                    output.code("return expect('magic-pen-6-colours.jpg', 'to have EXIF data satisfying', {").nl();
                    output.code("    tags: {").nl();
                    output.code("        XResolution: 96").nl();
                    output.code("    }").nl();
                    output.code("});").nl();
                    output.error("to throw");
                });
            });
        }).caught(function (e) {
            expect(e, "to have message",
                "expected magic-pen-6-colours.jpg (image/jpeg) to have EXIF data satisfying { tags: { XResolution: 96 } }\n" +
                "\n" +
                "{\n" +
                "  startMarker: { openWithOffset: ..., offset: 0 },\n" +
                "  tags: {\n" +
                "    ProcessingSoftware: 'gThumb 3.0.2',\n" +
                "    Orientation: 1,\n" +
                "    XResolution: 72, // should equal 96\n" +
                "    YResolution: 72,\n" +
                "    ResolutionUnit: 2,\n" +
                "    ModifyDate: '2014:07:13 16:21:04',\n" +
                "    YCbCrPositioning: 1,\n" +
                "    ColorSpace: 1,\n" +
                "    ExifImageWidth: 380,\n" +
                "    ExifImageHeight: 248\n" +
                "  },\n" +
                "  imageSize: { height: 248, width: 380 },\n" +
                "  thumbnailOffset: 300,\n" +
                "  thumbnailLength: 2152,\n" +
                "  thumbnailType: 6,\n" +
                "  app1Offset: 24\n" +
                "}"
            );
        }));

        return expect.promise.all(testPromises);
    });

    it("index.md contains correct examples", function () {
        var testPromises = [];
        testPromises.push(expect.promise(function () {
            return expect('magic-pen-6-colours.jpg', 'to have EXIF data satisfying', {
                tags: {
                    XResolution: 72,
                    Model: 'iPhone 6'
                }
            });
        }).then(function () {
            return expect.promise(function () {
                expect.fail(function (output) {
                    output.error("expected:").nl();
                    output.code("return expect('magic-pen-6-colours.jpg', 'to have EXIF data satisfying', {").nl();
                    output.code("    tags: {").nl();
                    output.code("        XResolution: 72,").nl();
                    output.code("        Model: 'iPhone 6'").nl();
                    output.code("    }").nl();
                    output.code("});").nl();
                    output.error("to throw");
                });
            });
        }).caught(function (e) {
            expect(e, "to have message",
                "expected magic-pen-6-colours.jpg (image/jpeg) to have EXIF data satisfying { tags: { XResolution: 72, Model: 'iPhone 6' } }\n" +
                "\n" +
                "{\n" +
                "  startMarker: { openWithOffset: ..., offset: 0 },\n" +
                "  tags: {\n" +
                "    ProcessingSoftware: 'gThumb 3.0.2',\n" +
                "    Orientation: 1,\n" +
                "    XResolution: 72,\n" +
                "    YResolution: 72,\n" +
                "    ResolutionUnit: 2,\n" +
                "    ModifyDate: '2014:07:13 16:21:04',\n" +
                "    YCbCrPositioning: 1,\n" +
                "    ColorSpace: 1,\n" +
                "    ExifImageWidth: 380,\n" +
                "    ExifImageHeight: 248,\n" +
                "    Model: undefined // should equal 'iPhone 6'\n" +
                "  },\n" +
                "  imageSize: { height: 248, width: 380 },\n" +
                "  thumbnailOffset: 300,\n" +
                "  thumbnailLength: 2152,\n" +
                "  thumbnailType: 6,\n" +
                "  app1Offset: 24\n" +
                "}"
            );
        }));

        return expect.promise.all(testPromises);
    });
});
