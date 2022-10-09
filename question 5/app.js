// Write a ts program to find sum of all array elements. 
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = Number(prompt("please enter your ".concat(index + 1, " number")));
}
var res = inputarr.filter(function (e) { return e < Math.max.apply(Math, inputarr); });
var spliced2 = Math.max.apply(Math, res);
console.log(spliced2);
