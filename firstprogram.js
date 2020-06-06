var http=require('http');
http.createServer(function(req,res){

    res.writeHead(400,{'Content-Type':'application/json'});
    res.end('Hello World');

}).listen(8070);