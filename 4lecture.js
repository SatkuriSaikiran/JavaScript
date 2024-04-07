// Arrays

let Marks = [97,75,85,36,32,67,76];
console.log(Marks);
console.log(Marks.length); // property

let heroes = ["ironman","thor","doraeman","spyderman"]

// LOOPING in arrays

// let heroes = ["ironman","thor","hulk","spiderman","doraeman"];
// // for loop

// for(let i = 0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// // for of

let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];
for(let city of cities){
    console.log(city);
}

// let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// Q for a given marks of the students [85, 97,44, 37, 76, 60] find the average marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of marks){
    sum += val;
}
let avg = sum/marks.length;
console.log(`avg marks of the class= ${avg}`);





