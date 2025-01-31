let c=function(a){
    console.log(a);// this gives only 10 as output
    console.log(arguments);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
c(10,20,30);
//we need to print all the parameters for the above function