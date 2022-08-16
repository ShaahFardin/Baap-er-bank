// Step 1 : add event handler with the submit button
document.getElementById("submit-button").addEventListener("click", function () {
  //  step 2 : get email address from the email input field
  //   step 3 : always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("uset-pass");
  const password = passwordField.value;

  //   !!!!!! danger: not recomended way !!!!!!
  // step 4 : veriy email and password

  if (email === "fardinshaah@gmail.com" && password === "fardin123") {
    window.location.href = "bank.html";
  } else {
    alert("Email and password does not match");
  }
});
