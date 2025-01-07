// global scope
var a=10;
console.log('global scope '+a);
// local scope or script scope
let b=20;
console.log('local scope with let '+b);

const c=30;
console.log('local scope with const '+c);
// block scope
{
    var m=200;//global scope
    console.log(m);

    let n=100;
    console.log(n);

    const d=300;
    console.log(d);
}
