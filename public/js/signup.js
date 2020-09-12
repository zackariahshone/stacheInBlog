$(document).ready(function () {
    const signUpForm = $("form.signup");
    const userInput = $("#user-input");
    const firstName = $("#fname-input");
    const lastName = $("#lname-input");
    const emailInput = $("#email-input");
    const phoneInput = $("#phone-input");
    const passwordInput = $("#password-input");


    signUpForm.on("submit", function (event) {
        event.preventDefault();
        const userData = {
            userName: userInput.val().trim(),
            password: passwordInput.val().trim(),
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            email: emailInput.val().trim(),
            phone: phoneInput.val().trim(),
        }

        console.log(userData);
    })

    if (!userData.userName || !userData.password) {
        return;
    }

    signUpUser(userData.userName, userData.password);
    userInput.val("");
    passwordInput.val("");
    firstName.val("");
    lastName.val("");
    emailInput.val("");
    phoneInput.val("");
});

function signUpUser(userName, password) {
    $.post("/api/signup", {
      userName: userName,
      password: password
    })
      .then(function(data) {
        window.location.replace("/crossroads");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
​
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

