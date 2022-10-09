//Write a ts program to delete an element from an array at specified position
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = prompt("please enter your ".concat(index + 1, " element"));
}
var inputword = prompt("please enter the poistion you want removed");
var res = inputarr.filter(function (e) { return e != inputword; });
console.log(res);
