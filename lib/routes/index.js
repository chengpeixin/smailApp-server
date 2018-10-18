'use strict';

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var routes = [];
_glob2.default.sync(_path2.default.resolve(__dirname, 'routers/*.js')).forEach(function (v, i) {
    routes.push.apply(routes, _toConsumableArray(require(v)));
});
module.exports = routes;