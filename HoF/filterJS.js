// A higher order function is a function that takes 1 or more functions
// as arguments

// Creating an array of random numbers
var randomNum = [3, 4, 6, 7, 9]

// Filtering only those numbers that are divisible by 2
var divisibleBy2 = randomNum.filter((num) => {
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }});

console.log(divisibleBy2);

// Should output -> [4, 6]
