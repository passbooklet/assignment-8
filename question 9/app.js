//  a ts program to insert an element in an array.
var inputarr = [10, 20, 30];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = (prompt("please enter your ".concat(index + 1, " element")));
}
var adding = prompt("enter your value to insert");
var add = adding;
inputarr.push(add);
console.log(inputarr);
