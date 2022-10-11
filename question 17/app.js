//Write a ts program to sort even and odd elements of array separately.
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = Number(prompt("please enter your ".concat(index + 1, " number")));
}
var res = inputarr.filter(function (e) { return e % 2 == 0; });
console.log("the even are", res);
var res1 = inputarr.filter(function (e) { return e % 2 != 0; });
console.log("the odd are ", res1);
