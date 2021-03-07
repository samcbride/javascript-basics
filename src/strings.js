let sayHello = (string) => {
  return (sayHello = `Hello, ${string}!`);
};

let uppercase = (string) => {
  return (uppercase = string.toUpperCase());
};

let lowercase = (string) => {
  return (lowercase = string.toLowerCase());
};

let countCharacters = (string) => {
  return (countCharacters = string.length);
};

let firstCharacter = (string) => {
  return (firstCharacter = string.charAt(0));
};

let firstCharacters = (string, n) => {
  return (firstCharacters = string.substring(0, n));
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
