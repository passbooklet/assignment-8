// a ts program to find maximum and minimum element in an array.
var inputarr: any[] = [];
var size: number = 5;
for (let index = 0; index < size; index++) {
    inputarr[index] =Number(prompt(`please enter your ${index + 1} number`));

}
console.log(Math.max(...inputarr));
console.log(Math.min(...inputarr));











