// App Link: https://studio.code.org/projects/applab/lijLjgwdVarPpz53HaKB2MUPlsebtJkPdbVGe-aHkPI
// Creation date: Jan 6, 2023
// Completion date: Jan 18, 2023



//-- registerScreen --\\
var usernameInput = "";
var passwordInput = "";
var retypePassword = "";
var usernameBoolean = false;
var passwordBoolean = false;

// update usernameInput
onEvent("usernameInput", "input", function( ) {
  usernameInput = getText("usernameInput");
  setProperty("usernameInput", "text-color", "#656B75");
  usernameChecker();
  signupButtonChecker();
});

// update passwordInput
onEvent("passwordInput", "input", function( ) {
  passwordInput = getText("passwordInput");
  setProperty("passwordInput", "text-color", "#656B75");
  passwordChecker();
  passwordEmptyChecker();
  usernameChecker();
  signupButtonChecker();
});

// update retypePasswordInput
onEvent("retypePasswordInput", "input", function() {
  retypePassword = getText("retypePasswordInput");
  setProperty("retypePasswordInput", "text-color", "#656B75");
  passwordChecker();
  passwordEmptyChecker();
  usernameChecker();
  signupButtonChecker();
});

// signupButton
onEvent("signupButton", "click", function( ) {
    playSound("sound://category_app/app_interface_click_2.mp3", false);
    setScreen("mainScreen");
    setProperty("username", "text", usernameInput);
});

// checks if password is correct
function passwordChecker() {
  if (passwordInput == retypePassword) {
    showElement("output");
    setProperty("output", "image", "icon://fa-check");
    setProperty("output", "icon-color", "#9ef970");
    passwordBoolean = true;
  } else {
    showElement("output");
    setProperty("output", "image", "icon://fa-times");
    setProperty("output", "icon-color", "#ff4545");
    passwordBoolean = false;
  }
}

// checks if passwordInput isn't empty
function passwordEmptyChecker() {
  if (getProperty("passwordInput", "text")) {
    showElement("output");
  } else {
    hideElement("output");
    passwordBoolean = false;
  }
}

// checks if usernameInput isn't empty
function usernameChecker() {
  if (getProperty("usernameInput", "text")) {
    usernameBoolean = true;
    hideElement("usernameWarning");
  } else {
    usernameBoolean = false;
    showElement("usernameWarning");
  }
}

// checks if usernameBoolean and passwordBoolean are true
function signupButtonChecker() {
  if (usernameBoolean && passwordBoolean == true) {
    showElement("signupButton");
    hideElement("signupButtonDisabled");
  } else {
    showElement("signupButtonDisabled");
    hideElement("signupButton");
  }
}



//-- mainScreen --\\
var product = "";
var productCost = 0;
var colorButton = "";

// $9.99 - Google Cardboard
onEvent("filterByPriceButton1", "click", function( ) {
  product = "Google Cardboard";
  productCost = 9.99;
  changeProduct();
  showProduct();
});

// $399 - Oculus Quest 2
onEvent("filterByPriceButton2", "click", function( ) {
  product = "Oculus Quest 2";
  productCost = 399.90;
  changeProduct();
	showProduct();
});

// $999 - Valve Index
onEvent("filterByPriceButton3", "click", function( ) {
  product = "Valve Index";
  productCost = 999.00;
  changeProduct();
	showProduct();
});

// $1,999 - Varjo Aero
onEvent("filterByPriceButton4", "click", function( ) {
  product = "Varjo Aero";
  productCost = 1,999.00;
  changeProduct();
	showProduct();
});



onEvent("filterByColorButton1", "click", function( ) {
  colorButton = getProperty("filterByColorButton1", "text");
  colorButton1();
});

onEvent("filterByColorButton2", "click", function( ) {
  colorButton = getProperty("filterByColorButton2", "text");
  colorButton2();
});

onEvent("filterByColorButton3", "click", function( ) {
  colorButton = getProperty("filterByColorButton3", "text");
  colorButton3();
});

onEvent("filterByColorButton4", "click", function( ) {
  colorButton = getProperty("filterByColorButton4", "text");
  colorButton4();
});



// unhides related elements for the Product using the showElement UI control
function showProduct() {
  playSound("sound://category_app/app_interface_click_2.mp3", false);
  showElement("productCost");
  showElement("starRatingOne");
  showElement("starRatingTwo");
  showElement("starRatingThree");
  showElement("starRatingFour");
  showElement("starRatingFive");
  showElement("productDate");
  showElement("productTitle");
  showElement("productImage");
  showElement("productImageBackground");
  showElement("productBackground");
}

