/*global unexpected:true*/
unexpected = require('unexpected').clone();
unexpected.output.preferredWidth = 80;
unexpected.use(require('./lib/unexpectedExif'));
