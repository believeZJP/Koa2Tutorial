// 自己实现路由

const fs = require('fs')
const Koa = require('koa')
const app = new Koa()

app.use( async (ctx) => {
    let url = ctx.request.url

    ctx.body = await router(url)

})

async function router(url) {
    let page = '404.html'
    switch(url) {
        case '/':
            page = 'index.html'
            break
        case '/index':
            page = 'index.html'
            break
        case '/todo':
            page = 'todo.html'
            break
        case '/404':
            page = '404.html'
            break
        default:
            break    
    }
    // 用异步来接收html，防止页面卡死
    let html = await render(page)
    return html
}

function render(page){
    return new Promise((resolve, reject)=>{
        let pageUrl = `./page/${page}`
        fs.readFile(pageUrl, 'UTF-8', (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}


app.listen(8040)
console.log('[demo] start quick is starting at port 8040')