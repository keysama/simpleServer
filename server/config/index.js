const program=require('commander');


function runDev(dir,cmd){
	console.log('当前的环境：development');
	process.env.NODE_ENV='development';
}
function runPro(dir,cmd){
	console.log('当前的环境：production');
	process.env.NODE_ENV='production';
}

program
 	.command('dev')
  	.action(runDev)
program
	.version('0.1.0')
	.command('pro')
  	.action(runPro);
// program//要添加新的指令，添加run函数，在env里添加相应配置
// 	.command('test')
//  .action(runTest);

program.on('--help', function(){
  console.log('感谢您使用这个工具:');
  console.log('需要更多帮助请进入');
  console.log('https://github.com/keysama/simpleServer');
});
program.parse(process.argv)


config=require(`${__dirname}/env/${process.env.NODE_ENV || 'development'}.js`);
module.exports=config;