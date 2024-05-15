const accountID = 2215113;
let accountEmail ="Uday@gmail.com";
var accountPassWord = "12345";
accountCity = "Begusarai";
let accountState;

// accountID = 12;
console.log(accountID);
console.log(accountEmail);

console.table([accountID,accountEmail,accountPassWord,accountCity,accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope

*/

console.log(typeof(accountCity));