const Router = require('koa-router');

const apiController = require('../../controller/api/apiController.js')

const authority = require('./authority.js')
const community = require('./community.js')
const article = require('./article.js')
const channel = require('./channel.js')
const comment = require('./comment.js')
const message = require('./message.js')
const section = require('./section.js')
const file = require('./file.js')

router = new Router({
	prefix: '/api'
});

router
	.all('/', apiController.index)
	.use(authority.routes())
	.use(community.routes())
	.use(article.routes())
	.use(channel.routes())
	.use(comment.routes())
	.use(message.routes())
	.use(section.routes())
	.use(file.routes())


module.exports = router;