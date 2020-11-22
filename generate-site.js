const argv = require('minimist')(process.argv.slice(2));

const unexpected = require('unexpected')
  .clone()
  .installPlugin(require('./lib/unexpectedExif'));

unexpected.output.preferredWidth = 80;

global.require = require;

const generator = require('unexpected-documentation-site-generator');
argv.unexpected = unexpected;
generator(argv);
