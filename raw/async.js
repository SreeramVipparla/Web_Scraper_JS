const fs = require("fs");

console.log("Before");

fs.readFile("./f2.txt", cb); // Async
function cb(error, data) {  // callback
    if (error) {
        console.log("Some Error", error);
    } else {
        console.log(data+"");
    }
}

console.log("After");