if (username) {
  const user = JSON.parse(localStorage.getItem('username'));
  const fullNameElement = document.querySelector('#fullName');
  const usernameElement = document.querySelector('#username');
  const passwordElement = document.querySelector('#password');
  fullNameElement.textContent = user.fullname;
  usernameElement.textContent = user.username;
  passwordElement.textContent = user.password;
  console.log(fullNameElement,usernameElement,passwordElement);
}
const rspw = document.querySelector('#resetpwbt');
const rspwInput = document.querySelector('.resetpw');

rspw.addEventListener('click', function() {
  const newPw = rspwInput.value;
  const username = JSON.parse(localStorage.getItem('username'));
  username.password = newPw;
  localStorage.setItem('username', JSON.stringify(username));
  alert('Đã đổi mật khẩu thành công');
  location.reload();
});


