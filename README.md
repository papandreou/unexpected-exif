unexpected-exif
===============

EXIF data plugin for the [Unexpected](https://unexpectedjs.github.io/) assertion library (version 7+ required). Uses the [exif-parser](https://github.com/bwindels/exif-parser) module to do most of the work.

[![NPM version](https://badge.fury.io/js/unexpected-exif.svg)](http://badge.fury.io/js/unexpected-exif)
[![Build Status](https://travis-ci.org/unexpectedjs/unexpected-exif.svg)](https://travis-ci.org/unexpectedjs/unexpected-exif)
[![Coverage Status](https://coveralls.io/repos/unexpectedjs/unexpected-exif/badge.svg)](https://coveralls.io/r/unexpectedjs/unexpected-exif)
[![Dependency Status](https://david-dm.org/unexpectedjs/unexpected-exif.svg)](https://david-dm.org/unexpectedjs/unexpected-exif)

The image can be specified either as a string (file name) or as a Buffer instance.

```js
it('should have the correct EXIF data', function () {
    return expect('foo.jpg', 'to be an image whose EXIF data satisfies', {
        tags: {
            XResolution: 72,
            Model: 'iPhone 6'
        }
    });
});
```

License
-------

Unexpected-exif is licensed under a standard 3-clause BSD license -- see
the `LICENSE` file for details.
