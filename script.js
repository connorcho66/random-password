// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordInfo = "";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();
var nums = "0123456789";
var special = "`~!@#$%^&*()_+\\-=[]{}\"\|;:',.<>/?";

function generatePassword() {

  var lengthInput = window.prompt("Between 8 to 128, how long do you want your password?");
  var passwordLength = parseInt(lengthInput);

  if (lengthInput == null){
    window.alert("Canceled to generate");
    return;
  } else if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    window.alert("Invalid input, please enter a number between 8 to 128");
    return;
  } else ;

  var wantsNum = window.confirm("Do you want numbers in the password?");
  var wantsCharacter = window.confirm("Do you want special characters in the password?");
  var wantsLowercase = window.confirm("Do you want lowercase int the password?");
  var wantsUppercase = window.confirm("Do you want uppercase in the password?");

  if (wantsNum === true || wantsCharacter === true || wantsLowercase === true || wantsUppercase === true) {

    if (wantsNum === true){
      passwordInfo += nums;
    }
    
    if (wantsCharacter === true){
      passwordInfo += special;
    }

    if (wantsLowercase === true){
      passwordInfo += lower;
    }

    if (wantsUppercase === true){
      passwordInfo += upper;
    }
  } else {
    window.alert("Have to choose at least one character type.");

  };

  console.log(passwordInfo);

  var result = ""

  for (let i = 0; i < passwordLength; i++) {
    var gen = Math.floor(Math.random()*passwordInfo.length+1);
    
    result += passwordInfo.charAt(gen);
  }

  return result;
  
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
