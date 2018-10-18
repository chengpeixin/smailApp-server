import Env2 from 'env2'
Env2('./.env')
const { env } = process;
module.exports = {
    HOST:env.HOST,
    PORT:env.PORT,
    MYSQL:{
        MYSQL_HOST:env.MYSQL_HOST,
        MYSQL_PORT:env.MYSQL_PORT,
        MYSQL_DB_NAME:env.MYSQL_DB_NAME,
        MYSQL_USERNAME:env.MYSQL_USERNAME,
        MYSQL_PASSWORD:env.MYSQL_PASSWORD,
    },
    JWT:{
        JWT_SECRET:env.JWT_SECRET
    },
    WECHAT:{
        WX_APPID:env.wxAppid,
        WX_SECRET:env.wxSecret
    }
}
