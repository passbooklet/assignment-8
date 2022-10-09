// Write a ts program to count total number of negative elements in an array.
var inputarr: any[] = [];
var size: number = 5;
for (let index = 0; index < size; index++) {
    inputarr[index] =Number(prompt(`please enter your ${index + 1} number`));

}
var res:number[] = inputarr.filter(e => e < 0)
console.log(`the number of nagative in this arry are ${res.length}`);










