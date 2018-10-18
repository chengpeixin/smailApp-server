'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _env = require('./../../config/env.config');

var _decryptedData = require('./../../utils/decrypted-data');

var _decryptedData2 = _interopRequireDefault(_decryptedData);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = [];
var GROUP_NAME = 'users';
router.push({
    method: 'POST',
    path: '/' + GROUP_NAME + '/wxlogin',
    handler: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
            var appid, secret, _req$payload, code, encryptedData, iv, response, _response$data, openid, session_key, errcode, errmsg, pc, userInfo;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            appid = _env.WECHAT.WX_APPID;
                            secret = _env.WECHAT.WX_SECRET;
                            _req$payload = req.payload, code = _req$payload.code, encryptedData = _req$payload.encryptedData, iv = _req$payload.iv;
                            _context.next = 5;
                            return (0, _axios2.default)({
                                url: 'https://api.weixin.qq.com/sns/jscode2session',
                                method: 'GET',
                                params: {
                                    appid: appid,
                                    secret: secret,
                                    js_code: code,
                                    grant_type: 'authorization_code'
                                }
                            });

                        case 5:
                            response = _context.sent;
                            _response$data = response.data, openid = _response$data.openid, session_key = _response$data.session_key, errcode = _response$data.errcode, errmsg = _response$data.errmsg;
                            // decrypt解码

                            pc = new _decryptedData2.default(appid, session_key);
                            userInfo = pc.decryptData(encryptedData, iv);
                            _context.t0 = errcode;
                            _context.next = _context.t0 === 0 ? 12 : _context.t0 === 40029 ? 13 : 15;
                            break;

                        case 12:
                            return _context.abrupt('break', 15);

                        case 13:
                            console.log('code无效');
                            return _context.abrupt('break', 15);

                        case 15:
                            return _context.abrupt('return', userInfo);

                        case 16:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function handler(_x) {
            return _ref.apply(this, arguments);
        }

        return handler;
    }(),
    config: {
        description: 'ASDSAD',
        notes: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        tags: ['api'],
        validate: {
            payload: {
                code: _joi2.default.string().required().description('微信用户登陆的临时code'),
                encryptedData: _joi2.default.string().required().description('微信用户信息encryptedData'),
                iv: _joi2.default.string().required().description('微信用户信息iv')
            }
        }
    }
});

module.exports = router;