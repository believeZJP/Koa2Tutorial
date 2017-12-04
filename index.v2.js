
const Koa = require('koa')
const app = new Koa()

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
        let postData = await parsePostData(ctx)
        ctx.body = postData
    }else {
        ctx.body = `
            <h1>404</h1>
        `
    }

})

// 处理post参数，合并为字符串
function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try{
            let postData = ''
            ctx.req.on('data', (data) => {
                postData += data
            })

            ctx.req.addListener('end', function(){
                let parseData = parseQueryStr(postData)
                resolve(parseData)

            })
        }catch(err){
            reject(err)
        }
    })
}

function parseQueryStr(queryStr) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log(queryStrList)
    for(let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=')
        console.log(itemList, 'item')
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
}

app.listen(8040)
console.log('[demo] start quick is starting at port 8040')