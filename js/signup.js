const change = document.getElementById("change");
const changeS = document.getElementById("change-s");
const showSingIn = document.getElementById("signIn-container");
const showSingUp = document.getElementById("singUp-container");

change.addEventListener("click", () => {
  showSingIn.classList.toggle("d-none");
  showSingUp.classList.toggle("d-none");
});

changeS.addEventListener("click", () => {
  showSingIn.classList.toggle("d-none");
  showSingUp.classList.toggle("d-none");
});

function signIn() {
  var userEmail = document.getElementById("useremail");
  var uPass = document.getElementById("user-password");

  // Hide all error messages
  var errorMessages = document.querySelectorAll(".text-danger");
  errorMessages.forEach(function (error) {
    error.style.display = "none";
  });

  
  userEmail.style.borderColor = "#000";
  uPass.style.borderColor = "#000";

  // Validate email
  if (!userEmail.value) {
    var emailError = document.getElementById(
      userEmail.getAttribute("data-error")
    );
    emailError.style.display = "block";
    emailError.textContent = "Please type your email";
    userEmail.style.borderColor = "#ff0000";
  } else if (!userEmail.value.includes("@")) {
    var emailError = document.getElementById(
      userEmail.getAttribute("data-error")
    );
    emailError.style.display = "block";
    emailError.textContent = "Please include an @ in the email";
    userEmail.style.borderColor = "#ff0000";
  }

  // Validate password
  if (!uPass.value) {
    var passwordError = document.getElementById(
      uPass.getAttribute("data-error")
    );
    passwordError.style.display = "block";
    passwordError.textContent = "Please enter your password";
    uPass.style.borderColor = "#ff0000";
  }
}

function signUp() {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var pass = document.getElementById("password");

  // Hide all error messages
  var errorMessages = document.querySelectorAll(".text-danger");
  errorMessages.forEach(function (error) {
    error.style.display = "none";
  });

  username.style.borderColor = "#000";
  email.style.borderColor = "#000";
  pass.style.borderColor = "#000";

  // Validate username
  if (!username.value) {
    var registerUsernameError = document.getElementById(
      username.getAttribute("data-error")
    );
    registerUsernameError.style.display = "block";
    registerUsernameError.textContent = "Please enter a username";
    username.style.borderColor = "#ff0000";
  }

  // Validate email
  if (!email.value) {
    var registerEmailError = document.getElementById(
      email.getAttribute("data-error")
    );
    registerEmailError.style.display = "block";
    registerEmailError.textContent = "Please enter an email";
    email.style.borderColor = "#ff0000";
  } else if (!email.value.includes("@")) {
    var registerEmailError = document.getElementById(
      email.getAttribute("data-error")
    );
    registerEmailError.style.display = "block";
    registerEmailError.textContent = "Please include an @ in the email";
    email.style.borderColor = "#ff0000";
  }

  // Validate password
  if (!pass.value) {
    var registerPasswordError = document.getElementById(
      pass.getAttribute("data-error")
    );
    registerPasswordError.style.display = "block";
    registerPasswordError.textContent = "Please enter a password";
    pass.style.borderColor = "#ff0000";
  }
}
