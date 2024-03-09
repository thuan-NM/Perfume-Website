const btnLogout = document.querySelector(".sign");
const boxArrowLeftIcon = document.querySelector(".bi-box-arrow-in-left");

function handleLogout() {
  localStorage.removeItem("rememberedEmail");
  localStorage.removeItem("rememberedPassword");
}
btnLogout.addEventListener("click", handleLogout);
boxArrowLeftIcon.classList.remove("bi-box-arrow-in-left");
boxArrowLeftIcon.classList.add("bi-box-arrow-in-right");