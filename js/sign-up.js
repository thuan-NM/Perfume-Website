const inputUsernameRegister = document.querySelector("#e-mail");
const inputPasswordRegister = document.querySelector(".passwd");
const btnRegister = document.querySelector(".auth-submit");
const inputFullNameRegister = document.querySelector("#user-FullName");
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();

  // Get input values
  const username = inputUsernameRegister.value;
  const password = inputPasswordRegister.value;
  const passwordConfirm = document.querySelector(".passwd-confirm").value;
  const fullName = inputFullNameRegister.value;

  // Validate inputs
  if (username === "" || password === "" || passwordConfirm === "" || fullName === "") {
    alert("Vui lòng điền đầy đủ thông tin!");
  } else if (password !== passwordConfirm) {
    alert("Mật khẩu xác thực không đúng!");
  } else if (!isValidEmail(username)) {
    alert("Email không hợp lệ!");
  } else if (localStorage.getItem(username) !== null) {
    alert("Tài khoản đã tồn tại!");
  } else {
    // Create user object
    const user = {
      fullname: fullName,
      username: username,
      password: password,
    };
    // localStorage.setItem(fullName,user.fullname);
    // localStorage.setItem(username,user.username);
    // localStorage.setItem(password,user.password);
    // Save user object to localStorage
    localStorage.setItem('username', JSON.stringify(user));
    // console.log(localStorage.getItem(username));
    // Set current user in localStorage
    // localStorage.setItem('current-user', username);

    alert("Đăng ký thành công!");
    window.location.href = "dangnhap.html";
  }
});

// Get current user from localStorage
const currentUser = localStorage.getItem('username');
console.log(currentUser);
if (currentUser) {
  const user = localStorage.getItem('username');
  const fullNameElement = document.querySelector('#fullName');
  const usernameElement = document.querySelector('#username');
  const passwordElement = document.querySelector('#password');
  fullNameElement.textContent = user.fullname;
  usernameElement.textContent = user.username;
  passwordElement.textContent = user.password;
} else {
  // Redirect to login page if user is not logged in
//   window.location.href = "dangnhap.html";
}

function isValidEmail(email) {
  // Kiểm tra tính hợp lệ của email bằng biểu thức chính quy
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}