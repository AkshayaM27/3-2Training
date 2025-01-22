
let online = window.navigator.onLine    // window --> has many APIs --> navigator (is one of them)
                                        // onLine --> is a method in "navigator" -> it will see whether device is connected to internet
new Promise( (resolve, reject) => {
    setTimeout( () => {
        if (online === true) {
            return resolve();
        }
        else {
            return reject();
        }
    }, 5000 )
} )
.then( () => console.log("online... 😁") )
.catch( () => console.log("offline... 🙁") )
// ASYNCHRONOUS FUNCTION

// making a way for other function to execute first 

// ◽ Two Methods     --->     present under "window" object
//     ◽ setTimeout( call back function, delay time )  --> output once
//     ◽ setInterval( call back function, delay time )  --> fir every delay it will print
