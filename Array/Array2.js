const marvel_hero = ["thor","ironMan","spiderMan"];
const dc_Hero  = ["superMan","flash","batMan"];

//marvel_hero.push(dc_Hero);
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const all_heros = marvel_hero.concat(dc_Hero);
// console.log(all_heros);

// spread operator
// const all_new_hero = [...marvel_hero, ...dc_Hero]
// console.log(all_new_hero);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Uday"));
console.log(Array.from("Uday"));


console.log(Array.from({name:"geeky"})) ; // Interesting   confuse whic one is converted in array


let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;

console.log(Array.of(score1,score2,score3,score4,score5));

