const http = require('http')

const fs = require('fs')

const server = http.createServer((req,res)=>{
	if(req.url==='/'){
		fs.readFile('./index.html',(err,data)=>{
		res.writeHead(200,{"Content-Type":'text/html'})
			res.writeHead(200,{"Content-Type":'text/html'})
			res.write(data)
		})
	} else if(req.url==='/style.css') {
		fs.readFile('./style.css',(err,data)=>{
			res.writeHead(200,{"Content-Type":'text/css'})
				res.writeHead(200,{"Content-Type":'text/html'})
				res.write(data)
			})
	}

	res.end()  
})

server.listen(3000,()=>{
	console.log('server is listen at port 3000')
})

