// loops in js

// for loop
//------------
// print 1 to 5
// for(let i = 1; i <= 5; i++){
//     console.log("apna college"); // 5 times executes
// }
// console.log("loop has ended");

// // calculate sum of 1 to n
// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log(sum);

// // print 1 to 5;
// for (let i = 1; i <= 5; i++){
//     console.log("i =",i);
// }
// console.log(i);

// // while loop

// let i = 1;
// while(i<=6){
//     console.log("i = ",i);
//     i++;
// }

// let i = 1;
// while(i<=5){
//     console.log("Saikiran");
//     i++;
// }

// do while loop

// let i = 20;
// do {
//     console.log("Saikiran");
//     i++;
// } while(i <= 10);

// let i = 1;
// do{
//     console.log("i = ",i);
//     i++;
// } while (i <= 5);

// ----for - of loop

// let str = "Saikiran";

// for(let i of str){
//     console.log("i= ",i);
// }


// let str = "Saikiran";
// let size = 0;
// for(let i of str){
//     console.log("i= ",i);
//     size++;
// }
// console.log("Str size",size); //10


// ------for - in loop

// let student = {
//     name: "Rahul Kumar",
//     age: 21,
//     cgpa: 9.5,
//     isPass: true,
// };

// for (let i in student){
//     console.log("key = ",i, "value= ", student[i]);         // written keys
// }

// LETS PRACTICE

// // print all even numbers from 0 to 100.

// for(let num = 0; num<=100; num++){
//     if(num % 2 == 0){
//         console.log("Num =",num);
//     }
// }

// // print all odd numbers from 0 to 100.

// for(let num = 0; num<=100; num++){
//     if(num % 2 != 0){
//         console.log("Num =",num);
//     }
// }


// -- create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number. Guess again: ");
// }
// console.log("congratulations, you entered the right number");

//--------------------------------------

// Strings 

let str = "ApnaCollege";
let str2 = "SATKURI saikiran";
console.log(str[8]);

//Template literals
let sentence = `my name is saikiran`
console.log(`hello my name is ${str2}`);


// LETS practice

// Q1) prompt the user to enter their full  name. generate a username for them based on the input start username with @, followed by their full name and ending with the fullname length.

let fullname = prompt("enter your fullname without spaces");
let userName = "@"+ fullname +fullname.length;
console.log(userName);

