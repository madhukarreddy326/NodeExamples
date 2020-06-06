var MongoClient = require('mongodb').MongoClient;
var url ='mongodb://localhost/EmployeeDB';
MongoClient.connect(url,function(err,db)
{
db.collection('Employee').deleteOne({
    "EmployeeNmae": "Madhukar"}
);

});