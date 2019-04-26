const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const config = require('./config');
const compress = require('koa-compress'); // gzip压缩
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache');
const app = new Koa();

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
};

// 配置session中间件
app.use(
  session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
  })
);

// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname , './public')
// ))
// 缓存
app.use(
  staticCache(
    path.join(__dirname, './public'),
    { dynamic: true },
    {
      maxAge: 365 * 24 * 60 * 60
    }
  )
);
app.use(
  staticCache(
    path.join(__dirname, './images'),
    { dynamic: true },
    {
      maxAge: 365 * 24 * 60 * 60
    }
  )
);

app.use(
  bodyParser({
    formLimit: '1mb'
  })
);

app.use(compress({ threshold: 2048 }));
//  路由
app.use(require('./routers/account/signin.js').routes());
app.use(require('./routers/account/signup.js').routes());
app.use(require('./routers/account/signout.js').routes());
app.use(require('./routers/markdown.js').routes());
app.use(require('./routers/git_hook.js').routes());
app.use(require('./routers/oss_test.js').routes());

app.listen(config.port);

console.log(`listening on port ${config.port}`);
