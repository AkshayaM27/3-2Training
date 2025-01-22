//closure: the binding of the child function lexical scope to the parent function is called closure
console.log("start")
function parent(){
    let a=10;
    function child(){
        console.log(a);
    }
    return child
}
parent()();
//parent()() here 1st "()" is used to call the parent  function and the 2nd "()" is used to call the child function 
//use debugging to understand more
//in inspect---> source put break points and then check 
// disadvantage of closure is memory wastage 