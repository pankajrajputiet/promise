function prom(condition){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(condition){
        resolve("condition passed");
      }else{
        reject("condition failed");
      }
    }, 4000);
  });
}

let onfill = (result)=>{
  console.log(result);
}

let onfail = (error)=>{
  console.log(error);
}

prom(true).then(onfill).catch(onfail);

