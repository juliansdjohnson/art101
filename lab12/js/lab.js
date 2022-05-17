/**
 * Author:    Bryan Long, Julian Johnson
 * Created:   5.16.2022
 *
 *
 **/

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  houseArray = ["Ravenclaw", "Hufflepuff", "Slytherin", "Gryffindor"];
  return houseArray[mod];
}

 /** Original code
if (mod == 3) {
   return "Gryffindor";
 }
 else if (mod == 2) {
   return "Slytherin";
 }
 else if (mod == 1) {
   return "Hufflepuff";
 }
 else if (mod == 0) {
   return "Ravenclaw";
 }
 else {
   return "illegal math :(";
 }
 **/

var houseButton = document.getElementById("button");
houseButton.addEventListener("click", function() {
  var userName = document.getElementById("input").value;
  var house = sortingHat(userName);
  houseText = "<p>The Sorting Hat has sorted you into " + house + ".</p>";
  document.getElementById("output").innerHTML = houseText;
})
