//a ts program to print all negative elements in an array.
var inputarr: any[] = [];
var size: number = 5;
for (let index = 0; index < size; index++) {
    inputarr[index] =Number(prompt(`please enter your ${index + 1} number`));

}
var res:number[] = inputarr.filter(e => e < 0)
for (let index2 = 0; index2 < res.length; index2++) {
    console.log(res[index2]);
}









