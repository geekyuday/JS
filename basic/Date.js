let MyDate = new Date();
console.log(MyDate.toLocaleDateString());  // 17/5/2024
console.log(MyDate.toString());  // Fri May 17 2024 16:20:32 GMT+0530 (India Standard Time)
console.log(MyDate.toDateString());  // Fri May 17 2024
console.log(MyDate.toISOString())   //2024-05-17T10:52:20.467Z

let myCreateDate = new Date(2024,9,5);
console.log(myCreateDate);
console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);    // in milli second for cpmaparison
// console.log(myCreateDate.getTime());  

console.log(Math.floor(Date.now()/1000));