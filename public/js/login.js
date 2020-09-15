$(document).ready(function () {
  const loginForm = $("form.login");
  const userInput = $("#user-input");
  const passwordInput = $("#password-input");
  let userData= '';
  $('#test').on("click", function (event) {
    //event.preventDefault();
       userData = {
      userName: userInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData.userName);
    console.log(userData.password);
    // if (!userData.userName || !userData.password) {
    //     return;
    // }

    //     loginUser(userData.userName, userData.password);
    //     userInput.val("");
    //     passwordInput.val("");
    // });


    $.ajax({
        url: '/api/allusers',
        method: "GET"
      }).then(function (res) {
        window.location.replace("/crossroads");
        console.log('should be all data', res);
        
        for (let i = 0; i > res.length; i++) {
          if (userData.userName === res[i].f_name) {
              console.log('matches');
          }else{
              console.log('go to sign up');
          }
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  });

});