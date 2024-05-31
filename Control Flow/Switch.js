// switch(key) {
//     case value:
//         break;
//     default:
//         break;
// }

const month = 5

switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("june");
        break;
    default:
        console.log("not a month")
        break;
}


// Falsy Values
// false    0   -0  BigInt  0n  ""  null    udefined    NaN
// Truthy Values
//  "0", 'falsy', ' ', [], {}, function(){}


// Nullish Coalescing Operator (??) : null undefined
let val1;
val1 = 5 ?? 10;
//val1 = null ?? 10;
val1 = undefined??15;

console.log(val1);

// Terniary Operator

//condition ? true : false
(10%2==0)? console.log("true") : console.log("false")