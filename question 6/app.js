//a ts program to count total number of even and odd elements in an array..
var inputarr = [];
var size = 5;
var res = 0;
var res1 = 0;
for (var index = 0; index < size; index++) {
    inputarr[index] = Number(prompt("please enter your ".concat(index + 1, " number")));
}
for (var index2 = 0; index2 < inputarr.length; index2++) {
    if (inputarr[index2] % 2 == 0) {
        res++;
    }
    else if (inputarr[index2] % 2 != 0) {
        res1++;
    }
}
console.log("the number of even are ".concat(res, " in the array"));
console.log("the number of odds are ".concat(res1, " in the array"));
