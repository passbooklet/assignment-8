//Write a ts program to right rotate an array.
var inputarr: any[] = [];
var size:number =5
for (let index = 0; index < size; index++) {
    inputarr[index] =prompt(`please enter your ${index + 1} element of the first array`);
}
var position:any=Number(prompt("please enter your number"));
var a:any=inputarr.slice(position).concat(inputarr.slice(0,position))
console.log(a);


 
 








