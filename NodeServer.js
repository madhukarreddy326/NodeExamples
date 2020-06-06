var http=require('http');
var request =require("request");
var server = http.createServer((function(request,resposne)
{
    resposne.writeHead(200,
    {"Content-Type":"text/plain"},
    {"time-Zone":"abc"},
    {"apikey":"value1"});
    resposne.end(" Hello World\n madhukar");

}));
server.listen(7000);

request("https://www.google.com",function(request,response)
{

    console.log(body);
});