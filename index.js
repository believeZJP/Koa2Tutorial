// 使用koa-router

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', function(ctx, next){
    ctx.body = 'Hello Koa2'
})

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(8040, ()=>{
    console.log('[demo] start quick is starting at port 8040')
})