const user=require('./controller/user')
// hapi
const routes={
    'GET':{
        '/info':user.info,
    },
    "POST":{
        '/login':user.login,
        '/reg':user.reg,
    },
    "PUT":{},
    "DELETE":{}
}
exports.Router=class Router{
    GET(path,cb){
        routes.GET[path]=cb
    }
}
exports.routes=routes