/**
 * Authors: Bryan Long, Julian Johnson
 * Created:   5/2/2022
 *
 **/

function square (x) {
    let result = x ** 2;
    return result;
}

// testing function
console.log("Square of 2 is:", square(2));
console.log("Square of 5 is:", square(5));

// testing function on array...
var my_arr = [1, 2 ,5 , 7, 123, 124138, 12751];
console.log("My array:", my_arr);

var tmp = my_arr.map(square);
console.log("Squares of the array:", tmp);

// using map with anonymous function
var tmp = my_arr.map(function (x) {
    let result = x % 2;
    return result;
})

console.log("Array % 2:", tmp);

var outputEl = document.getElementById("output");
outputEl.innerHTML += "<p>Original array: " + my_arr.join(", ") + "</p>\n";
outputEl.innerHTML += "<p>Square of Array: " + (my_arr.map(square)).join(", "); + "</p>\n";
outputEl.innerHTML += "<p>Mod 2 of array: " + tmp.join(", ") + "</p>\n";

const button = document.getElementById("button");

button.addEventListener('click', () => {
  alert("You clicked me!");
});
