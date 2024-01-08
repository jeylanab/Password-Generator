// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



let passwordGen = ""
let allowedChars = ""
let passwordLength;

// Function to prompt user for password options
function getPasswordOptions() {
 passwordLength = prompt("Enter Length of Password Between 8-128");
// to change data type into number
passwordLength = Number(passwordLength);
if (passwordLength >= 8 && passwordLength <= 128) {
  alert("CONTINUE");
} else {

  alert("ENTER PASSWORD BETWEEN 8-128 CHARACTER")
  return; // exit the function if the length is not within the valid range
}
var charLowerCase = prompt("Password with LowerCase: Choose Yes/No")
charLowerCase === "yes" || charLowerCase === "Yes" ? charLowerCase = true : charLowerCase = false;


var charUpperCase = prompt("Password with UpperCase: Choose Yes/No")
charUpperCase === "yes" || charUpperCase === "Yes" ? charUpperCase = true : charUpperCase = false;


var charNumeric = prompt("Password with Numeric: Choose Yes/No")
charNumeric === "yes" || charNumeric === "Yes" ? charNumeric = true : charNumeric = false;



var charSpecialCharacter = prompt("Password with Special Character: Choose Yes/No")
charSpecialCharacter === "yes" || charSpecialCharacter === "Yes" ? charSpecialCharacter = true : charSpecialCharacter = false;
 



  allowedChars = ""; 
  allowedChars += charLowerCase ? lowerCasedCharacters.join('') : "";
  allowedChars += charUpperCase ? upperCasedCharacters.join('') : "";
  allowedChars += charNumeric ?  numericCharacters.join('') : "";
  allowedChars += charSpecialCharacter ? specialCharacters.join('') : "";

  for(let i = 0 ; i<passwordLength; i++){

    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    passwordGen += allowedChars[randomIndex];
  }
 
console.log(passwordGen)


  
}

document.getElementById("generate").onclick = function () {
  getPasswordOptions();
  document.getElementById("password").innerHTML = passwordGen;
};

