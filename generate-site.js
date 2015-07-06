/*global global*/
var argv = require('minimist')(process.argv.slice(2));

var unexpected = require('unexpected').clone()
    .installPlugin(require('./lib/unexpectedExif'));

global.require = require;

var generator = require('unexpected-documentation-site-generator');
argv.unexpected = unexpected;
generator(argv);
