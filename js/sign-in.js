
const inputUsername = document.querySelector("#e-mail");
const inputPassword = document.querySelector("#passwd");
const rememberMeCheckbox = document.querySelector("#rememberMeCheckbox");
const btnLogin = document.querySelector(".auth-submit");
const googleLoginButton = document.querySelector(".google-login-button");
const showPasswordIcon= document.querySelector(".show-password");
// Function to toggle password visibility
if (showPasswordIcon != null) {
  showPasswordIcon.addEventListener("click", function () {
    const inputPasswordType = inputPassword.getAttribute("type");
    inputPasswordType === "password"
      ? inputPassword.setAttribute("type", "text")
      : inputPassword.setAttribute("type", "password");
      console.log('clicked');
  });
}
// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to handle login
function handleLogin(event) {
  event.preventDefault();
  const email = inputUsername.value;
  const password = inputPassword.value;

  // Check if email and password are valid
  if (!isValidEmail(email)) {
    alert("Email không hợp lệ!");
    return;
  } else if (password === "") {
    alert("Vui lòng nhập mật khẩu!");
    return;
  }

  // Check if email and password match with the data stored in localStorage
  const userData = JSON.parse(localStorage.getItem('username'));
  if (!userData) {
    alert("Tài khoản không tồn tại!");
  } else if (userData.password !== password) {
    alert("Mật khẩu không đúng!");
  } else {
    alert("Đăng nhập thành công!");
    if (rememberMeCheckbox.checked) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }
    window.location.href = "/index.html";
  }
}

// Function to handle login with Google
function handleGoogleLogin() {
  alert("Đăng nhập bằng Google!");
  // TODO: Handle Google login
}

// Load remembered email and password from localStorage (if any)
const rememberedEmail = localStorage.getItem("rememberedEmail");
const rememberedPassword = localStorage.getItem("rememberedPassword");
if (rememberedEmail && rememberedPassword) {
  inputUsername.value = rememberedEmail;
  inputPassword.value = rememberedPassword;
  rememberMeCheckbox.checked = true;
}

// Add event listeners
btnLogin.addEventListener("click", handleLogin);
googleLoginButton.addEventListener("click", handleGoogleLogin);

btnLogin.addEventListener("click",function() {
boxArrowLeftIcon.classList.add("bi-box-arrow-in-left");
boxArrowLeftIcon.classList.remove("bi-box-arrow-in-right");})