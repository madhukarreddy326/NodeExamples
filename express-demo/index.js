const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to express world  !!!");

});

app.get('/api/courses',(req,res) =>{
    res.send([1,2,3]);

});
app.get('/api/courses/:id',(req,res)=>
{
    res.send(req.params.id);
   // res.send(req.params);//this will list all the path parameters
    //res.send(req.query);//this will list all the query parameters
})

const port =process.env.PORT ||3000;


app.listen(port,()=> console.log(`started the server and listening on ${port}`));