// changes vr headset if product matches the headset and if productCost
// matches the cost of the headset by using conditional statements
function changeProduct() {
  if (product == "Google Cardboard" && productCost == 9.99) {
    setProperty("productCost", "text", "$9.99");
    setProperty("productDate", "text", "June 25, 2014 | by Google");
    setProperty("productTitle", "text", "Google Cardboard");
    setProperty("productImage", "image", "google-cardboard-brown.png");
    
    showElement("filterByColorButton1");
    showElement("filterByColorButton2");
    showElement("filterByColorButton3");
    showElement("filterByColorButton4");
    
    setProperty("filterByColorButton1", "text", "Brown");
    setProperty("filterByColorButton1", "background-color", "#FEBA3E");
    setProperty("filterByColorButton2", "text", "Red");
    setProperty("filterByColorButton2", "background-color", "#FEBA3E");
    setProperty("filterByColorButton3", "text", "Black");
    setProperty("filterByColorButton3", "background-color", "#FEBA3E");
    setProperty("filterByColorButton4", "text", "Blue");
    setProperty("filterByColorButton4", "background-color", "#FEBA3E");
    
  } else if (product == "Oculus Quest 2" && productCost == 399.90) {
    setProperty("productCost", "text", "$399.90");
    setProperty("productDate", "text", "Oct 13, 2020 | by Meta Quest");
    setProperty("productTitle", "text", "Oculus Quest 2");
    setProperty("productImage", "image", "oculus-quest-white.png");
    
    showElement("filterByColorButton1");
    showElement("filterByColorButton2");
    showElement("filterByColorButton3");
    showElement("filterByColorButton4");
    
    setProperty("filterByColorButton1", "text", "White");
    setProperty("filterByColorButton1", "background-color", "#FEBA3E");
    setProperty("filterByColorButton2", "text", "Red");
    setProperty("filterByColorButton2", "background-color", "#FEBA3E");
    setProperty("filterByColorButton3", "text", "Black");
    setProperty("filterByColorButton3", "background-color", "#FEBA3E");
    setProperty("filterByColorButton4", "text", "Blue");
    setProperty("filterByColorButton4", "background-color", "#FEBA3E");
    
  } else if (product == "Valve Index" && productCost == 999.00) {
    setProperty("productCost", "text", "$999.00");
    setProperty("productDate", "text", "June 28, 2019 | by Valve");
    setProperty("productTitle", "text", "Valve Index");
    setProperty("productImage", "image", "valve-index-Upscaled.png");
    
    showElement("filterByColorButton1");
    showElement("filterByColorButton2");
    showElement("filterByColorButton3");
    
    setProperty("filterByColorButton1", "text", "Black");
    setProperty("filterByColorButton1", "background-color", "#FEBA3E");
    setProperty("filterByColorButton2", "text", "Red");
    setProperty("filterByColorButton2", "background-color", "#FEBA3E");
    setProperty("filterByColorButton3", "text", "Blue");
    setProperty("filterByColorButton3", "background-color", "#FEBA3E");
    
    hideElement("filterByColorButton4");
    
  } else if (product == "Varjo Aero" && productCost == 1,999.00) {
    setProperty("productCost", "text", "$1,999.00");
    setProperty("productDate", "text", "Oct 21, 2021 | by Varjo");
    setProperty("productTitle", "text", "Varjo Aero");
    setProperty("productImage", "image", "varjo-aero.png");
    
    showElement("filterByColorButton1");
    
    setProperty("filterByColorButton1", "text", "Black");
    setProperty("filterByColorButton1", "background-color", "#FEBA3E");
    
    hideElement("filterByColorButton2");
    hideElement("filterByColorButton3");
    hideElement("filterByColorButton4");
  }
}

// Changes color of product if product and color buttons matches the if else statements
function colorButton1() {
  playSound("sound://category_app/app_interface_click_2.mp3", false);
  if (product == "Google Cardboard" && colorButton == "Brown") {
    setProperty("productImage", "image", "google-cardboard-brown.png");
  } else if (product == "Oculus Quest 2" && colorButton == "White") {
    setProperty("productImage", "image", "oculus-quest-white.png");
  } else if (product == "Valve Index" && colorButton == "Black") {
    setProperty("productImage", "image", "valve-index-Upscaled.png");
  }
}

// Changes color of product if product and color buttons matches the if else statements
function colorButton2() {
  playSound("sound://category_app/app_interface_click_2.mp3", false);
  if (product == "Google Cardboard" && colorButton == "Red") {
    setProperty("productImage", "image", "google-cardboard-red.png");
  } else if (product == "Oculus Quest 2" && colorButton == "Red") {
    setProperty("productImage", "image", "oculus-quest-red.png");
  } else if (product == "Valve Index" && colorButton == "Red") {
    setProperty("productImage", "image", "valve-index-red.png");
  }
}

// Changes color of product if product and color buttons matches the if else statements
function colorButton3() {
  playSound("sound://category_app/app_interface_click_2.mp3", false);
  if (product == "Google Cardboard" && colorButton == "Black") {
    setProperty("productImage", "image", "google-cardboard-black.png");
  } else if (product == "Oculus Quest 2" && colorButton == "Black") {
    setProperty("productImage", "image", "oculus-quest-black.png");
  } else if (product == "Valve Index" && colorButton == "Blue") {
    setProperty("productImage", "image", "valve-index-blue.png");
  }
}

// Changes color of product if product and color buttons matches the if else statements
function colorButton4() {
  playSound("sound://category_app/app_interface_click_2.mp3", false);
  if (product == "Google Cardboard" && colorButton == "Blue") {
    setProperty("productImage", "image", "google-cardboard-blue.png");
  } else if (product == "Oculus Quest 2" && colorButton == "Blue") {
    setProperty("productImage", "image", "oculus-quest-blue.png");
  }
}
