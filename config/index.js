const program=require('commander');
program
 	.command('dev')
  	.action(runDev)
program
	.version('0.2.0')
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

console.log('当前运行环境：',process.env.NODE_ENV || 'development');

config=require(`${__dirname}/env/${process.env.NODE_ENV || 'development'}.js`);

module.exports=config;





function runDev(dir,cmd){
	process.env.NODE_ENV='development';
}
function runPro(dir,cmd){
	process.env.NODE_ENV='production';
}