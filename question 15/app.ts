//Write a ts program to merge two array to third array.
var inputarr: any[] = [];
var inputarr1: any[] = [];
for (let index = 0; index < 3; index++) {
    inputarr[index] =prompt(`please enter your ${index + 1} element of the first array`);

}
for (let index2 = 0; index2 < 2; index2++) {
    inputarr1[index2] =prompt(`please enter your ${index2 + 1} number of the second array`);

}
console.log(inputarr.concat(inputarr1));








