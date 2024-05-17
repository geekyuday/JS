

const name = "Uday";
const repoCount = 20;

console.log(name + repoCount + "value");  // concatenate

// backtick with string repolation
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Platinum");
console.log(gameName);
console.log(typeof gameName);
console.log(__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('P'));

console.log(gameName.substring(0,5));
const p = gameName.slice(-8,4);
console.log(p);



const url = "https://geekyUday.com/uday%20kumar";
console.log(url);

console.log(url.replace('%20','_'));

console.log(url.includes('Uday'));
console.log(url.includes('Platinum'));
console.log(url.split('.'));