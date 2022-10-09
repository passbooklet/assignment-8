// program to read and print elements of array.
var inputarr:any[]=[]
var size:number=5;
for (let index = 0; index <= size; index++) {
    inputarr[index] = prompt('Enter array Element ');
    
}
for (let index2 = 0; index2 < inputarr.length; index2++) {
    console.log(inputarr[index2]);
}

