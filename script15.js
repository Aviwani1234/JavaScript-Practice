let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    },1000);
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    },2000);
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },3000);
});

// p1.then((value)=>{
//     console.log(value);
// });

// p2.then((value)=>{
//     console.log(value);
// });

// p3.then((value)=>{
//     console.log(value);
// });

//1. Promise.all()
// let promise_all = Promise.all([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);
// });

//2. Promise.allSettled()
// let promise_allSetteled = Promise.allSettled([p1,p2,p3]);
// promise_allSetteled.then((value)=>{
//     console.log(value);
// });

//3. Promise.race()
// let promise_race = Promise.race([p1,p2,p3]);
// promise_race.then((value)=>{
//     console.log(value);
// });

//4. Promise.any()
// let promise_any = Promise.any([p1,p2,p3]);
// promise_any.then((value)=>{
//     console.log(value);
// });

//5. Promise.resolve()
let promise_resolve = Promise.resolve("0");
promise_resolve.then((value)=>{
    console.log(value);
})

//6. Promise.reject()
//let promise_reject = Promise.reject(new Error("hey"));

