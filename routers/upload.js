const router = require('koa-router')();
const fs = require('fs');

async function uploadCtrl(ctx){
  await upload(ctx);
}

async function upload(ctx){
  const file = ctx.request.files.file;	// 获取上传文件
	const reader = fs.createReadStream(file.path);	// 创建可读流
	const ext = file.name.split('.').pop();		// 获取上传文件扩展名
	const upStream = fs.createWriteStream(`upload/${Math.random().toString()}.${ext}`);		// 创建可写流
	reader.pipe(upStream);	// 可读流通过管道写入可写流
	return ctx.body = 'success';
}

router.post('/upload', uploadCtrl);

module.exports = router