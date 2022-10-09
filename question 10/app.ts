//Write a ts program to delete an element from an array at specified position
var inputarr: any[] = [];
var size: number = 5;
for (let index = 0; index < size; index++) {
    inputarr[index] =prompt(`please enter your ${index + 1} element`);

}
var inputword:string|null=prompt("please enter the poistion you want removed");
var res:number[] = inputarr.filter(e => e != inputword)
    console.log(res);










