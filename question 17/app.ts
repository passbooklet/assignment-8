//Write a ts program to sort even and odd elements of array separately.
var inputarr: any[] = [];
var size: number = 5;
for (let index = 0; index < size; index++) {
    inputarr[index] =Number(prompt(`please enter your ${index + 1} number`));

}
var res:number[] = inputarr.filter(e => e%2==0)
    console.log("the even are",res);
    var res1:number[] = inputarr.filter(e => e%2!=0)
    console.log("the odd are ",res1);








