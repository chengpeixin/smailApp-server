import Joi from 'joi'
import {WECHAT} from './../../config/env.config'
import WXBizDataCrypt from './../../utils/decrypted-data'
import Axios from 'axios'
let router = []
const GROUP_NAME = 'users'
router.push({
    method:'POST',
    path:`/${GROUP_NAME}/wxlogin`,
    handler:async (req)=>{
        const appid = WECHAT.WX_APPID;
        const secret = WECHAT.WX_SECRET;
        const {code ,encryptedData,iv} = req.payload;
        const response = await Axios({
            url:'https://api.weixin.qq.com/sns/jscode2session',
            method:'GET',
            params:{
                appid,
                secret,
                js_code: code,
                grant_type: 'authorization_code'
            }
        })
        const { openid, session_key,errcode,errmsg } = response.data;
        // decrypt解码
        var pc = new WXBizDataCrypt(appid, session_key)
        var userInfo = pc.decryptData(encryptedData , iv)
        switch(errcode) {
            case 0: 
            break;
            case 40029:
            console.log('code无效')
            break;
        }
        return userInfo;
    },
    config:{
        description:'ASDSAD',
        notes: '微信登陆接口',
        tags: ['api'],
        validate:{
            payload:{
                code:Joi.string().required().description('微信用户登陆的临时code'),
                encryptedData:Joi.string().required().description('微信用户信息encryptedData'),
                iv:Joi.string().required().description('微信用户信息iv')
            }
        }
    }
});

module.exports = router