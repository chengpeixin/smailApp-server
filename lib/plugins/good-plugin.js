'use strict';

var _good = require('good');

var _good2 = _interopRequireDefault(_good);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    plugin: _good2.default,
    options: {
        reporters: {
            myConsoleReporter: [{
                module: 'good-console'
            }, 'stdout']
        }
    }
};