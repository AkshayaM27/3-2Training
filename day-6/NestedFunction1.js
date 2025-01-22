var a=10;//global scope: declaring variable with var so it becomes global scope and we can acess it inside the function
let b=20;//local scope
function parent1(){
    var a="hello";
    let b="hi";
    console.log(a);
    console.log(b);
    console.log(this.a);//this key word is used to acess global scope inside the function
}
parent1();
//even if we used "let" for the variable it is becoming lexical scope within the function 