// Object Literals

//Object.create() // by constructor : singleton object formed

const mySym = Symbol("key1");

const jsUser = {
    name:"geeky",
    "full Name" : "geekyuday",
    age: 18,
    email: "uday.google.com",
    [mySym] : "mykey1",
    isloggedIN: false,
    lastLoggedIN : ["monfay","sunday"]

};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);
//console.log(jsUser);

//Object.freeze(jsUser);    // freeze object no changes are allowed


jsUser.email = "geeky_123.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Duniya");
}

jsUser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());