function showRegistrationForm() {
  document.getElementById("user-authentication-container").style.display = "block";
}

function closeAuthenticationForm() {
  document.getElementById("user-authentication-container").style.display = "none";
}

function switchForm(formType) {
  var registrationForm = document.getElementById("registration-form");
  var loginForm = document.getElementById("login-form");
  
  if (formType === 'login') {
    registrationForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  } else if (formType === 'registration') {
    loginForm.classList.add("hidden");
    registrationForm.classList.remove("hidden");
  }
}

document.querySelector(".join-btn").addEventListener("click", function (event) {
  event.stopPropagation();
  showRegistrationForm();
});

document.addEventListener("click", function (event) {
  var authContainer = document.getElementById("user-authentication-container");
  if (event.target != authContainer && !authContainer.contains(event.target)) {
    closeAuthenticationForm();
  }
});