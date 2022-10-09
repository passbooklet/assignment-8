// a ts program to copy all elements from an array to another array.
var inputarr: any[] = [];
var size: number = 5;
var inputarr1:any[]=[]
for (let index = 0; index < size; index++) {
    inputarr[index] =Number(prompt(`please enter your ${index + 1} element in first array`));

}
for (let index2 = 0; index2 < size; index2++) {
    inputarr1[index2] =Number(prompt(`please enter your ${index2 + 1} element in the second array`));

}
var addarray:number=inputarr.push(...inputarr1)
console.log(inputarr);










