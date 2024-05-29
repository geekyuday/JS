let isuserloggedin = false

if(isuserloggedin){
    console.log("welcome to the website")
}
else{
    console.log("please log in")
}

//  <   >   <=  >=  ==    !=    ===    !==

const score = 200

if(score>100){
    const power = "fly"
    console.log(`user power : ${power}`);
}

//console.log(`user power : ${power}`);



const balanced = 900;
//if(balanced>500) console.log("balanced",balanced),console.log(balanced,"greater than 500")

if(balanced>500){
    if(balanced>750){
        console.log(balanced,"greater than 750")
    }
    else{
        console.log(balanced,"greater than 500 less than 750")
    }
}
else{
    console.log(balanced,"less than 500")
}




// practical 

const userloggedIn = true;
const debitCard = false;
const userloggedinFromGoogle = true;
const userloggedInfromEmail = false;

if(userloggedIn && debitCard){
    console.log("Allow to buy courses")
}
else{
    console.log("please logged in and fill credit card details");
}

if(userloggedInfromEmail || userloggedinFromGoogle){
    console.log("user logged in successfully");
}