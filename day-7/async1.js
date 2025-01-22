window.setTimeout(()=>{
    console.log("iam setTimeout");
})
window.setInterval(()=>{
    console.log("iam setInterval");
}
)
// ◽ there are few situation where asynchronous function doesn't work

// so in this it will take help of --- Promises --- comes into picture it takes over asynchronous function

// Promise

// ◽ it is an object
// ◽ it is used to look after asynchronous function

// ◽ It has 3 - phases
//     1️⃣ pending phase  -->  we dont know whether the "promise" is rejected/fulfilled
//     2️⃣ resolved / fulfill phase  -->  when asynchronous function is working properly
//     3️⃣ reject phase  -->  when asynchronous function is NOT working properly

// ◽ when "Promise" will return -> resolve -> then resolve will accept a method --> .then( call back function ) --> which accepts Call back function
// ◽ when "Promise" will return -> reject -> then reject will accept a method --> .catch( call back function ) --> which accepts Call back function

/*
🔅Syntax:

new Promise( (resolve, reject) => {
    -- asynchronous-function-code
} ,delay time)
.then(cbf)   // if resolved
.catch(cbf)   // if rejected

 */