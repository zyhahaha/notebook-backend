const router = require('koa-router')();
const query = require('../lib/db');

async function addCvMsg(ctx){
  let {comment, author} = ctx.request.body;
  // let {comment} = ctx.request.query;
  let data = [comment, author, Date.now()];
  await insertData(data).then(async result => {
    console.log(result);
    ctx.set('Access-Control-Allow-Origin','*');
    ctx.body = result;
  })
}
async function updateNote(ctx){
  let {id, comment} = ctx.request.body;
  let data = [comment, Date.now(), id];
  await updateData(data).then(async result => {
    console.log(result);
    ctx.body = result;
  })
}
async function queryCvMsg(ctx){
  await queryData().then(async result => {
    ctx.set('Access-Control-Allow-Origin','*');
    ctx.body = result;
  })
}
async function delNote(ctx){
  let id = 1;
  await deleteData(data).then(async result => {
    console.log(result);
    ctx.body = result;
  })
}

// add
function insertData(data) {
  let _sql = "insert into cv set comment=?,author=?,tim=?;"
  return query( _sql, data )
}
function updateData(data) {
  let _sql = "update notes set comment=?,tim=? where id=?;"
  return query( _sql, data )
}
// 删除用户
function deleteData(id) {
  let _sql = `delete from notes where id="${id}";`
  return query( _sql )
}
// 查找用户
function queryData() {
  let _sql = `select * from cv;`
  return query( _sql )
}

router.post('/cv/add', addCvMsg);
// router.post('/cv/modify', updateNote);
// router.get('/cv/delete', delNote);
router.get('/cv/query', queryCvMsg);

module.exports = router