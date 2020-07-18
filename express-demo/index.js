const express = require('express');
const Joi = require('joi');
const app = express();

//below method is used to handle the req and response ad json
app.use(express.json());

const courses =[
    {id:1,name:"java"},
    {id:2,name:"javascript"},
    {id:3,name:"dotnet"}
]

//to create new course
app.post('/api/courses',(req,res) =>{
    const schema={
        name:Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body,schema);
    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    // if(!req.params.name || req.params.name.length<3)
    // {
    //     res.status(400).send("Name must be mandatory parameters and lenght should be more than 3 characters");
    //     return;
    // }
    const course =
    {
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course);
})
//to display the default message
app.get('/',(req,res)=>{
    res.send("Welcome to express world  !!!");

});
//to display all the list of courses
app.get('/api/courses',(req,res) =>{
    res.send(courses);

});
//to get single course details
app.get('/api/courses/:id',(req,res)=>
{
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course)
        res.status(404).send("Requested course not found");
    res.send(course);
    //res.send(req.params.id);
   // res.send(req.params);//this will list all the path parameters
    //res.send(req.query);//this will list all the query parameters
})

const port =process.env.PORT ||3000;


app.listen(port,()=> console.log(`started the server and listening on ${port}`));