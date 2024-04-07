// Operators

// -- Arithmatic Operators
let a = 5;
let b = 2;
let c = a+b;

console.log(a,"+",b,"=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b); // division
console.log("a%b=",a%b); // Modulus
console.log("a**b=",a**b); // Exponentiation

//-- Unary Operators

// let a = 5;
// let b = 8;

// a++; // or a = a+1; 
// console.log("a++ = ",a); // post increment
// console.log(a);
// a--;
// console.log("a-- = ",a);

// -- Assignment Operators

// let a = 5;
// let b = 2;

// a -= 1;
// console.log(a);

// comparision Operators

// let a = 4;
// let b = 3;
// console.log("a == b",a == b);
// console.log("a != b",a != b);

// Logical Operators
// let a = 5;
// let b = 4;

// let cond1 = a > b;
// let cond2 = a == 6;
// console.log(cond1);
// console.log(cond2);
// console.log(cond1 && cond2);

///--Conditional Statements

// let age = 20;

// if(age >= 18){
//     console.log("Can VOTE");
// }
// else{
//     console.log("Can NOT VOTE");
// }


// Even or Odd
// let num = 4;
// if(num % 2 ==0){
//     console.log("Even Number");
// }
// else{
//     console.log("Odd Number");
// }

// Ternary Operators
// let age = 25;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);



//-->>> LETS PRACTICE

// 1) Get user to input a number using prompt("Enter a number:"). check if the number is a multiple of 5 or NOT

// let a = prompt("Enter a number:");
// if(a % 5 == 0){
//     console.log(a, "is multiple of 5");
// } else{
//     console.log(a, "is NOT Multiple of 5");
// }

// 2) write  a code which can give grades to students according to their scores:

let M = prompt("Enter Marks here:");
let grade;
if(M >= 90 && M <= 100){
    grade = "A";
}
else if(M >= 70 && M <= 89){
    grade = "B";
}
else if(M >= 60 && M <= 69){
    grade = "C";
}
else if(M >= 50 && M <= 59){
    grade = "D";
}else{                // or else if(M >= 0 && M <= 49)
    grade = "F";
}
console.log("Student Got the grade is ",grade);





