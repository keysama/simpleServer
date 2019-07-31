const Router = require('koa-router');

const fileController = require('../../controller/api/fileController');
const checkToken = require('../../middlewares/checkToken');
const asyncUpload = require('../../middlewares/upload').asyncUpload;

const router = new Router({
	prefix: '/file'
})


router
	/**
	 * @api {post} /api/file/new/:communityId/:filePath 上传文件
	 * @apiDescription 上传文件
	 * @apiGroup section
	 * @apiParam {string} communityId 论坛id
	 * @apiParam {string} filePath 位置,banner/user/article/others
	 * @apiSuccess {json} result 文件路径
	 * @apiSuccessExample {json} Success-Response:
	 *  {
	 *      "state" : 1,
	 *      "body" : '/--/--.jpg/png/mp4/..'
	 *  }
	 */
	.post('/new/:communityId/:filePath',asyncUpload,fileController.asyncUpload)
	
module.exports = router;