var isMomHappy = true;

// This is a function that creates a new object of class Promise
// The Promise class requires 2 functions to be passed in
// resolve and reject

var myOwnFunction = new Promise(function(resolve, reject){
    if(isMomHappy){
        var phone = {
            model: "Samsung",
            year: "2017"
        }
        resolve(phone);
    }else{
        var errorMsg = new Error("Man you did something wrong");
        reject(errorMsg);
    }
});


// Consuming Promises
var askMom = function(){
    myOwnFunction.then((fulfilled) => {
        console.log(fulfilled)
    }).catch((error) => {
        console.log(error);
    });
};

askMom();
