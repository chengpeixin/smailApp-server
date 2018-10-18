import env from './env.config'
module.exports = {
    port:env.PORT,
    routes:{
        cors:true
    }
}