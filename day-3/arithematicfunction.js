let a=prompt("Enter 1st number:");
let b=prompt("Enter 2nd number:");
console.log("Arithematic Operations using functions: ");
//Assignment
function arithematicope(a,b){
    let sum=(+a)+ (+b) ;
    console.log("Addition:"+sum);
    let sub=a-b;
    console.log("Subtraction:"+sub);
    let mult=a*b;
    console.log("Multiplication:"+mult);
    let div=a/b;
    console.log("Division:"+div);
    let mod=a%b;
    console.log("Modulus:"+mod);
    let inc=a++;
    console.log("Increment:"+inc);
    let preinc=++a;
    console.log("Pre-Increment:"+preinc);
    let dec=a--;
    console.log("Decrement:"+dec);
    let predec=--a;
    console.log("Pre-Decrement:"+predec);
}
//function call
arithematicope(a,b);