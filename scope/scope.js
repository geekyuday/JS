let a = 10;
const b = 20;
var c = 30;

if(true){
    var d = 40;
}
console.table([a,b,c]);
console.log(d);

function one(){
    const username = "Uday"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one();


if(true){
    const username = "geeky "
    if(username==="geeky "){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

//********* Interesting **********//


console.log(addone(5)); // Hoiesting
function addone(num){
    return num + 1;
}

//console.log(addone(5));


// console.log(addtwo(5));  // gives error in hoiesting because it is stored in variable

const addtwo = function(num){
    return num + 2;
}

// console.log(addtwo(5));