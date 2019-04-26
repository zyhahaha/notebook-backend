const router = require('koa-router')();
const controller = require('../../controller/account/signin_ctrl')

router.get('/signin', controller.getSignin)
router.post('/signin', controller.postSignin)

module.exports = router