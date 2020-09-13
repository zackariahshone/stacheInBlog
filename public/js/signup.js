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
            user_name: userInput.val().trim(),
            password: passwordInput.val().trim(),
            f_name: firstName.val().trim(),
            l_name: lastName.val().trim(),
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
      f_name: firstName.val().trim(),
      l_name: lastName.val().trim(),
      user_name: userInput.val().trim(),
      email: emailInput.val().trim(),
      phone: phoneInput.val().trim(),
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

