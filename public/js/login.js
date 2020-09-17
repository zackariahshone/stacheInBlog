$(document).ready(function () {
  const loginForm = $("form.login");
  const userInput = $("#user-input");
  const passwordInput = $("#password-input");
  let userData = '';
  let matches ;
  $('#submit').on("click", function (event) {
    //event.preventDefault();
       userData = {
      userName: userInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData.userName);
    console.log(userData.password);
   
    $.ajax({
        url: '/api/allusers',
        method: "GET"
      }).then(function (users) {
        console.log('should be all data', users);
        for (let i = 0; i < users.length; i++) {
          if (userData.userName === users[i].user_name && userData.password === users[i].pwd) {
            console.log('matches');
            matches = 1;
          }else {
            console.log('go to sign up');
            // matches = 0;
          }
        }
            if (matches === 1) {
              console.log(matches);
              window.location.replace("/crossroads");
            } else {
              alert("Incorrect Username or Stacheword!")
            }
      })
      .catch(function (err) {
        console.log(err);
      });
  });

});