var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';
MongoClient.connect(url).
then(function(db){
    db.collection('Employee').insertOne({
        Employee :6,
        EmployeeNmae :"employee_06072020"
    }) .then(function(db){
        db.collection('Employee').insertOne({
            Employee :11,
            EmployeeNmae :"adfaadfd"
        })
    })
});