const Koa = require('koa')
const app = new Koa()

app.use( async (ctx) => {
	let url = ctx.url
	
	// 从 request 中获取GET请求
	let request = ctx.request
	let req_query = ctx.request.query
	let req_querystring = ctx.request.querystring

	// 从上下文获取GET请求
	let ctx_query = ctx.query
	let ctx_querystring = ctx.querystring


  	ctx.body = {
		  url,
		  req_query,
		  req_querystring,
		  ctx_query,
		  ctx_querystring
	  }
})

app.listen(8040)
console.log('[demo] start quick is starting at port 8040')