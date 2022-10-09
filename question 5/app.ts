//a ts program to find second largest element in an array. 
var inputarr: any[] = [];
var size: number = 5;
for (let index = 0; index < size; index++) {
    inputarr[index] =Number(prompt(`please enter your ${index + 1} number`));

}
var res:number[] = inputarr.filter(e => e < Math.max(...inputarr))
 var spliced2:any=Math.max(...res)
 console.log(spliced2);








