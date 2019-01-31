const db=require('../db')
const {sign,verify}=require('../jwt')
exports.login=(data,cb)=>{
    var sql= 'SELECT * FROM `users-permissions_user` WHERE username = ' + db.escape(data.username);
    db.query(sql, function (error, results, fields) {
        // if (error) throw error;
        console.log(error,'The solution is: ', results[0],fields);
        if(results.length){
            if(results[0].password===data.password){
                delete results[0].password
                return cb(sign( results[0]))
            }
            return cb('密码错误')
        }
        return cb('用户不存在')
      });
}
exports.info=(token)=>{
    return verify(token)
}