console.log("starting");
getUser(1,(user)=>{
    console.log('User:',user);
});
getRespositories('madhukar',(list)=>{
    console.log('List ::',list);
});
console.log("ending");

function getUser(id,callback)
{    setTimeout(() =>{
        console.log("Reading data from the data bases.....");
        callback({id:id,name:'madhukar'});
        },2000);
}

function getRespositories(userName,callback)
{
    setTimeout(() =>{
        callback( ['rep1','repo2','repo3']);
    },2000);
    
}