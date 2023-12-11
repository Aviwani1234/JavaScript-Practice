setTimeout(function(){
    console.log("after 5 sec");
},5000)

function x(y){
    console.log("Hii");
    y();
}

x(function y(){
    console.log("Hello");
});