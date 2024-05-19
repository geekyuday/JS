function sayMyName(){
    console.log('geekyUday');
}

//sayMyName();

function addTwoNumber(num1,num2){

    let result = (num1 + num2);
    return result;
}

//console.log(addTwoNumber(2,5))

function loginUserMessage(username ="sam"){
    if(username === undefined){
        console.log("Please enter a username ")
        return;
    }
    return `${username} just logged In`
}

// console.log(loginUserMessage("Uday"));
console.log(loginUserMessage());



function calculateCartPrice(...num){        // rest = ...
    return num 
}

console.log(calculateCartPrice(10,20,30));

const user = {
    username : "Uday",
    prices : 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

//handleObject(user);

handleObject({
    username : "geeky",
    prices :"399"
})

const mynewArray  = [100,300,200,400];
function returnSecondValue(myarr){
    return myarr[1];
}

console.log(returnSecondValue(mynewArray));