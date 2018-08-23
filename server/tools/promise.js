const mysql = require('../config/mysql.js');

module.exports = {
	db : (sql) => {
		return new Promise(function(resolve, reject) {
	        mysql(sql, function(error,results){
	            if(error){
	            	console.log(error);
	               resolve(false)
	            }else{
	               resolve(results)
	            }
	        })
	    });
	}
}