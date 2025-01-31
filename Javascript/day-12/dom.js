let a=document.createElement("h1");
console.log(a);
a.textContent="hello-World";
document.body.appendChild(a);
a.style.backgroundColor="crimson";

//-------------------------------------------------------------------------------

let div=document.createElement("div");
console.log(div);//empty div tag is created
//append div to body:
document.body.appendChild(div);
div.style.border="2px solid";
//create a ol tag:
let ol=document.createElement("ol");
console.log(ol);
//append ol to div:
div.appendChild(ol);
//create a li tag:
let li1=document.createElement("li");
li1.textContent="React";
ol.appendChild(li1);

let li2=document.createElement("li");
li2.textContent="Node JS";
ol.appendChild(li2);

let li3=document.createElement("li");
li3.textContent="Javascript"
ol.appendChild(li3);

let li4=document.createElement("li");
li4.textContent="Java"
ol.appendChild(li4);
ol.setAttribute("type", "i");
//ol.setAttribute("type", "I");
//ol.setAttribute("type", "a");
//ol.setAttribute("type", "A");








