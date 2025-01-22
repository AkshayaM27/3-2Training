// function main(m,n){
//     for (let i=m;i<=n;i++){
//         console.log(i);
//     }
// }
// main(1,10);
// function demo(){
//     console.log("Demo function printed");

// }
// demo();

function main(m,n){
    setTimeout(()=>{
        for(let i=m;i<=n;i++){
        console.log(i);
        }
    },5000)
}
//main(1,10);
main(1,"10a");
function demo(){
    console.log("Demo function printed");

}
demo();
// ASYNCHRONOUS FUNCTION

// making a way for other function to execute first 

// ◽ Two Methods     --->     present under "window" object
//     ◽ setTimeout( call back function, delay time )  --> output once
//     ◽ setInterval( call back function, delay time )  --> fir every delay it will print


