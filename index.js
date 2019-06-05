const Koa = require('koa');
const koaBody = require('koa-body');
const config = require('./config');
const app = new Koa();

app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
  })
);

app.use(require('./routers/upload.js').routes());

app.listen(config.port);

console.log(`listening on port ${config.port}`);
