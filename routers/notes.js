const router = require('koa-router')();
const query = require('../lib/db');

async function addNote(ctx){
  // let data = ['xxxxxxcontent', Date.now()];
  let {content} = ctx.request.body;
  // let {content} = ctx.request.query;
  let data = [content, Date.now()];
  await insertData(data).then(async result => {
    console.log(result);
    ctx.set('Access-Control-Allow-Origin','*');
    ctx.body = result;
  })
}
// async function addNote(ctx){
//   let data = ['xxxxxxcontent', Date.now()];
//   await insertData(data).then(async result => {
//     console.log(result);
//     ctx.body = result;
//   })
// }
async function queryNote(ctx){
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
  let _sql = "insert into notes set content=?,tim=?;"
  return query( _sql, data )
}
function updateData(data) {
  let _sql = "update notes set content=?,tim=? where id=?;"
  return query( _sql, data )
}
// 删除用户
function deleteData(id) {
  let _sql = `delete from notes where id="${id}";`
  return query( _sql )
}
// 查找用户
function queryData() {
  let _sql = `select * from notes;`
  return query( _sql )
}

router.post('/note/add', addNote);
// router.options('/note/add', ctx => {
//   ctx.body = {
//     code: 1000
//   }
// });
// router.get('/note/modify', updateNote);
router.get('/note/delete', delNote);
router.get('/note/query', queryNote);
// router.post('/signin', controller.postSignin)

module.exports = router