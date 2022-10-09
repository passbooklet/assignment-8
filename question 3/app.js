// Write a ts program to find sum of all array elements. 
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = Number(prompt("please enter your ".concat(index + 1, " number")));
}
var res = 0;
for (var index2 = 0; index2 < inputarr.length; index2++) {
    res += inputarr[index2];
}
console.log(res);
