var Q = require('q');
function Add()
{
    var a,b,c;
    a=5,b=6;
    c = a+b;
}
var Display_Promise = Q.denodeify(Add);

var promise = Add;
promise.then
{
    console.log("Adding function cpmplted");
}