//Write a ts program to search an element in an array.
var inputarr = [];
var size = 5;
for (var index = 0; index < size; index++) {
    inputarr[index] = prompt("please enter your ".concat(index + 1, " element"));
}
var inputword = prompt("please enter the word to be searched");
var search = inputarr.indexOf(inputword);
if (search == -1) {
    console.log("the serch word does not exist");
}
else {
    console.log("the index of the serch word is ", search);
}
