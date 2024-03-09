window.addEventListener("load", function () {
  const loginForm = document.querySelector(".login-form");
  const showPasswordIcon = loginForm.querySelector(".show-password");
  const inputPassword = loginForm.querySelector('input[type="password"]');
  if (showPasswordIcon != null) {
    showPasswordIcon.addEventListener("click", function () {
      const inputPasswordType = inputPassword.getAttribute("type");
      inputPasswordType === "password"
        ? inputPassword.setAttribute("type", "text")
        : inputPassword.setAttribute("type", "password");
        console.log('clicked');
    });
  }
});
