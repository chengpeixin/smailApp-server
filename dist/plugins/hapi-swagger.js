'use strict';

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _vision = require('vision');

var _vision2 = _interopRequireDefault(_vision);

var _hapiSwagger = require('hapi-swagger');

var _hapiSwagger2 = _interopRequireDefault(_hapiSwagger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swaggerOptions = {
    info: {
        title: '接口文档',
        version: "1"
    }
};

module.exports = [_inert2.default, _vision2.default, {
    plugin: _hapiSwagger2.default,
    options: swaggerOptions
}];