const negate = (a) => {
  let b = !a;
  return b;
};

// let both = (a, b) => {
//   if(a === true && b === true) {
//     both = true;
//   } else {
//     both = false;
//   } {
//     return both;
//   }
// };

let both = (a, b) => {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  let or;
  if (a === true || b === true) {
    return (or = true);
  } else {
    return (or = false);
  }
};

let none = (a, b) => {
  if (a === false && b === false) {
    return (none = true);
  } else {
    return (none = false);
  }
};

let one = (a, b) => {
  if (a === b) {
    return (one = false);
  } else if (a !== b) {
    return (one = true);
  }
};

const truthiness = (a) => {
  return a ? true : false;
};

const isEqual = (a, b) => {
  return a === b ? true : false;
};

const isGreaterThan = (a, b) => {
  return a > b ? true : false;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b ? true : false;
};

const isOdd = (a) => {
  return a % 2 === 1 ? true : false;
};

const isEven = (a) => {
  return a % 2 === 0 ? true : false;
};

let isSquare = (a) => {
  let squareRoot = Math.sqrt(a);
  if (a === 0) {
    return (isSquare = true);
  } else if (a % squareRoot === 0) {
    return (isSquare = true);
  } else {
    return (isSquare = false);
  }
};

const startsWith = (char, string) => {
  return char === string.charAt(0) ? true : false;
};

/*This should return TRUE if it has vowels*/

let containsVowels = (string) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (i = 0; i < vowels.length; i += 1) {
    /*LOOP START*/
    let trueResult = string.includes(vowels[i]);
    if (trueResult === true) {
      return true;
    }
  } /*LOOP END*/
  return false;
};

// let containsVowels = (string) => {
//   let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   for (i = 0; i < vowels.length; i += 1) {     /*LOOP START*/
//     let trueResult = string.includes(vowels[i]);
//     if (trueResult === true) {
//       return true;
//     }
//   }; /*LOOP END*/
//     return false;}

const isLowerCase = (string) => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
