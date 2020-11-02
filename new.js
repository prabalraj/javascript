let p = new Promise((resolve,reject)=>{
    let a = 1+1;
    if (a==2){
        resolve("success");
    }else{
        reject("failed");
    }
});

p.then((out)=>{
    console.log(`resolve value is ${out}`);
}).catch((out)=>{
    console.log(`reject value is ${out}`)
});