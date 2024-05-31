const arr = [1,2,3,4,5,6,7,8,9]

// for(const num of arr){
//     console.log(num);
// }

// const greeting = 'Hello Duiya';
// for(const greet of greeting){
//     console.log(greet);
// }

// Map
const map = new Map()
map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('Chi',"China")
map.set('In',"India")

//console.log(map);

for(const [key,value] of map){
    console.log(key," :- ",value)
}


// object is not Iterable using :- for of operator
// object is iterable using for in loop