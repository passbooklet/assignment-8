//a ts program to count total number of even and odd elements in an array..
var inputarr: any[] = [];
var size: number = 5;
var res:number=0 ;
var res1:number=0
for (let index = 0; index < size; index++) {
    inputarr[index] =Number(prompt(`please enter your ${index + 1} number`));

}
for (let index2 = 0; index2 < inputarr.length; index2++) {
    if (inputarr[index2] % 2==0) {
        res ++
    }
    else if(inputarr[index2] % 2!=0){
       res1++
    }
}
console.log(`the number of even are ${res} in the array`);
console.log(`the number of odds are ${res1} in the array`);










