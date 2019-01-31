const db = require("../db");
const { sign, verify } = require("../jwt");
const crypto = require("crypto");
exports.login = (data, cb) => {
  const md5 = crypto.createHash("md5");
  data.password = md5.update(data.password).digest("hex");
  var sql =
    "SELECT * FROM `users-permissions_user` WHERE username = " +
    db.escape(data.username);
  db.query(sql, function(error, results, fields) {
    if (error) return cb("服务器错误");
    if (results.length) {
      if (results[0].password === data.password) {
        delete results[0].password;
        return cb(sign(results[0]));
      }
      return cb("密码错误");
    }
    return cb("用户不存在");
  });
};
exports.reg = (data, cb) => {
  const md5 = crypto.createHash("md5");
  data.password = md5.update(data.password).digest("hex");
  let sql =
    "SELECT * FROM `users-permissions_user` WHERE username = " +
    db.escape(data.username);
  let query = db.query(sql, function(error, results, fields) {
    if (error) return cb("服务器错误");
    if (results.length) {
      return cb("用户已存在");
    }
    sql = "insert into `users-permissions_user` set ?";
    query = db.query(sql, data, function(error, results, fields) {
      if (error) {
        cb("注册失败!");
      } else {
        cb("注册成功,请登陆!");
      }
    });
    console.log(query.sql);
  });
  console.log(query.sql);
};
exports.info = token => {
  return verify(token);
};
