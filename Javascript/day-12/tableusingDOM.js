//Table 4*4 :
let divtable=document.createElement("div");
console.log(divtable);
//append div to body:
document.body.appendChild(divtable);
//create a table tag:
let table=document.createElement("table");
console.log(table);
table.setAttribute("border", "2px solid");
//for table border
//append table to div:
divtable.appendChild(table);
//create a tr tag:

let tr1=document.createElement("tr");
table.appendChild(tr1);
tr1.textContent="SNO:"
//create 4 td tags for each tr:
let td1_1=document.createElement("td");
tr1.appendChild(td1_1);

let td1_2=document.createElement("td");
tr1.appendChild(td1_2);

let td1_3=document.createElement("td");
tr1.appendChild(td1_3);

let td1_4=document.createElement("td");
tr1.appendChild(td1_4);

//Add data to the td tags:
td1_1.textContent="649";
td1_2.textContent="632";
td1_3.textContent="668";
td1_4.textContent="016";



let tr2=document.createElement("tr");
table.appendChild(tr2);
tr2.textContent="Name:"
let td2_1=document.createElement("td");
tr2.appendChild(td2_1);
let td2_2=document.createElement("td");
tr2.appendChild(td2_2);

let td2_3=document.createElement("td");
tr2.appendChild(td2_3);

let td2_4=document.createElement("td");
tr2.appendChild(td2_4);

td2_1.textContent="Akshaya";
td2_2.textContent="Yeshashvi";
td2_3.textContent="Srilekha";
td2_4.textContent="Pranaya";


let tr3=document.createElement("tr");
table.appendChild(tr3);
tr3.textContent="Age:"
let td3_1=document.createElement("td");
tr3.appendChild(td3_1);
let td3_2=document.createElement("td");
tr3.appendChild(td3_2);
let td3_3=document.createElement("td");
tr3.appendChild(td3_3);
let td3_4=document.createElement("td");
tr3.appendChild(td3_4);

td3_1.textContent="20";
td3_2.textContent="19";
td3_3.textContent="19";
td3_4.textContent="21";
//fourth
let tr4=document.createElement("tr");
table.appendChild(tr4);
tr4.textContent="Branch:"
let td4_1=document.createElement("td");
tr4.appendChild(td4_1);
let td4_2=document.createElement("td");
tr4.appendChild(td4_2);
let td4_3=document.createElement("td");
tr4.appendChild(td4_3);
let td4_4=document.createElement("td");
tr4.appendChild(td4_4);
td4_1.textContent="CSE";
td4_2.textContent="CSE";
td4_3.textContent="CSE";
td4_4.textContent="CSE";
