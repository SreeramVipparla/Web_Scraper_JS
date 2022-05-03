const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/kolkata-knight-riders-vs-delhi-capitals-41st-match-1254092/full-scorecard"

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        //we will do some work here.
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let highestWicketTaker = "";
        let highestWicket = 0;
        let bowlerDetail = document.querySelectorAll(".bowler tbody tr");
        for(let i=0;i<bowlerDetail.length;i++){
            let bowlerName = bowlerDetail[i].querySelector("td").textContent;
            if(bowlerName.length>0){
                // console.log(bowlerName);
                let wicket = bowlerDetail[i].querySelectorAll("td")[4].textContent;
                // console.log(wicket);
                if(wicket>highestWicket){
                    highestWicket = wicket;
                    highestWicketTaker = bowlerName;
                }
            }
        }
        console.log("Highest Wicket Taker------ > ",highestWicketTaker);
        console.log("Highest Wicket------------ > ",highestWicket);
    }
}