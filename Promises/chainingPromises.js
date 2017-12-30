var isMomHappy = true;

// Creating a Promise object
// Using arrow functions
var myownPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        var phone = {
            model: "Samsung",
            year: "2017"
        }
        resolve(phone)
    }else{
        var errorMsg = "You did something wrong dude!";
        reject(errorMsg);
    }
});


//Creating another Promise
// This will be chained with the 1st promise

var showOff = function(phone){
        return new Promise((resolve, reject) => {
        var friendMsg = "Yo! I got a new " + phone.model + " with a "
        + phone.year + " model";

        resolve(friendMsg);

        // Whole thing can be shortende to:
        // return Promise.resolve(friendMsg);
});
};


// Chaining Promises
var askMom = function(){
    myownPhone.then(showOff)
              .then((fulfilled) => {
                  console.log(fulfilled);
              }).catch((error) => {
                  console.log(error);
              });
};

askMom();
