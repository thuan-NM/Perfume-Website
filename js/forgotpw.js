function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    if (localStorage.getItem(email)) {
      const randomPassword = Math.random().toString(36).slice(-8);
      const userData = JSON.parse(localStorage.getItem(email));
      userData.password = randomPassword;
      localStorage.setItem(email, JSON.stringify(userData));
      alert(`Mật khẩu tạm thời đã được gửi đến email ${email}. Vui lòng đổi mật khẩu ngay khi đăng nhập thành công!!!`);
      window.location.href = "/html/dangnhap.html";
    } else {
      alert("Email không tồn tại trong hệ thống.");
    }
  }
  
  const forgotPasswordForm = document.querySelector(".forgotpw-form");
  forgotPasswordForm.addEventListener("submit", handleForgotPassword);