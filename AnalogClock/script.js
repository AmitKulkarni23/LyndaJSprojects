const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


// Grab hold of date ( specifically granb hold of hours, minutes and seconds)
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log("The current hour is ", hr);
console.log("The current minute is ", min);
console.log("The current second is ", sec);

// Update the minute, hour and second hands
// Placing these variables outside the runTheClock functionality
// so as to keep the animation
let hrPosition = (hr * 360 / 12) + ((min*360/60) / 12);
let minPosition = (min * 360 / 60) + ((sec * 360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock(){

    secPosition += 6;
    minPosition += 0.1;
    hrPosition += 360 / (3600 * 12);

    // Rotate the hour, minute and second hands by that many positions
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


// Use setInterval functionality to run the block of code in
//runTheClock function
var interval = setInterval(runTheClock, 1000);
