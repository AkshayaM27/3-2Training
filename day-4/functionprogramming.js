function main(a){//main is the higher order function "a" is the call back function
    //console.log(a);// this returns the complete function body
    console.log(a());//this returns only return statements

}
main(function(){// this is anonymous function, this is stored in "a" variable 
    // console.log("I am Call back function1");
    return "I am Call back function1";
})
// code reusability
main(function(){
    // console.log("I am Call back function2");
    return "I am Call back function2";
})