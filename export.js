//using closures
// Exporting the values
// this is used to the secure purpose

// in this example it checks if username and password is matching or not

function checkData(storedUsername, storedPassword){
    return function(name, password){
        if(name === storedUsername && storedPassword === password){
            console.log("Login");
        }
        else{
            console.log("Check your details");
        }

    }
}

export let firstTime = checkData("surya", "1234");