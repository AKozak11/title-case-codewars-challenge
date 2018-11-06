/* Input string title, string minorwords, returns title cased
version of title*/

function titleCase(title, minorWords) {
  //if empty string input, return empty string
  if (title.length === 0) {
    return "";
  }
  //if missing minorWords argument capitalize every word
  if (arguments.length === 1 || minorWords === undefined) {
    title = title.split(" ").map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
  } else {
    //create minorWords array
    minorWords = minorWords.split(" ");
    //change title string to array
    title = title.split(" ");
    //capitalize first word
    let firstWord = title[0].charAt(0).toUpperCase() + title[0].slice(1).toLowerCase();
    //remove firstword from array capitalize all remaining non-minorWords
    title = title.slice(1).map(function(word) {
      for (let i = 0; i < minorWords.length; i++) {

        if (word.toLowerCase() === minorWords[i].toLowerCase()) {
          return word.toLowerCase();
        }
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    title = firstWord + " " + title.join(" ");
  }
  return title.trim();
}
