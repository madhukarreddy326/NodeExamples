//Initially promise is in pending state
const p = new Promise((resolve,reject)=>(

    setTimeout(()=>{
     // resolve(1); //pending  to resolve or fulfilled state
     reject(new Error('message'));
    },2000)

));
p.then(result =>console.log(result))
.catch(error => console.log(error.message));