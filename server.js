var http = require('http');
var fs = require('fs');
var params = {
	"name" : "poydev",
	"job" : "programmer",
	"age" : 30
};


http.createServer(function(req, res){
	//res.writeHead(200, {'Content-Type':'text/html'});
	//var myStream = fs.createReadStream(__dirname+"/"+'index.html','utf8');
	//myStream.pipe(res);
	res.writeHead(200, {'Content-Type':'application/json'});
	res.end(JSON.stringify(params));
}).listen(3000,'127.0.0.1');