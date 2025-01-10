//performing multitasking function programming  with arrow function
let operation=(a,b, task)=>{// arrow function operation function is higher order function
    console.log(task(a,b));

}
operation(a=Number(prompt("Enter a for addition")),
b=Number(prompt("Enter b for addition")),
(a,b)=>{
    return a+b;
})

operation(a=Number(prompt("Enter a for sub")),
b=Number(prompt("Enter b for sub")),
(a,b)=>{
    return a-b;
})

operation(a=Number(prompt("Enter a for mult")),
b=Number(prompt("Enter b for mult")),
(a,b)=>{
    return a*b;
})

operation(a=Number(prompt("Enter a for division")),
b=Number(prompt("Enter b for division")),
(a,b)=>{
    return a/b;
})