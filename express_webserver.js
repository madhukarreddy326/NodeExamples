var express = require('express');
var app =  express();
app.set('view engine','jade');
app.get('/',function(req,res)
{
res.render('index',{title:'first',message:'Welcome backe madhukar madhukar '})
});
var server = app.listen(3000,function(req,res)
{});
