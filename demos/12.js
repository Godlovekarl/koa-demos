const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');
console.log(3232, path.resolve(__dirname, '/12.js'))
const main = serve(path.join(__dirname, '/12.js'));


app.use(main);
app.listen(3000);
