// 使用koa-router

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
// const router = new Router()
/* const router = new Router({
    prefix: '/demo'
}) */

/* router.get('/', function(ctx, next){
    ctx.body = 'Hello Koa2'
})
.get('/todo', function(ctx, next){
    ctx.body = 'Todo Page'
}) */

// 两个单独的路由
let home = new Router()
home.get('/koa', async(ctx) =>{
    ctx.body = 'Hello Koa'
})
.get('/todo', async(ctx) => {
    ctx.body = 'learning Koa'
})

let page = new Router()
page.get('/koa', async(ctx) =>{
    ctx.body = 'Hello Koa Page'
})
.get('/todo', async(ctx) => {
    ctx.body = 'learning Koa Page'
})

// 装载所有子路由
let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(8040, ()=>{
    console.log('[demo] start quick is starting at port 8040')
})