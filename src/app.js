/* eslint-disable */


  //write your code here
  var pronoun = ["we", "the", "their", "her"];
  var adj = ["great", "best", "favorite", "cool"];
  var noun = ["soap", "dog", "fruit", "shoes", "car"];

  function generateDomain() {
    for (var word of pronoun) {
      for (var part of adj) {
        for (var item of noun) {
          console.log(word + part + item + ".com");
        }
      }
    }
  }

  generateDomain();
