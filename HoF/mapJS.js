// A higher order function is a function that takes 1 or more functions
// as arguments
var teams = ["Celtics", "Lakers", "Bulls"];

// Returning an array of length of team names
// Map applies the function to each element in the array
// and returns a new array
var teamLength = teams.map((team) =>{
    return team.length;
})

// Should output [7, 6, 5]
console.log(teamLength);
