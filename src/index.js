import '@babel/polyfill'
import Hapi from 'hapi'
import './config/env.config'
import ServerConfig from './config/server.config'
// routes
import Routes from './routes'
// plugins
import Good from './plugins/good-plugin'
import HapiSwagger from './plugins/hapi-swagger'

import './utils/colors-utils'
const server = new Hapi.server(ServerConfig);
;(async ()=>{
    await server.route(Routes);
    await server.register([Good,...HapiSwagger])
    await server.start();
    console.log(`127.0.0.1:${ServerConfig.port}`.info)
})()

