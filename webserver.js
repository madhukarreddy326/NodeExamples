var express = require('express');
var app=express();
app.get('/',function(req,res)
{
res.send("Helloworld!");
});
var server = app.listen(3000,function(){

}
);
app.route('/Node').get(function(req,res){
    res.send("Tutorial on Node");
});
app.route('/Angular').get(function(req,res){
res.send("Tutorial on Angular");

});
app.get('/sample',function(req,res){

    res.send("welcom to node server application");
});


