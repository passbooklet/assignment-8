// a ts program to find maximum and minimum element in an array.
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = Number(prompt("please enter your ".concat(index + 1, " number")));
}
console.log(Math.max.apply(Math, inputarr));
console.log(Math.min.apply(Math, inputarr));
