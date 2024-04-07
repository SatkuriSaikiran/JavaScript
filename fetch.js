// 1st Example
// async function fetchingData(){
//     let resolve = await fetch("https://fakestoreapi.com/products");

//     let data = await resolve.json();
//     console.log(data);
// }
 
// fetchingData();


// to handle the API fetching error

// async function fetchingData(){

//     try{
//         let resolve = await fetch("https://fakestoreapi.com/prod");
//         let data = await resolve.json();
//         console.log(data);
//     }
//     catch{
//         console.log("error");

//     }

// }

// fetchingData();


// 2nd Example: Fetching Facts about CATS using API
const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response); // JSON format
    let data = await response.json();
    factPara.innerText = data[prompt("Enter a number 1 to 4 ")].text;
    
};

btn.addEventListener("click", getFacts);


