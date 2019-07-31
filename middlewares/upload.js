const koaBody = require('koa-body');
const path = require('path');
const fs = require('fs');
module.exports = {
	asyncUpload : async (ctx,next) => {
		const {communityId,filePath} = ctx.params;

		await koaBody({
		  multipart:true, // 支持文件上传
		  // encoding:'gzip',
		  formidable:{
		    uploadDir:path.join(__dirname,`../upload/community_${communityId}/${filePath}`), // 设置文件上传目录
		    keepExtensions: true,    // 保持文件的后缀 
		    maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
		    onFileBegin:(name,file) => { // 文件上传前的设置
				const ext =getUploadFileExt(file.name);
				const dir = path.join(__dirname,`../upload/community_${communityId}/${filePath}`);
				mkdirsSync(dir);
				file.path = `${dir}/${name}.${ext}`;
		    },
		  }
		})(ctx,next)
	}
}

function checkDirExist(p) {
	console.log('checkDirExist',p)
  if (!fs.existsSync(p)) {
  	console.log('mkdirSync:',p)
    fs.mkdirSync(p);
  }
}

function getUploadFileExt(name) {
  let ext = name.split('.');
  return ext[ext.length - 1];
}

function mkdirsSync(dirname) {  
    //console.log(dirname);  
    if (fs.existsSync(dirname)) {  
        return true;  
    } else {  
        if (mkdirsSync(path.dirname(dirname))) {  
            fs.mkdirSync(dirname);  
            return true;  
        }  
    }  
}