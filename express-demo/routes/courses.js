const express = require('express');
const Joi = require('joi');
const router = express.Router();

const courses =[
    {id:1,name:"java"},
    {id:2,name:"javascript"},
    {id:3,name:"dotnet"}
]

//to create new course
router.post('/',(req,res) =>{
    // const course1 = courses.find(c => c.id == parseInt(req.params.id));
    // if(!course1)
    //     res.status(404).send("Requested course not found");
    const {error} = validateSchema(req.body);
    if(error)
    {
        res.status(400).send(error.details[0].message);
        return;
    }
    // if(!req.params.name || req.params.name.length<3)
    // {
    //     res.status(400).send("Name must be mandatory parameters and lenght should be more than 3 characters");
    //     return;
    // }
    const course2 =
    {
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course2);
    res.send(course2);
})
//to update the existing course
router.put('/:id',(req,res)=>
{
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course)
        return res.status(404).send("Requested course not found");
    const {error} = validateSchema(req.body);
    if(error)
     return res.status(400).send(error.details[0].message);
        
    course.name=req.body.name;
    res.send(course);

});

//delete a course with the given Id value
router.delete('/:id',(req,res)=>{
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course)
        return res.status(404).send("Requested course not found");
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});
//to display all the list of courses
router.get('/',(req,res) =>{
    res.send(courses);

});
//to get single course details
router.get('/:id',(req,res)=>
{
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course)
        return res.status(404).send("Requested course not found");
    res.send(course);
    //res.send(req.params.id);
   // res.send(req.params);//this will list all the path parameters
    //res.send(req.query);//this will list all the query parameters
})
function validateSchema(course)
{
    const schema={
        name:Joi.string().min(3).required()
    };
    return Joi.validate(course);
}
module.exports = router;