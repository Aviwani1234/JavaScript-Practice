// let a = 1;
// let b = document.getElementsByClassName("container");
// b.onmouseover = ()=>{
//     console.log(a++);
// }

let btn = document.getElementById('btn');
let a = function (){
    alert("Hello");
}

let b = function(){
    alert("Hi");
}

btn.addEventListener('click',a);
btn.addEventListener('click',b);

btn.removeEventListener('click', a);

