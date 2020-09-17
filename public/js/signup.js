$(document).ready(function () {
    const signUpForm = $("form.signup");
    const userInput = $("#user-input");
    const firstName = $("#fname-input");
    const lastName = $("#lname-input");
    const emailInput = $("#email-input");
    const phoneInput = $("#phone-input");
    const passwordInput = $("#password-input");
    let userData;
    const errormessage = $(".error")
    $('#test').on("click", function (event) {
        
      
      //event.preventDefault();
           userData = {
            user_name: userInput.val().trim(),
            password: passwordInput.val().trim(),
            f_name: firstName.val().trim(),
            l_name: lastName.val().trim(),
            email: emailInput.val().trim(),
            phone: phoneInput.val().trim(),
        }

        console.log('user data created', userData);
        // if (!userData.user_name || !userData.password) {
        //       return;
        //   }
        $.ajax('/api/users',{
            type: 'POST',
            data: userData        
        }).then(
          function(){
            console.log(`New sign up from ${userData.f_name} ${userData.l_name}`);
            window.location.replace("/crossroads");
          });
    });

      //   function signUpUser(userName, password) {
  //     $.post("/api/signup", {
  //     f_name: firstName.val().trim(),
  //     l_name: lastName.val().trim(),
  //     user_name: userInput.val().trim(),
  //     email: emailInput.val().trim(),
  //     phone: phoneInput.val().trim(),
  //   })
  //   .then(function(data) {
  //     window.location.replace("/crossroads");
  //     // If there's an error, handle it by throwing up a bootstrap alert
  //   })
  //   .catch(handleLoginErr);
  // }
  // ​
  // function handleLoginErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }
});