let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Hello");
        let a = 1;
        if(a===1)
        {
            resolve("Promise is resolved");
        } 
        else{
            reject("Promis is rejected");
        }  
    }, 5000);
});

// p1.then((value)=>{
//     console.log("This is after Hello");
//     //console.log(value + " that means completed the task");
//    // console.log(value);
// }).catch((err)=>{
//     console.log(err);
// })

p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve, reject)=>{
        resolve("P2 things");
    })
    return p2;
}).then((v)=>{
    setTimeout(()=>{
        console.log(v);
    },2000)
})