// a ts program to copy all elements from an array to another array.
var inputarr = [];
var size = 5;
var inputarr1 = [];
for (var index = 0; index < size; index++) {
    inputarr[index] = Number(prompt("please enter your ".concat(index + 1, " element in first array")));
}
for (var index2 = 0; index2 < size; index2++) {
    inputarr1[index2] = Number(prompt("please enter your ".concat(index2 + 1, " element in the second array")));
}
var addarray = inputarr.push.apply(inputarr, inputarr1);
console.log(inputarr);
