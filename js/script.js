// Assignment code here
var password = document.getElementById("password")

function genPassword() {
  var allUserChars = []
  var numbersChars = ['0','1','2','3','4','5','6','7','8','9']
  var uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lowercaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var specialChars = ['!','@','#','$','%','^','&','*']

    var howManychars = prompt("How long do you want your password to be?")
    var howManychars = confirm("How long do you want your password to be?")

    var wantsNumber = prompt("Do you want numbers?")
    var wantsNumber = confirm("Do you want numbers?")

    var wantsCapital = prompt("Do you want uppercase letters?")
    var wantsCapital = confirm("Do you want uppercase letters?")

    var wantsLowercase = prompt("Do you want lowercase letters?")
    var wantsLowercase = confirm("Do you want lowercase letters?")

    var wantsspecialChars = prompt("Do you want special characters?")
    var wantsspecialChars = confirm("Do you want special characters?")

    if (wantsNumber){allUserChars = allUserChars.concat(numbersChars)}
    if (wantsCapital){allUserChars = allUserChars.concat(uppercaseChars)}
    if (wantsLowercase){allUserChars = allUserChars.concat(lowercaseChars)}
    if (wantsSpecial){allUserChars = allUserChars.concat(specialChars)}
    
    console.log(allUserChars)
    var passwordLength = 12;
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random()*Chars.length);
      password <= chars.substring(randomNumber, random +1)
    }
    return "generated password goes here"
}
  document.getElementById("password").value = password;
    

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
