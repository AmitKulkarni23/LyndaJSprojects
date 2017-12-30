var isMomHappy = true;

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

var askMom = function(){
    myOwnFunction.then((fulfilled) => {
        console.log(fulfilled)
    }).catch((error) => {
        console.log(error);
    });
};

askMom();
