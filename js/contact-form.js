const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const data = { name, email, message };
  saveData(data);
  alert("Tin nhắn của bạn đã được gửi đến chúng tôi! Chúng tôi sẽ giải đáp thắc mắc của bạn sớm nhất có thể. Xin cảm ơn!");
});

function saveData(data) {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(data);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}