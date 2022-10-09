// Write a ts program to count total number of negative elements in an array.
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = Number(prompt("please enter your ".concat(index + 1, " number")));
}
var res = inputarr.filter(function (e) { return e < 0; });
console.log("the number of nagative in this arry are ".concat(res.length));
