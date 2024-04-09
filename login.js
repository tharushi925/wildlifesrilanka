const login = {
  "user": '',
  "password" : ""
};

fetch('login.json')
  .then(response => response.json())
  .then(data => {

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const login = document.getElementById("login");
    login.addEventListener("click", loggin);
    username.value = "";

    function loggin() {
      if (username.value == data.user && password.value == data.password) {
        window.location.href = "home.html";
      }
       else if (username.value == data.admin && password.value == data.adminpassword) {
       window.location.href = "database.html";
      }
    }


    
  });

