function countLetters(letters) {
  var count = {};
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] !== ' '){
      if (count[letters[i]] > 0){
        count[letters[i]]++;
      }
      else{
        count[letters[i]] = 1;
      }
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));
