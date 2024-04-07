// ------ BASICS AND VARIABLES ------------------

//console.log("Hello Java Script");

FullName  = "SATKURI SAIKIRAN"; // in side the console
// console.log(FullName);         // in side the console
age = 21;
salary = 100000.50;
// console.log(salary);


full_name = "BUNNY";
FULL_NAME = "SAIKIRAN";

// console.log(full_name,"IS",FULL_NAME); // case sensitive

full_name = "BUNNY";
_full_name = "BUNNY";
Full_name = "BUNNY";
$full_name = "BUNNY";

// TO DEFINE VARIABLES
// we can define the variables by using the KEY Words only
// var
//  var age = 21;
//  var age = 20;
//  var age = 31;
//  console.log(age);

// // let
// let age = 21;


// // const


// // block
{
    let a = 10;
//     console.log(a);
}
// // second block
{
    let a = 5;
    // console.log(a);
}


// DATA TYPES
// lets practice..

//1
const profile = {
    username: "saikiran",
    isFollow: 123,
    followers: 6,
    following: 1,
};
// console.log(profile);
// console.log(typeof profile);
// console.log(typeof profile["username"]);

//2
const ballpen = {
    title: "Parker Jotter",
    price: 270,
    rating: 4,
    offer: 5,
}
console.log(ballpen);
console.log(typeof ballpen);

// now to update that the list

ballpen["price"] = ballpen["price"]+1;
console.log(ballpen);

