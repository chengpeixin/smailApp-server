'use strict';

var _env = require('env2');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _env2.default)('./.env');
var _process = process,
    env = _process.env;

module.exports = {
    HOST: env.HOST,
    PORT: env.PORT,
    MYSQL: {
        MYSQL_HOST: env.MYSQL_HOST,
        MYSQL_PORT: env.MYSQL_PORT,
        MYSQL_DB_NAME: env.MYSQL_DB_NAME,
        MYSQL_USERNAME: env.MYSQL_USERNAME,
        MYSQL_PASSWORD: env.MYSQL_PASSWORD
    },
    JWT: {
        JWT_SECRET: env.JWT_SECRET
    },
    WECHAT: {
        WX_APPID: env.wxAppid,
        WX_SECRET: env.wxSecret
    }
};