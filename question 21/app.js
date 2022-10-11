//Write a ts program to right rotate an array.
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = prompt("please enter your ".concat(index + 1, " element of the first array"));
}
var position = Number(prompt("please enter your number"));
var a = inputarr.slice(position).concat(inputarr.slice(0, position));
console.log(a);
