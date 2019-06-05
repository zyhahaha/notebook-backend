const router = require('koa-router')();

async function uploadCtrl(ctx){
  let body = ctx.request.body;
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,DELETE');
  ctx.body = body;
}

router.post('/upload', uploadCtrl);

module.exports = router