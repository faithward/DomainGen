/* eslint-disable */

console.log("Any string");
var pronoun = ["we", "the", "their", "her"];
var adj = ["grand", "best", "favorite", "exciting", "thrilling"];
var noun = ["soap", "dog", "lawyer", "fruit", "shoes", "car"];

window.onload = function() {
  //write your code here
};

function generateDomain() {
  for (var word in pronoun) {
    for (var part in adj) {
      for (var item in noun) {
        console.log(word + part + item + ".com");
      }
    }
  }
}

generateDomain();
