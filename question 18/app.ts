//Write a ts program to search an element in an array.
var inputarr: any[] = [];
var size: number = 5;
for (let index = 0; index < size; index++) {
    inputarr[index] =prompt(`please enter your ${index + 1} element`);

}
var inputword:string|null=prompt("please enter the word to be searched");
var search:any=inputarr.indexOf(inputword)
if (search==-1) {
    console.log("the serch word does not exist");
    
} else {
console.log("the index of the serch word is ",search);
    
}

        
        










