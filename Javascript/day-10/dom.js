let c=document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[0].style.color="red";
c[1].textContent="hello";
let d=document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
console.log(d[0]);
d[0].style.backgroundColor="orange";
d[1].style.backgroundColor="crimson";
//document.querySelector: we have to pass a value with css symbol
//--->will return reference of first element
let e=document.querySelector("#demo");
console.log(e);
let e1=document.querySelector(".demo1");
console.log(e1);

//document.querySelectorAll: we have to pass the value with css symbol
//--->will return reference in a node list 
let f=document.querySelectorAll("#demo");
console.log(f);
let f1=document.querySelectorAll(".demo1");
console.log(f1);
console.log(f1[0]);
console.log(f1[1]);


