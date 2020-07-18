console.log("starting");
getUser(1,getRepositories);
   // console.log('User:',user);
   
    //console.log('List ::',list);
    //
//});
//});

console.log("ending");
function getRepositories(user)
{
    console.log(user);
    getRespositories(user.name,getRepos);
}
function getRepos(repo)
{
    console.log(repo);
    getCommits(repo);
    
}
function getCommits(repo)
{
    console.log(repo);
}


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