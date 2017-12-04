
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app.use( async (ctx) => {
    // 当请求是get时，显示表单让用户填写
    if(ctx.url === '/' && ctx.method === 'GET'){
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    }else if(ctx.url === '/' && ctx.method === 'POST'){
        // ctx.body = '接收到的请求'
        let postData = ctx.request
        ctx.body = postData
    }else {
        ctx.body = `
            <h1>404</h1>
        `
    }

})

app.listen(8040)
console.log('[demo] start quick is starting at port 8040')