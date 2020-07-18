console.log("starting");
const result = getUser(1);
console.log(result);
console.log("ending");

function getUser(id)
{    setTimeout(() =>{
        console.log("Reading data from the data bases.....");
        return {id:id,name:'madhukar'};
        },2000);
}