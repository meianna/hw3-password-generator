// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", "?", "`", "~", ""];
var totalChars = lowerCase + upperCase + numbers + specialChars;

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  var setLength = prompt("Set the length of your password between 8 and 128 characters.");
  var setLowercase = confirm("Do you want your password to contain lowercase letters?");
  var setUppercase = confirm("Do you want your password to contain uppercase letters?");
  var setNumbers = confirm("Do you want your password to contain numbers?")
  var setSpecialChars = confirm("Do you want your password to contain special charcters?");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



