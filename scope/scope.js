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

function addone(num){
    return num + 1;
}

//console.log(addone(5));

const addtwo = function(num){
    return num + 2;
}

// console.log(addtwo(5));