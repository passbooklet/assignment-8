//  a ts program to find maximum and minimum element in an array.
var inputarr: any[] = [];
var size: number = 5;
for (let index = 0; index < size; index++) {
    inputarr[index] =Number(prompt(`please enter your ${index + 1} number`));

}
var res:number =0 
for (let index2 = 0; index2 < inputarr.length; index2++) {
    res += inputarr[index2]
}
console.log(res);










