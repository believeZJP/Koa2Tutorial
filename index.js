// 引用静态资源

const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

const staticPath = './static'

app.use(static(path.join(__dirname, staticPath)))

app.use( async ( ctx ) => {
    ctx.body = '访问静态资源试试 koa.png, test.js, style.css'
  })
  
app.listen(8040, ()=>{
    console.log('[demo] start quick is starting at port 8040')
})