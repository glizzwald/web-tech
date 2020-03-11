var tweetLength, tweetInput;

function handleInput() {
    console.log("something has changed");
    console.log(tweetInput.value.length)

}


function main() {
    tweetcount = document.getElementById('tweet-length');
    tweetcount = document.getElementById('tweet-input');

    tweetInput.addEventListener("input 1", handleInput)
    debugger;
    console.info('page has been loaded');
}