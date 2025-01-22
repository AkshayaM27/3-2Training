function main(){
    let a=10;//here a would be undefined
    function child(){
        console.log("This is an example for lexical scope:")
        console.log(a);// now a will become as 10; remember the debugging in first class and scope explanation

    }//child function is local scope for main function
    //main function is global scope to child function
    //js engine will first search for the variable inside the local scope (child function) if it is not present in it then it will search inside the global scope (main function)

    child();
}
main();//first this function call is done then it goes inside the function and then it goes to child() function call