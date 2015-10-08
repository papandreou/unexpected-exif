/*global global*/
var argv = require('minimist')(process.argv.slice(2));

var unexpected = require('unexpected').clone()
    .installPlugin(require('./lib/unexpectedExif'));

unexpected.output.preferredWidth = 80;

global.require = require;

var generator = require('unexpected-documentation-site-generator');
argv.unexpected = unexpected;
generator(argv);
