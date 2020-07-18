const p1 = new Promise((resolve)=>{
setTimeout(()=>{
console.log("Waiting for First API...");
resolve(1);
//reject(new Error('some thing went wrong'));
},2000);
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("Waiting for Second API...");
    resolve(2);
    },2000);
    });

//Promise.all([p1,p2]).then(result =>console.log("Result form the promise:",result));
Promise.race([p1,p2]).then(result => console.log("value form the promise:",result));
//Promise.all([p1,p2]).catch(error=>console.log(error.message));

//posmeis can either resolve or reject
///if we call multiple promises ussing Promise.all then it will wait 
//to complete all promises and return result.
//if any promise rejected then Promise.all will als go for catch
//if we want to resolve Promise.all if any one promise rejects then 
//we can use Promise.race than Promise.all