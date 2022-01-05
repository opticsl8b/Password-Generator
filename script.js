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

// 8-128 chars, otherwise we should infrom the user

inputRange.addEventListener("input", function (event) {

  var passwordLength = inputRange.value;

  passwordRange.textContent = passwordLength;

});


// when user click the button

buttonGenerate.addEventListener('click', function (event) {

  // we will ask the user to enter a password length 

  //ask to include symbols

  //ask to include uppercase

  //ask to include lowercase

  //ask to include number

  var passwordLength = Number(inputRange.value);

  var isSymbol = inputSymbol.checked;
  var isUppercase = inputUppercase.checked;
  var isLowercase = inputLowercase.checked;
  var isNumber = inputNumber.checked;

  // yell at user if the user didnt choose any of the option

  const notChooseAny =
    !isNumber && !isSymbol && !isUppercase && !isLowercase;

  if (notChooseAny) {
    alert("Please choose one option");
    return;
  }

  //generate the password once if user selected at leat one option


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

    // randonmly grab a char from the date bank

    var randomChar = charSet[Math.floor(Math.random() * charSet.length)]

    //add to password
    password += randomChar

  }
  //put the password in the box (DOM) once its generated

  passwordintheTextarea.textContent = password
  

});





