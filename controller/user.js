const {login,info}=require('../services/user')
exports.login=(req,res)=>{
    let body=''
    req.on('data',(data)=>{
        body+=data
    })
    req.on('end',()=>{
        console.log(body)
        login(JSON.parse(body),(data)=>{
            res.end(data)
        })
    })
}
exports.reg=(req,res)=>{
    res.end('reg')
}

exports.info=(req,res)=>{
    if (!req.headers || !req.headers.authorization) {
        return res.end('认证失败,请先登陆!')
    }
    const data=info(req.headers.authorization.split(' ')[1])
    data?
    res.end(JSON.stringify(data)):
    res.end('认证失败,请重新登陆!')
}