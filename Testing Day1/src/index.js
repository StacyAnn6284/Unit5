function add(n1, n2) {
  //   if (parseInt(n1) || parseInt(n2)) {
  //     throw new Error();
  //   }
  return n1 + n2;
}

function characterCount(word) {
  if (!word) {
    return 0;
  }
  return word.length;
}

function canVote(number) {
  if (number < 18) {
    return false;
  } else if (number >= 18) {
    return true;
  }
}

exports.add = add;
exports.characterCount = characterCount;
exports.canVote = canVote;
