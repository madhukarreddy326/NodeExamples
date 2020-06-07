var MongoClient = require('mongodb').MongoClient;

var url ='mongodb://localhost/EmployeeDB';
MongoClient.connect(url,function(err,db)
{

    // to update one record

console.log('updated meployee');
db.collection('Employee').updateOne(
    
    {"EmployeeNmae":"NewEmployee"},

    {
        $set:{"EmployeeNmae":"Madhukar"}
    });
    db.collection('Employee').insertOne({
        Employee:4,
        EmployeeNmae:"NewEmployee"
    });
    //to retrieve all reocrds
    var cursor =db.collection('Employee').find();
    cursor.each(function(err,doc){
console.log(doc);
    });
console.log("Connected node");

// //to retrieve one reocrd
var cursor = db.collection('Employee').find({EmployeeName:"NewEmployee"});
console.log('find the value'+cursor._id);

db.close();
//to insert all records


});
