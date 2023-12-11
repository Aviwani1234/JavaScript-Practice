let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(
      "I'm resolved, now its time for one by one execution of multiple promise attachement sequentionally"
    );
  }, 2000);
}).then((value) => {
  console.log(value);
});

p.then(() => {
  setTimeout(() => {
    console.log("P0");
  }, 1000);
});

p.then(() => {
  setTimeout(() => {
    console.log("P1");
  }, 2000);
  //console.log("P1");
});

p.then(() => {
  setTimeout(() => {
    console.log("P2");
  }, 3000);
  // console.log("P2");
});
