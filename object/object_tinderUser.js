// const tinderUser = new Object()

/*

const tinderUser = {}
tinderUser.Id = "123abc";
tinderUser.name = "pqrs";
tinderUser.isloggedIn = false;

// console.log(tinderUser);

const regularUser ={
    eamil : "123@gmail.com",
    fullname : {
        userfullName :{
            firstName : "geeky",
            lastName: "Uday",
        }
    }
}

console.log(regularUser.fullname.userfullName.firstName);
console.log(regularUser);

const obj1 ={1:'a',2:'b'};
const obj2 ={3:'c',4:'d'};

const obj3 = {obj1 ,obj2};
console.log(obj3);

const obj4 = Object.assign(obj1 ,obj2);
console.log(obj1);

const obj4 = Object.assign({},obj1 ,obj2);
console.log(obj4);


const obj4 = {...obj1,...obj2};
console.log(obj4)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('name'));


*/

//**********Destracturing************ */

const course ={
    coursename : "js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// course.courseInstructor
const {courseInstructor : instructor} = course
console.log(instructor);