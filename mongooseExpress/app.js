var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model.js');

var db = 'mongodb://localhost/example'

mongoose.connect(db);

var port = 8090;

app.get('/',function(req,res){
console.log('this is default method called');
res.send('you are calling the default method');
});
app.get('/books',function(req,res){
console.log('getting all books');
Book.find({}).exec(function(err,books){
    if(err){
        res.send("Error hass occured");
    }else{
        console.log(books);
        res.json(books);
    }
})
});

app.listen(port,function(){
    console.log("app is listening on port:"+port);
})
