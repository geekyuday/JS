myObj = {
    js : 'JavaScript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}


for(const key in myObj){
    //console.log(myObj[key]);
    console.log(`.${key} is file extensionn for ${myObj[key]}`);
}