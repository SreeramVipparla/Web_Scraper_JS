const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

console.log("Before");

request("https://www.npmjs.com/package/request", cb); // Async
function cb(error, response, html) {
    if (error) {
        console.log("Some error", error);
    } else {
        const dom = new JSDOM(html);  // dom
        const document = dom.window.document;
        let contentElem = document.querySelector("._3f330ce9");
        let content = contentElem.textContent;
        console.log(content);
    }
}

console.log("After");