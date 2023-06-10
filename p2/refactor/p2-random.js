/*
CIT 281 Project 2
Name: James Miller
*/

// Returns a random number between min (inclusive) and max (exclusive)

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//Randomly picks out an indiviual letter in my array.
function getRandomLetter() {
    const index = Math.floor(Math.random() * alphabet.length);
    return alphabet[index];
  }

// Returns a random number between min (inclusive) and max (exclusive)
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Uses getRandomInteger to pick out and random amount of letters per users request
function getRandomString(minLength, maxLength) {
    const length = getRandomInteger(minLength, maxLength);
    let word = "";
    for (let i = 0; i < length; i++) {
      word += getRandomLetter();
    }
    return word;
  }

  //console.log(getRandomString(10, 20))

  getSortedString = (string) => {
    return string.split("").sort().join("");
  }

  console.log(getSortedString(getRandomString(10, 20)))

  