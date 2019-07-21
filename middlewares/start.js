const config = require('../config/index.js');//根据运行环境返回相应配置文件
const port = config.port ? parseInt(config.port) : 8080;//监听端口

const fs = require('fs');
const https = require('https');

module.exports = app => {

	if(config.https.switch){
		const {privateKey,certificate,httpsPort} = config.https;

		const credentials = {
			key : fs.readFileSync(privateKey.path,privateKey.encoded),
			cert : fs.readFileSync(certificate.path,certificate.encoded),
		}

		const httpsServer = https.createServer(credentials,app.callback());

		httpsServer.listen(httpsPort, () => {
			console.log(`HTTPS Server is running on : ${httpsPort}`)
		})
	}

	if(port){
		app.listen(port,() => {console.log('HTTP Server is running on :'+port)});
	}
}