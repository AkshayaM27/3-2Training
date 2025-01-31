console.log(window);
console.log(document);
console.log(window.document);
console.log(typeof document);
console.log(typeof window);
//typeof gives the datatype of the value
console.log(document.URL);
console.log(document.DOCTYPE);
console.log(document.head);
console.log(document.title);
document.title="Flipkart";
//◻️here we have performed dynamic changes to the website, DOM is used to create, update/modify, delete 
//target a particular element to make changes
console.log(document.body);
let link=document.links;
console.log(link);
// console.log(link[0]);
// console.log(link[1]);
// console.log(link[2]);
for(let i=0;i<link.length;i++){
    console.log(link[i]);
    link[i].className="demo";
    link[i].href="https://www.youtube.com";
    link[i].target="_blank";
}
let a=document.getElementById("demo1")
console.log(a);
console.log(a.textContent);
//textContent will give the value present in the variable
//line 28 eill give HelloWorld!!
a.textContent="Group-6";
console.log(a.textContent);
//line 32 will give Group-6
a.style.backgroundColor="red";
a.style.textAlign="center";
let b=document.getElementsByClassName("demo2");
console.log(b);// inside b the h2,h3 are stored as a html collection which is an array
console.log(b[0]);
console.log(b[0].textContent);
b[1].style.backgroundColor="blue";
console.log(b[1]);
