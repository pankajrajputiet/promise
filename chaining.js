const promobj = new Promise((resolve,reject)=> {
    let num = 10;
    resolve (num);
}).then((value)=>{console.log(value);
    return value +10;
}).then((value)=>{console.log(value);
return value +10;
}).then((value)=>{console.log(value);
}).catch((error)=>{console.log(error);
}).finally(()=>{console.log("calega hi chalega");
})
