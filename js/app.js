const loginBtn = document.getElementById('login-btn');
const regBtn = document.getElementById('reg-btn');
const loginDis = document.getElementById('login');
const registerDis = document.getElementById('register');

function loginFoo() {
 loginDis.style.left = "4px";
 registerDis.style.left = "-520px";
 loginBtn.className += "white";
 regBtn.className = "grey";
 loginDis.style.opacity = 1;
 registerDis.style.opacity = 0
}

function registerFoo() {
 loginDis.style.left = "-510px";
 registerDis.style.right = "5px";
 loginBtn.className += "grey";
 regBtn.className = "white";
 loginDis.style.opacity = 0;
 registerDis.style.opacity = 1;
}