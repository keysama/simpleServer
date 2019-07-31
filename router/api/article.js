const Router = require('koa-router');

const articleController = require('../../controller/api/articleController');
const checkToken = require('../../middlewares/checkToken');

const router = new Router({
	prefix: '/article'
})


router
	/**
	 * @api {put} /api/article/new 添加文章
	 * @apiDescription 添加文章
	 * @apiGroup article
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} channelId 频道id
	 * @apiParam {string} title 文章标题
	 * @apiParam {int} type 文章类型
	 * @apiParam {int} zindex 文章排序
	 * @apiParam {string} content 文章内容
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.put('/new',checkToken,articleController.create)
	/**
	 * @api {get} /api/article/list/:channelId/:start/:num 获取文章列表
	 * @apiDescription 获取文章列表
	 * @apiGroup article
	 * @apiParam {string} channelId 频道id
	 * @apiParam {int} start 获取的起始索引（从0开始）
	 * @apiParam {int} num 获取的数量
	 * @apiSuccess {json} result 文章列表
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : [...articleList]
	 *  }
	 */
	.get('/list/:channelId/:start/:num',articleController.getList)
	/**
	 * @api {get} /api/article/info/:articleId 获取文章内容
	 * @apiDescription 获取文章内容
	 * @apiGroup article
	 * @apiParam {string} articleId 文章id
	 * @apiSuccess {json} result 文章内容
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : {...articleInfo}
	 *  }
	 */
	.get('/info/:articleId',articleController.getInfo)
	/**
	 * @api {delete} /api/article/delete/:articleId 删除文章
	 * @apiDescription 删除文章
	 * @apiGroup article
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {string} articleId 文章Id
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.delete('/delete/:articleId',checkToken,articleController.delete)
	/**
	 * @api {post} /api/article/info/:articleId 修改文章
	 * @apiDescription 修改文章
	 * @apiGroup article
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {string} articleId 文章Id
	 * @apiParam {string} title 文章标题
	 * @apiParam {int} type 文章类型，0：普通，1：活动
	 * @apiParam {int} zindex 排序
	 * @apiParam {string} content 文章内容
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.post('/info/:articleId',checkToken,articleController.edit)
	
	
module.exports = router;