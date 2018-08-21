const mysql = require('../config/mysql.js');

module.exports = {
	db : (sql) => {
		return new Promise(function(resolve, reject) {
	        mysql(sql, function(error,results){
	            if(error){
	               reject(error)
	            }else{
	               resolve(results)
	            }
	        })
	    });
	}
}