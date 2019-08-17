var data = [
{"nickname":"김잉여","content":"본격 하이타이맛 게임! 고수! 번창하세여 ㅋㅋ"},
{"nickname":"양문이","content":"기대해봅니다 일단은"},
{"nickname":"심성덕","content":"추첨되면 뭘 주는건가요? 뭐 암튼 화이팅"},
{"nickname":"이정희","content":"만화만큼 게임도 잘되세여"},
{"nickname":"김송이","content":"제말 국산게임이라 해주세요 제발요"},
{"nickname":"에리카","content":"은근슬쩍 글남기기 ㅎ 커피주세요 스톼벅"},
{"nickname":"프린","content":"게임 광고모델은 고수로 ㅋㅋㅋ"},
{"nickname":"이런병맛","content":"고수를 검색하니 게임 고수가 나오네 ㅋㅋ"},
{"nickname":"로드투고자","content":"네이버 광고보고는 김전일일줄 ㅋㅋ"},
{"nickname":"레전드레옹","content":"고수는 빼주세요를 배트남말로 뭐라고 함??"},
{"nickname":"작전주","content":"게임이상하게 만들면 때릴겁니다."},
{"nickname":"스마트욱","content":"신민선씨 보고 있나? 나 일안하고 게임질 하고 있지 !! ㅋㅋㅋㅋㅋㅋㅋ"},
{"nickname":"타카오부장","content":"타인지옥 드라마와 같이 기대하는 작품임"},
{"nickname":"리크도라","content":"고수는 언제 완결이 됐다나... 휴재 아니였나?"},
{"nickname":"김응애","content":"저기요 혹시 이벤트 상품이 고수는 아니져? 양꼬치 먹을때 먹는거 그거요"},
{"nickname":"놀자놀아","content":"열강처럼은 안되길 절실히 빕니다 ㅎㅎㅎ"},
{"nickname":"파라위","content":"게임 할 시간이 없다 자동사냥 만들어라 자동사냥!"},
{"nickname":"초코마유","content":"이 사이트는 모든것이 신비롭게 감춰져있다!!"},
{"nickname":"미련곰냥이","content":"용비풀패는 게임 안나오나요?"},
{"nickname":"간식왕","content":"아이폰도 같이 나오나요? 아이폰도 게임할 있게 해주세요"},
{"nickname":"Noctil","content":"빨리 얼렁 오픈해 주시오 운영자 양반"},
{"nickname":"아빠1호","content":"어째 캐릭들이 다들 살이 찐거 같음 ㅎㅎ"},
{"nickname":"마이쩡","content":"용비불패 길드 모집중"},
{"nickname":"커피선생","content":"저 만두는 다 강룡이 껀가??"},
{"nickname":"아이시드","content":"강룡이 배툭튀어 나온거 봐라 아주 ㅋㅋㅋ"},
{"nickname":"스마트욱","content":"그레서 게임은 언제 출시 됩답니까?"},
{"nickname":"방구똥","content":"완전기대하는 중입니다"},
{"nickname":"완결","content":"작가는 다 나으심? 작가님 화이팅! 게임도 대박나세요!"},
{"nickname":"깨작깨작","content":"1섭 신검전설 길드 만듬"},
{"nickname":"자동로그아웃","content":"네이버 이번에는 제대로 만들어 줘요"},
{"nickname":"왈왈컹컹멍멍","content":"뭐 아직 되는건 없지만 그래픽이 먼가 있어 보이네"},
{"nickname":"게임으로치유","content":"뭔가 그래픽이 중국이 아니라 일본틱 한데? 일본산은 아니겠지만 ㅎㅎ"},
{"nickname":"대구통닭","content":"주모 여기 탁배기 한잔이랑 국밥하나 주소"},
{"nickname":"다시너만","content":"지붕위에 저여자는 어디서 본거 같은데 어디서 봤드라"},
{"nickname":"세븐킹덤","content":"컨텐츠 중비중 없애 주세요. ㅎㅎ"},
{"nickname":"라프디","content":"재미있습니다 물론 아직 해보진 않아지만 ㅋㅋㅋ"},
]

module.exports={
	all : async (ctx, next) => {
		console.log(111)
		const mongoose = require('mongoose');
		//设置mongo存储路径
		const dbUrl = 'mongodb://121.125.62.213:27017/gosu';
		mongoose.connect(dbUrl,{ useNewUrlParser: true })
		// 连接成功
		mongoose.connection.on('connected', () => {
		  console.log('MongoDB connected success.')
		})
		// 连接异常
		mongoose.connection.on('error', () => {
		  console.log('MongoDB connected error.')
		})
		// 连接断开
		mongoose.connection.on('disconnected', () => {
		  console.log('MongoDB connected disconnected.')
		})
		//导出mongoose对象

		const Schema = mongoose.Schema;
		// 创建一个schema实例
		let Message = new Schema({
			content : String,
			createTime : String,
			creator : {
				pangId : Number,
				nickname : String,
				head : String,
			}
		})
		// 利用UserSchema实例,发布一个User的model并且导出

		const messageresult = [];

		for(let i= 0;i <data.length;i++){
			let MessageSchema = mongoose.model('Message',Message)
			let msg = new MessageSchema({
				content : data[i]['content'],
				createTime : '1565948605937',
				creator : {
					pangId :0,
					nickname :  data[i]['nickname'],
					head : ''
				}
			},false)

			let res = await msg.save();
			messageresult.push(res)
		}		

		return ctx.body = {
		  	state : 1,
		  	body : messageresult
		 }
	}
} 



function randTime(){
	return parseInt(Math.random()*(1000*60*60*24*3 - 1000*60*60*24) + 1000*60*60*24,10);
}