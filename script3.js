//map
let a1 = [1,2,3,4,5]
let temp1 = a1.map((element, index)=>{
    //console.log(element, index);
    return element*5;
})
//console.log(temp1);

//filter
let a2 = [5,6,7,8,9]
let temp2 = a2.filter((element)=>{
    return element === 8
})
//console.log(temp2);

//reduce
let a3 = [1,2,3,4]
let temp3 = a3.reduce((e1, e2)=>{
    return e1+e2;
})
console.log(temp3);