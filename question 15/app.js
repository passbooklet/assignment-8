//Write a ts program to merge two array to third array.
var inputarr = [];
var inputarr1 = [];
for (var index = 0; index < 3; index++) {
    inputarr[index] = prompt("please enter your ".concat(index + 1, " element of the first array"));
}
for (var index2 = 0; index2 < 2; index2++) {
    inputarr1[index2] = prompt("please enter your ".concat(index2 + 1, " number of the second array"));
}
console.log(inputarr.concat(inputarr1));
