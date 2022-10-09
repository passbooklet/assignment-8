//a ts program to print all negative elements in an array.
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = Number(prompt("please enter your ".concat(index + 1, " number")));
}
var res = inputarr.filter(function (e) { return e < 0; });
for (var index2 = 0; index2 < res.length; index2++) {
    console.log(res[index2]);
}
