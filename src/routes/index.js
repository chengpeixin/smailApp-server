import Glob from 'glob'
import Path from 'path'
let routes = [];
Glob.sync(Path.resolve(__dirname,'routers/*.js')).forEach((v,i)=>{
    routes.push(...require(v))
})

module.exports = routes;




