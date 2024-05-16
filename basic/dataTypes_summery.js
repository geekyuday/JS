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