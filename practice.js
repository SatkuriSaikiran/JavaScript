// setTimeout( function(){
//     console.log("Hi Every One");
// },3000)

// Initialize the interval and store it in a variable
let interval = setInterval(function(){
    console.log("This is setInterval");
}, 3000);

// Set a timeout to stop the interval after a certain time
setTimeout(function() {
    clearInterval(interval); // Clear the interval
}, 15000); // Stop the interval after 15 seconds

let a = 12;
let b = 10;
let c = a===b;
console.log(c);
