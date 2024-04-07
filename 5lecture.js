// function myfunction(){
//     console.log("welcome");
// }

// myfunction();


// // Parameter (Input variable)
// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("Hey..!!!");

// arrow function

// const arrowfun = (a,b) =>{
//     return a+b;
// }

// create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

// function countVowels(str){
//     let count = 0;
//     for (const char of str){
//         if (
//             char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//         ) {
//             count++;
//         }
//     }
//     console.log(count);
// }


// // - - forEach function

// let arr = ["pune","delhi","mumbai"];

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })



// // print the square of each value using the forEach loop

// let nums = [2, 3, 4, 5, 6, 8];

// nums.forEach((nums) => {
//     console.log(nums*nums);
// })


// filter method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let evenArr = arr.filter((val) =>{
//     return val % 2 === 0;
// })
// console.log(evenArr);

let n = prompt("enter a number:");
let arr = [];

for (let i = 1; i <= n; i++){
    arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("sum =",sum);

let factorial = arr.reduce((res, curr) =>{
    return res*curr;
})
console.log("factorial = ",factorial);