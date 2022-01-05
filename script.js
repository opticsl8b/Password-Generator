// Goal: Generate a password

var buttonGenerate = document.getElementById("btn-generate");
var inputRange = document.getElementById("input-range");
var passwordRange = document.getElementById("password-range");
var inputSymbol = document.getElementById("input-symbol");
var inputUppercase = document.getElementById("input-uppercase");
var inputLowercase = document.getElementById("input-lowercase");
var inputNumber = document.getElementById("input-number");
var passwordintheTextarea = document.getElementById('password-textarea')

// char set data Bank
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbol = "!@#$%^&*()_+";

// Improve the dialog funtion by adding a input-range bar

inputRange.addEventListener("input", function (event) {

  var passwordLength = inputRange.value;

  passwordRange.textContent = passwordLength;

});


// when user click the button

buttonGenerate.addEventListener('click', function (event) {

  // we will check if at leat one character criteria was select

  var passwordLength = Number(inputRange.value);

  var isSymbol = inputSymbol.checked;
  var isUppercase = inputUppercase.checked;
  var isLowercase = inputLowercase.checked;
  var isNumber = inputNumber.checked;

  // inform user if user didnt choose any of the option

  var notChooseAny =
    !isNumber && !isSymbol && !isUppercase && !isLowercase;

  if (notChooseAny) {
    alert("Please choose one option");
    return;
  }

  //generate the password responsively if user selected at least one option

  var charSet = "";

  if (isNumber) {
    charSet = charSet + numbers;
  }

  if (isLowercase) {
    charSet = charSet + lowercase;
  }

  if (isUppercase) {
    charSet = charSet + uppercase;
  }

  if (isSymbol) {
    charSet = charSet + symbol;
  }

  console.log(charSet);

  var password = "";

  for (var i = 0; i < passwordLength; i++) {

    // randonmly grab a character from the data bank

    var randomChar = charSet[Math.floor(Math.random() * charSet.length)]

    //add to password
    password += randomChar

  }
  //put the password in the box (DOM) once its generated

  passwordintheTextarea.textContent = password
  
});





