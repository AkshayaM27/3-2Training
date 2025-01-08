let a=10;
let b=20;
let c=30;
console.log("Finding greatest of three using else-if ladder: ");
if(a>=b && a>=c){
    console.log(a+" is the greatest of three numbers");
}
else if (b>=a&& b>=c){
    console.log(b+" is the greatest of three numbers");
}
else{
    console.log(c+" is the greatest of three numbers");
}