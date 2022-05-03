const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-punjab-kings-53rd-match-1254094/ball-by-ball-commentary";

request(link, cb);
function cb(error, response, html) {
    if (error) {
        console.log("Some error while requesting..");
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allCommentsBox = document.querySelector(".mb-5.comments-container-body");
        let firstMatchCommentBox = allCommentsBox.querySelector(".match-comment");
        let lastBallCommentBox = firstMatchCommentBox.querySelector(".d-flex.match-comment-padder.align-items-center");
        let lastBallComment = lastBallCommentBox.querySelector(".match-comment-long-text > p").textContent;
        console.log(lastBallComment);
    }
}