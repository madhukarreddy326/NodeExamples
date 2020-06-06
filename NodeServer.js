var http=require('http');
var server = http.createServer((function(request,resposne)
{
    resposne.writeHead(200,
    {"Content-Type":"text/plain"},
    {"time-Zone":"abc"},
    {"apikey":"value1"});
    resposne.end(" Hello World\n madhukar");

}));
server.listen(7000);