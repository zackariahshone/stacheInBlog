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
    $('#submit').on("click", function (event) {
        
      
      //event.preventDefault();
           userData = {
            user_name: userInput.val().trim(),
            f_name: firstName.val().trim(),
            l_name: lastName.val().trim(),
            email: emailInput.val().trim(),
            phone: phoneInput.val().trim(),
            pwd: passwordInput.val().trim()
        }
        if (userData.password === "" || userData.user_name === "") {
          alert("Please enter user name and password");
          return false;
        }
       // console.log('user data created', userData);
       
        $.ajax('/api/users',{
            type: 'POST',
            data: userData        
        }).then(
          function(){
          //  console.log(`New sign up from ${userData.f_name} ${userData.l_name}`);
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