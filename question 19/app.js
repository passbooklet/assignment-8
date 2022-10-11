//Write a ts program to sort array elements in ascending or descending order.
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = Number(prompt("please enter your ".concat(index + 1, " number")));
}
var ass = inputarr.sort();
console.log(ass);
