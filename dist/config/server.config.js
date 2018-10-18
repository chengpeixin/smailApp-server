'use strict';

var _env = require('./env.config');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    port: _env2.default.PORT,
    routes: {
        cors: true
    }
};