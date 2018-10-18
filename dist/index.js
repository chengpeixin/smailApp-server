'use strict';

require('@babel/polyfill');

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

require('./config/env.config');

var _server = require('./config/server.config');

var _server2 = _interopRequireDefault(_server);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _goodPlugin = require('./plugins/good-plugin');

var _goodPlugin2 = _interopRequireDefault(_goodPlugin);

var _hapiSwagger = require('./plugins/hapi-swagger');

var _hapiSwagger2 = _interopRequireDefault(_hapiSwagger);

require('./utils/colors-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// routes

// plugins


var server = new _hapi2.default.server(_server2.default);
;_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return server.route(_routes2.default);

                case 2:
                    _context.next = 4;
                    return server.register([_goodPlugin2.default].concat(_toConsumableArray(_hapiSwagger2.default)));

                case 4:
                    _context.next = 6;
                    return server.start();

                case 6:
                    console.log(('127.0.0.1:' + _server2.default.port).info);

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
}))();