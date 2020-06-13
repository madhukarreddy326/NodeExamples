var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./Book.model.js');

var db = 'mongodb://localhost/example'

mongoose.connect(db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var port = 8090;

app.get('/',function(req,res){
console.log('this is default method called');
res.send('you are calling the default method');
});

//get all books from the data base
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
//get singlle book details
app.get('/books/:id',function(req,res){
console.log('gettign one book"');
Book.findOne({
    _id:req.params.id}
).exec(function(err,book){
if(err)
{
    res.send('error occured book not found');    
}
else{
    console.log(book);
    res.json(book);
}
});
});

//one method of createing post method usign call back
app.post('/book',function(req,res){
var newBook = new Book();
newBook.title=req.body.title;
newBook.author=req.body.author;
newBook.category=req.body.category;
newBook.save(function(err,book){
    if(err){
        res.send('Error Saving book:unable to save book');
        console.log('erro saving book:unable to save book')        ;        
    }
    else{
        console.log(book);
        res.send(book);
    }
});
});
app.post('/book2',function(req,res){
    Book.create(req.body,function(err,book){
        if(err){
            console.log('error while saving');
            res.send('unable to save book');
        }
        else{
            console.log(book);
            res.send(book);
        }
    });
})
//update sigle book
app.put('/books/:id',function(req,res){
    Book.findOneAndUpdate({
        _id:req.params.id},
        {$set:{title:req.body.title}},{upset:true},function(err,newBook){
                if(err)
                {
                    console.log('book not find');                    
                }
                else
                {
                    console.log(newBook);
                    res.send(newBook);
                }
        }
    )
});
//to delte book
app.delete('/books/:id',function(req,res)
{
    Book.findOneAndDelete({_id:req.params.id},
        function(err,db)
        {
            if(err)
            res.send(err);
            else
            {
                console.log('deleted book:'+db);
                res.json(db);
            }

        })
})


app.listen(port,function(){
    console.log("app is listening on port:"+port);
})
