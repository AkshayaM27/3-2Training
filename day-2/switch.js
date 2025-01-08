let userinput=prompt("Enter the day: ");
switch(userinput){
    case "Monday"|| "Tuesday":
        console.log("Football");
        break;
    case "Wednesday"|| "Thursday":
        console.log("cricket");
        break;
    case "Friday":
        console.log("vollyball");
        break;
    case "Saturday":
        console.log("Basketball");
        break;
    default:
        console.log("Holiday");

}