const mysql = require('mysql');

const config = require('./index.js').mysql;

var pool = mysql.createPool(config);

var query = (sql,callback) => {
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null);
        }else{
            conn.query(sql,function(err,results){
                conn.release();
                callback(err,results);
            })
        }
    })
};
module.exports = query;