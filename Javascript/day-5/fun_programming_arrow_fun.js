let main1=(task)=>{//arrow function that has a parameter as task that does
    console.log(task);
    console.log(task());
}
main(()=>{
     return "i am a callback function";
})
