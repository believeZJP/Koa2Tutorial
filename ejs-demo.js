// 引用ejs模板

const Koa = require('koa')
const views = require('koa-views')
const path = require('path')

const app = new Koa()

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(async(ctx)=> {
    let title = 'Hello Koa2'
    await ctx.render('index', {
        title
    })
})


app.listen(8040, ()=>{
    console.log('[demo] start quick is starting at port 8040')
})