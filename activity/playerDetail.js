const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard"

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let anchorTagOfPlayer = document.querySelectorAll(".batsman tbody tr td a");
        for(let i=0;i<anchorTagOfPlayer.length;i++){
            let playerLink = "https://www.espncricinfo.com/"+anchorTagOfPlayer[i].href;
            // console.log(playerLink);
            request(playerLink,cb2);
        }
    }
}

function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allDetails = document.querySelectorAll(".player-card-description.gray-900");
        let fullName = allDetails[0].textContent;
        let dateOfBirth = allDetails[1].textContent;
        console.log("Player Details");
        console.log("Full Name---------------> ",fullName);
        console.log("Date of Birth-----------> ",dateOfBirth);
        console.log("##########################################################################");
    }
}