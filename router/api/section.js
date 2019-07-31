const Router = require('koa-router');

const sectionController = require('../../controller/api/sectionController');
const checkToken = require('../../middlewares/checkToken');

const router = new Router({
	prefix: '/section'
})


router
	/**
	 * @api {put} /api/section/new 添加板块
	 * @apiDescription 添加板块
	 * @apiGroup section
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} communityId 论坛id
	 * @apiParam {string} name 板块名
	 * @apiParam {int} zindex 排序
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.put('/new',checkToken,sectionController.create)
	
	/**
	 * @api {get} /api/section/list/:communityId 获取板块列表
	 * @apiDescription 获取板块列表
	 * @apiGroup section
	 * @apiParam {int} communityId 论坛id
	 * @apiSuccess {json} result 板块列表
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : [...sectionList]
	 *  }
	 */
	.get('/list/:communityId',sectionController.getList)
	/**
	 * @api {delete} /api/section/delete/:sectionId 删除板块
	 * @apiDescription 删除板块
	 * @apiGroup section
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} sectionId 板块Id
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.delete('/delete/:sectionId',checkToken,sectionController.delete)
	/**
	 * @api {post} /api/section/info/:sectionId 修改板块
	 * @apiDescription 修改板块
	 * @apiGroup section
 	 * @apiHeader {string} Authorization "Bearer"[space]token
	 * @apiParam {int} sectionId 板块Id
	 * @apiParam {string} name 板块名
	 * @apiParam {int} zindex 排序
	 * @apiParam {int} type 类型，默认0：普通板块
	 * @apiSuccess {json} result 结果
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : 'success'
	 *  }
	 */
	.post('/info/:sectionId',checkToken,sectionController.edit)
	
module.exports = router;