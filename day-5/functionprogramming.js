function main(task){//main is the higher order function
    //task is the call back function anonymous function
   // console.log(task);
    console.log(task(10,10));
}main(function(a,b){
    return a+b;
})
main(function(a,b){
    return a-b;
})
main(function(a,b){
    return a*b;
})
main(function(a,b){
    return a/b;
})
main(function(a,b){
    return a%b;
})