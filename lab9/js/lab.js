/**
 * Author:    Bryan Long, Julian Johnson
 * Created:   5.4.2022
 *
 *
 **/

outputEl = document.getElementById("lab9-content");

new1El = document.createElement("p");
new1El.innerHTML += "<p>This is new1El, here's some new text!</p>";

new2El = document.createElement("p");
new2El.innerHTML += "<p>This is new2El, here's some new text!</p>";

new3El = document.createElement("p");
new3El.innerHTML += "<p>This is new3El, here's some new text!</p>";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
outputEl.insertBefore(new3El, outputEl.children[0]);

new1El.style.color = "white";
new1El.style.textShadow = "0 0 0.1px black, 0 0 5px red";
new2El.style.color = "white";
new2El.style.textShadow = "0 0 0.1px black, 0 0 5px red";
