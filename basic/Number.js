

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.456735;
console.log(otherNumber.toPrecision(3));

const hundred = 1000000;
console.log(hundred.toLocaleString());
//console.log(hundred.toLocaleString('en-IN'));



// *************Math Library***********


console.log(Math);
console.log(Math.abs(-4.96));
console.log(Math.round(8.92));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(45,6,3,6,7,842,4,7));
console.log(Math.max(45,6,3,6,7,842,4,7));
console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1))+min);