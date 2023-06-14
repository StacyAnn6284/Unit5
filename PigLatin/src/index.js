function pigLatin(word) {
  word = word.toLowerCase();
  if (word.slice(0, 1).match(/[aeiouAEIOU]/)) {
    word = word + "way";
  } else {
    let consonants = "";
    while (word.slice(0, 1).match(/[^aeiouAEIOU]/)) {
      consonants += word.slice(0, 1);
      word = word.slice(1, word.length);
    }
    word = word + consonants + "ay";
  }
  return word;
}

module.exports = pigLatin;
