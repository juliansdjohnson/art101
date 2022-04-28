/**
 * Author: Bryan Long, Julian Johnson
 * Created: 4/27/2022
 *
 **/

 function sortUserName() {
   var userName = window.prompt("Your name: ");
   var userNameSplit = userName.split('');
   var userNameSplitSort = userNameSplit.sort((a,b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))
   nameFinalSpaces = userNameSplitSort.filter((value, index, arr) => value != ' ');
   var nameFinal = nameFinalSpaces.join('');
   return nameFinal;
 }

 document.writeln("Your name, sorted: " + sortUserName());
