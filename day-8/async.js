//isNaN will accepts characters only ---> checks weather the number or character
function main(m,n){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(m)|| isNaN(n))
            {
                return reject()
            }
            for(let i=m;i<=n;i++){
                console.log(i);
            }
            return resolve()
        })
    },5000)
    .then(()=>console.log("Promise is resolved"))
    .catch(()=>console.log("Error occured"))

    //promise Chaining: using multiple then methods is called promise chaining
    //this is not the best method it has complexity 
    //◻️async and await is used to avoid promise chaining 



}
main(1,10)
function demo(){
    console.log("Demo function printed");

}
demo();