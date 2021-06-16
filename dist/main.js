const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("username");
    console.log(rmCheck.value);

// if (localStorage.checkbox && localStorage.checkbox !== "") {
//   rmCheck.setAttribute("checked", "checked");
//   emailInput.value = localStorage.username;
//   console.log('ok1');
// } else {
//   rmCheck.removeAttribute("checked");
//   emailInput.value = "";
//   console.log('ok2');
// }

// function lsRememberMe() {

//   if (rmCheck.checked && emailInput.value !== "") {
//     localStorage.username = emailInput.value;
//     localStorage.checkbox = rmCheck.value;
//     console.log('ok3');
//   } else {
//     localStorage.username = "";
//     localStorage.checkbox = "";
//     console.log('ok4');

//   }
// }