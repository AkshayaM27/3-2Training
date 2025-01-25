function demo(){
    console.log("hello world");
}
demo();
let a=document.getElementById("demo1")
console.log(a);
a.onclick=function(e){
    console.log(e);//this gives pointerevent
    let res=Math.round(Math.random()*10000);
    console.log(res);
   //◻️ this will give random numbers like OTP generation
    //random is a method in Math object
    //math is an object and it has so many methods like random, square ,....
    let res1=Math.round(Math.random()*10000).toString(16);
    //toString is used to give a letter inside a  
    console.log(res1);
    document.body.style.backgroundColor=`#${res1}`;
    //◻️The ${} syntax is commonly used in template literals in JavaScript. A template literal is a way to create strings, and the ${} part allows embedding expressions or variables into the string.
    //◻️Template literals are enclosed by backticks (`), not quotes (' or ").
   
    }
    // let demo2=document.getElementById("demo2");
    // console.log("demo2");
    // let color=window.prompt("Enter a color name:")
    // console.log(color);
    // demo2.innerHTML=color;
    // demo2.onmouseover=()=>{
    //     document.body.style.backgroundColor=`${color}`
    //     document.body.style.transition="ease all 3s";
        //◻️ease all is use to give the color slowly
        //◻️space is needed between ease all 3 because all are 3 different values

//}
let demo4=document.getElementById("demo4");
console.log(demo4);
demo4.addEventListener("click",()=>{
    let demo3=document.getElementById("demo3").value
    console.log("demo3");
    let speech=new SpeechSynthesisUtterance
    console.log(speech);
    speech.text=demo3
    speechSynthesis.speak(speech)


})