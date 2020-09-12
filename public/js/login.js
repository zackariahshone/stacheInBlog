$(document).ready(function () {
    const loginForm = $("form.login");
    const userInput = $("#user-input");
    const passwordInput = $("#password-input");

    loginForm.on("submit", function (event) {
        event.preventDefault();
        const userData = {
            userName: userInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.userName || !userData.password) {
            return;
        }

        loginUser(userData.userName, userData.password);
        userInput.val("");
        passwordInput.val("");
    });

    function loginUser(userName, password) {
        $.post("/api/login", {
            userName: userName,
          password: password
        })
          .then(function() {
            window.location.replace("/crossroads");
            // If there's an error, log the error
          })
          .catch(function(err) {
            console.log(err);
          });
      }

});


