const rmCheck = document.getElementById("rememberMe"),
    usernameInput = document.getElementById("username"),
    passwordInput = document.getElementById("password");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  config.defaults.username = localStorage.username;
  config.defaults.password = localStorage.password;
} else {
  rmCheck.removeAttribute("checked");
  config.defaults.username = "";
  config.defaults.password = "";
}

function lsRememberMe() {

  if (rmCheck.checked && usernameInput.value !== "") {
    localStorage.username = usernameInput.value;
    localStorage.password = passwordInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.password = "";
    localStorage.checkbox = "";
  }
}