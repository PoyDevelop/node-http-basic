var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

	if(req.url === "/"){
		res.writeHead(200, {'Content-Type':'text/html'});
		var myStream = fs.createReadStream(__dirname+"/"+'index.html','utf8');
		myStream.pipe(res);
	} else if(req.url === "/home"){
		res.writeHead(200, {'Content-Type':'text/html'});
		var myStream = fs.createReadStream(__dirname+"/"+'home.html','utf8');
		myStream.pipe(res);
	} else if(req.url === "/about"){
		res.writeHead(200, {'Content-Type':'text/html'});
		var myStream = fs.createReadStream(__dirname+"/"+'about.html','utf8');
		myStream.pipe(res);
	} else {
		res.writeHead(200, {'Content-Type':'text/html'});
		var myStream = fs.createReadStream(__dirname+"/"+'error.html','utf8');
		myStream.pipe(res);
	}

}).listen(3000,'127.0.0.1');