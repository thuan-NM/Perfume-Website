
var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
var cartList = document.querySelector(".cardlist");
let sum=0;
cartItems.forEach(function(item) {
  var cartItem = document.createElement("div");
  cartItem.classList.add("cart-item", "row");
  var priceNumber = parseInt((item.price).replace(/,/g, ""));
  cartItem.innerHTML = `
    <div class="col-2 d-flex align-items-center justify-content-center mt-5 mb-5"><a class="btn btn-light"><button class="remfromCart" style="border: none; background:none;"><i
    class="bi bi-trash3-fill"></i></button></a></div>
    <div class="col-2 d-flex align-items-center justify-content-center mt-5 mb-5"><img src="${item.img}" alt="${item.fullName}" width="100"></div>
    <div class="col-2 d-flex align-items-center justify-content-start fw-semibold mt-5 mb-5" style="font-size:21px">${item.name} - ${item.fullName}</div>
    <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px">${item.price}</div>
    <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px">${item.quantity}</div>
    <div class="col-2 d-flex align-items-center justify-content-center fw-bold mb-5 mt-5"  style="font-size:21px; color : red;">${(priceNumber*item.quantity).toLocaleString("en-US")}</div>
  `;
  cardlist.appendChild(cartItem);
});


var totalAmount = 0;
cartItems.forEach(function(item) {
  var priceNumber = parseInt((item.price).replace(/,/g, ""));
  totalAmount += priceNumber * item.quantity;
});
// Gán tổng số tiền vào phần tử HTML có class là "total"
var totalElement = document.querySelector(".total");
totalElement.innerHTML =totalAmount.toLocaleString("en-US") + " đ";
var discoutedElement = document.querySelector(".discounted");
discoutedElement.innerHTML=0;
var finalElement = document.querySelector(".final");
finalElement.innerHTML= (parseInt((totalElement.innerHTML).replace(/,/g, "")) - parseInt(discoutedElement.innerHTML)).toLocaleString("en-US") + " đ";

var removeButtons = document.querySelectorAll(".remfromCart");
lengthButton = removeButtons.length;
for (let i = 0; i < lengthButton; i++) {
  removeButtons[i].addEventListener("click", function() {
    console.log("data-index of button clicked:", i);
    cartItems.splice(i,1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    location.reload();
  });
}


function updateCart() {
    cartList.innerHTML = "";
    cartItems.forEach(function(item, index) {
      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item", "row");
      var priceNumber = parseInt((item.price).replace(/,/g, ""));
      cartItem.innerHTML = `
        <div class="col-2 d-flex align-items-center justify-content-center mt-5 mb-5"><a class="btn btn-light remfromCart" data-index="${index}"><button style="border: none; background:none;"><i
        class="bi bi-trash3-fill"></i></button></a></div>
        <div class="col-2 d-flex align-items-center justify-content-center mt-5 mb-5"><img src="${item.img}" alt="${item.fullName}" width="100"></div>
        <div class="col-2 d-flex align-items-center justify-content-start fw-semibold mt-5 mb-5" style="font-size:21px">${item.name} - ${item.fullName}</div>
        <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px">${item.price}</div>
        <div class="col-2 d-flex align-items-center justify-content-center fw-semibold mt-5 mb-5" style="font-size:21px">${item.quantity}</div>
        <div class="col-2 d-flex align-items-center justify-content-center fw-bold mb-5 mt-5"  style="font-size:21px; color : red;">${(priceNumber*item.quantity).toLocaleString("en-US")}</div>
      `;
      cardlist.appendChild(cartItem);
    });
  }
  const order = document.querySelector("#order");
  order.addEventListener("click", function(){
    // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    // Tạo hộp chứa hình chữ nhật
    var alertBox = document.createElement("div");
    alertBox.classList.add("alert-box");
  
    // Tạo hình chữ nhật
    var rectangle = document.createElement("div");
    rectangle.style.width = "300px";
    rectangle.style.height = "100px";
    rectangle.style.backgroundColor = "#2C2E3E";
    rectangle.style.color="white";
    rectangle.style.textAlign="center";
    rectangle.style.borderRadius="15px";  
    rectangle.innerHTML+=`<p class="mt-2">Đặt hàng thành công!</br>Chúng tôi sẽ liên hệ đến bạn khi đơn hàng chuẩn bị được gửi!</p>`;
    
  
  
    // Thêm hình chữ nhật vào hộp chứa
    alertBox.appendChild(rectangle);
  
    // Thêm hộp chứa vào lớp mờ
    overlay.appendChild(alertBox);
  
    // Thêm lớp mờ vào body
    document.body.appendChild(overlay);
  
    // Đóng cửa sổ pop-up cảnh báo sau 1 giây
    setTimeout(function() {
      overlay.remove();
    }, 7000);
    })