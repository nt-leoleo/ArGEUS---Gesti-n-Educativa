document.getElementById("btn_new-account").addEventListener("click", displayRegister);
document.getElementById("btn_old-account").addEventListener("click", displayLogin);

var loginCard = document.getElementById("login-card-container");
var registerCard = document.getElementById("register-card-container");

function displayRegister() {
    loginCard.style.display = "none";
    registerCard.style.display = "block";
}
function displayLogin() {
    loginCard.style.display = "block";
    registerCard.style.display = "none";
}