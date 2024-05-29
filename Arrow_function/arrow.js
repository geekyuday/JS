const user ={
    username : "uday",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);  // this : current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username ="geeky";
// user.welcomeMessage();


// console.log(this);

function chai(){
    let username = "uday"
    console.log(this.username);     // not defined
}

chai();

// const chai2 = function (){
//     let username = "uday"
//     console.log(this.username);     // not defined
// }

// console.log(chai2);


const chai2 =  ()=>{
    let username = "uday"
    console.log(this);     // not defined
}

chai2()


// const addtwo = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(addtwo(3,5));



//const addtwo = (num1,num2) => num1 + num2;
const addtwo = (num1,num2) => (num1 + num2);

console.log(addtwo(3,5));
