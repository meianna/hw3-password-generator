// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", "?", "`", "~", ""];

// Write password to the #password input
generateBtn.addEventListener("click", function writePassword() {

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordContent = "";

  var setLength = prompt("Set the length of your password between 8 and 128 characters.");
  if (setLength < 8 || setLength > 128) {
    prompt("Please choose a number between 8 and 128.");
  }
  var setLowercase = confirm("Do you want your password to contain lowercase letters?");
  var setUppercase = confirm("Do you want your password to contain uppercase letters?");
  var setNumbers = confirm("Do you want your password to contain numbers?");
  var setSpecialChars = confirm("Do you want your password to contain special charcters?");
  if (
    setLowercase === false &&
    setUppercase === false &&
    setNumbers === false &&
    setSpecialChars === false
  ) {
    alert("You must select at least one password criterion.")
  };
  if (setLowercase === true) {
    passwordContent += lowerCase;
  };
  if (setUppercase === true) {
    passwordContent += upperCase;
  };
  if (setNumbers === true) {
    passwordContent += numbers;
  };
  if (setSpecialChars === true) {
    passwordContent += specialChars;
  };

  for (i = 0; i < setLength; i++) {
    var randomChar = Math.floor(Math.random() * passwordContent.length);
    passwordGenerated += passwordContent.charAt(char);
  }


  passwordText.value = passwordGenerated;

})






