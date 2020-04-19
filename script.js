// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "~`!@#$%^&*()_-+=?/<>;:{}[]\|";

// Write password to the #password input
generateBtn.addEventListener("click", function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordContent = [];
  var passwordGenerated = "";
  var setLength = prompt("Set the length of your password between 8 and 128 characters.");
  passwordText.value = passwordGenerated;

  if (setLength < 8 || setLength > 128) {
    passwordText.value = "Please choose a number between 8 and 128."
  }
  else {
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
      passwordText.value = "You must select at least one password criterion.";
    }
    else {
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
        passwordGenerated += passwordContent[randomChar];
      }
      passwordText.value = passwordGenerated;
    }
  }
})