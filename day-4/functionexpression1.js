
let b=function(){
    let i1=Number(prompt("Enter 1st number:"));
    let i2=Number(prompt("Enter 2nd number:"));
    let i3=Number(prompt("Enter 3rd number:"));
    let sum=(i1)+(i2)+(i3);
    console.log("sum: "+sum);
    let sub=i1-i2-i3;
    console.log("sub: "+sub);

    let mult=i1*i2*i3;
    console.log("mul: "+mult);

    let div=i1/i2/i3;
    console.log("div: "+div);
    let inc=i1++;
    console.log("inc:"+inc);
    let dec=i1--;
    console.log("dec: "+dec);


    if (i1>=i2 && i1>=i3){
        console.log(i1+" is greatest");

    }
    else if (i2>=i1 && i2>=i3){
        console.log(i2+" is greatest");
    }
    else{
        console.log(i3+" is the greatest")
    }


}
//console.log(b());
b();