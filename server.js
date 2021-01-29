const Koa = require('koa');
const Static = require('koa-static');
const path = require('path');  

const app = new Koa();
const staticPath = './';

app.use(Static(path.resolve(__dirname, staticPath)));

app.listen(8080);

作者：DoubleDimos
链接：https://juejin.cn/post/6844903584899792903
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。