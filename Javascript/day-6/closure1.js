function parent(){
    function child1(){
        console.log("I am child 1");
        function child1_1(){
            console.log("I am child1_1");
        }
     return child1_1;

    }
    
    function child2(){
        console.log("I am child 2");

    }
    //return child1, child2;// return keyword cannot take 2 values and only 1 return for 1 method
    return [child1,child2];
}
parent()[0]()();
parent()[1]();
