/*
primitive
7 Types : String, Number, Boolean, null, undefined. Symbol, Bigint

Reference Types: Non primitive
*/

const Id = Symbol('124');
const anotherId = Symbol('124');

console.log(Id===anotherId);

const BigNumber = 12345567844356676n;
console.log(typeof BigNumber);
console.log(BigNumber);


// Array, Object, Function
const heros = ["Shaktiman","naagraj","doga"];
let my_obj ={
    name : "Uday",
    age : 20
}

const my_function = function(){
    console.log("hello Duniya");
}

console.log(my_obj);
my_function();
console.log(typeof my_function)

/****************Memory************** */
/*
stack memory : in premitive  :->u will gate copy 
Heap memory : non premitive :-> u will get reference changes happen in original 

*/

let myUtube = "geekyUday";

let anotherName = myUtube;
anotherName = "Uday Kumar";

console.log(myUtube);
console.log(anotherName);


let user ={
    email:"user.google.com",
    upi:"xyz@ybl"
}
let user2 = user;

user2.email = "Platinum";
console.log(user);
console.log(user2);