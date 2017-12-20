const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// Capturing the minute, seconds, hundreth of a second and a 1000th of a second
var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if(time <= 9){
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
// Cant rely on the in-built Date() class because we are not startring with the
// current time, but instead we are starting to count up from 0
function runTimer(){
    // Creating a string with proper format
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) +
    ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value;
    //Testing for accuracy

    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText){
        testWrapper.style.borderColor = "green";
        clearInterval(interval);

    }else{
        if(textEntered == originTextMatch){
            testWrapper.style.borderColor = "blue";
        }else{
            testWrapper.style.borderColor = "red";
        }
    }
}

// Start the timer:
function start(){
    let testEnteredLength = testArea.value.length;
    if (testEnteredLength === 0 && !timerRunning){
        timerRunning = true;
        interval = setInterval(runTimer, 10);

    }
    console.log(testEnteredLength);
}


// Reset everything:
function reset(){
    // console.log("Reset is pressed now");
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0 ,0];
    timerRunning = false;

    //Clear the tect testArea
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testArea.style.borderColor = "gray";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
