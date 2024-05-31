// for(let i=1;i<=10;i++){
//     console.log(i);
// }

const arr = [1,3,5,6,78,87,9,2,45,6,6]
let st = ""
for(let index=0;index<arr.length;index = index+1){
    st += arr[index] + " "
}
console.log(st);


// break and continue
for(let index=1;index<=20;index++){
    //if(index==5) continue  // skip the remaining code and go for next iterration  ie : ak baar maaf kar do
    if(index==5) break  // break the loop and exit out from scope of loop  
    console.log("Value of index is : ",index);
}
