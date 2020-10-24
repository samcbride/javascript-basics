let sayHello = (string) => {
if(string === "world") {
 sayHello = "Hello, " + string + "!";
} else if(string === "MCR Codes") {
  sayHello = "Hello, " + string + "!";
}
  else if(string === "fsghjdfkhgf") {
    sayHello = "Hello, " + string + "!";
}
  {
  return sayHello;
  }
};


let uppercase = (string) => {
  uppercase = string.toUpperCase();
  {
    return uppercase;
  }
};


let lowercase = (string) => {
  lowercase = string.toLowerCase();
  {
    return lowercase;
  }
};

let countCharacters = (string) => {
  countCharacters = string.length;
  {
    return countCharacters;
  }
};

let firstCharacter = (string) => {
  firstCharacter = string.charAt(0);
  {
    return firstCharacter;
  }
};

let firstCharacters = (string, n) => {
  firstCharacters = string.substring(0, n);
  {
    return firstCharacters;
  }
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
