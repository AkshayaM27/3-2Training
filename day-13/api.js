let obj={
    name:"Akshaya",
    id:1,
    designation:"developer"
}
console.log(obj);
let obj1=JSON.stringify(obj);//covert object to JSON
console.log(obj1);
let obj2=JSON.parse(obj1);//Converts JSON to Object
console.log(obj2);

// let a=window.fetch()//this is a promise
// console.log(a);

window.fetch("data.json")
.then((data)=> data.json())
.then((res)=>{
    // console.log(res);
    // console.log(res[0]);
    // console.log(res[1]);
    // console.log(res[0].name);
    res.map((x)=>{//map is a higger oder method, all the objects are iterated 
        console.log(x);
        console.log(x.name);
        console.log(x.id);
        console.log(x.designation);
        document.body.innertHTML +=`<h1>${x.name}</h1>`;
        document.body.innertHTML +=`<h1>${x.id}</h1>`;
        document.body.innertHTML +=`<h1>${x.designation}</h1>`;

    })
})
