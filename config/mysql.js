const mysql = require('mysql');
const config = require('./index.js').mysql;
const pool = mysql.createPool(config);

const log4js = require('log4js');
const loggerConfig = require('./index.js').logger;
const logger = loggerConfig.sql ? log4js.getLogger('SQL') : {
    error : () => {},
    info: () => {}
};

module.exports = {
    db : (sql) => {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err,conn){
                if(err){
                    logger.error(err)
                    conn.release();
                    resolve(false)
                }else{
                    conn.query(sql,function(err,results){
                        if(err){
                            logger.error(err)
                            conn.release();
                            resolve(false)
                        }else{
                            logger.info(sql)
                            conn.release();
                            resolve(results)
                        }
                    })
                }
            })
        });
    },
    conn : () => {
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err,conn){
                if(err){
                    resolve(false)
                }else{
                    resolve(conn)
                }
            })
        });
    },
    trans : (conn,sql) => {
        return new Promise(function(resolve, reject){
            conn.query(sql,function(error,results){
                if(error){
                    resolve(false)
                }else{
                    resolve(results)
                }
            })
        })
    },
    startTrans : (trans) => {//参数是一个带有形参的函数，函数里是事物的具体逻辑，给它一个conn并等待执行，根据结果commit或roll
        return new Promise(async function(resolve, reject) {
            pool.getConnection(function(err,conn){
                if(err){
                    resolve(false)
                }else{
                    conn.beginTransaction(async (err)=>{
                        if(err){resolve(false)};

                        let res = await trans(conn);
                        if(res === false){
                            conn.rollback(function() {console.log('事务回滚')});
                            resolve(false);
                            return;
                        }
                        console.log('完成')
                        conn.commit(function(){ console.log('发送事务') })
                        resolve(res)
                    })
                }
                conn.release();
            })
        });
    },
}
