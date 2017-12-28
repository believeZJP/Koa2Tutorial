// 操作cookie

const Koa = require('koa')

const app = new Koa()

app.use(async(ctx) => {
    if(ctx.url === '/index'){
        ctx.cookies.set('name', 'Hello Koa',{
            domain:'localhost', // 写cookie所在的域名
            path:'/index',       // 写cookie所在的路径
            maxAge:1000*60*60*24,   // cookie有效时长
            expires:new Date('2018-12-31'), // cookie失效时间
            httpOnly:false,  // 是否只用于http请求中获取
            overwrite:false  // 是否允许重写
        })
        ctx.body = 'cookie is set.'
    }else{
        if(ctx.cookies.get('name')){
            ctx.body = ctx.cookies.get('name')
        }else{
            ctx.body = 'No cookie is set~~'
        }
    }
})


app.listen(8040, ()=>{
    console.log('[demo] start quick is starting at port 8040')
})