console.log("Function Expression: ")
//a(); ----> hoisting is not possible in the function expression
//it returns a reference error

let a=function ()// anonymous function, function without a function-name
{
console.log("HELLO");

}
console.log(a);//this will print the complete function
a();//this will print only hello
//console.log(a());