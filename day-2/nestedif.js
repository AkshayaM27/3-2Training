let user="admin";
let password=123456789;
console.log("Check the login details using nested if: ")
if(user === "admin"){
    console.log("Valid user");
    if(password === 12345678){
        console.log("Login sucessful");

    }
    else{
        console.log("Invalid password; unsucessful login")
    }

}else{
    console.log("Invalid user");
}