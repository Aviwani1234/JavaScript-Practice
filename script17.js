// var are function scoped
var a = 10;
console.log(a);
function x()  
{
    var a = 100;
    console.log(a);
}
x();
console.log(a);

// in above code o/p is 10, 100, 10 
// if we remove function x and keep only {} then o/p is 10, 100, 100
