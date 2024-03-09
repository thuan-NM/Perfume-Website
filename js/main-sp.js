

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

button1.addEventListener("click", function() {
  div1.classList.remove("hidden");
  div2.classList.add("hidden");
  div3.classList.add("hidden");
  div4.classList.add("hidden");
});

button2.addEventListener("click", function() {
  div1.classList.add("hidden");
  div2.classList.remove("hidden");
  div3.classList.add("hidden");
  div4.classList.add("hidden");
});

button3.addEventListener("click", function() {
  div1.classList.add("hidden");
  div2.classList.add("hidden");
  div3.classList.remove("hidden");
  div4.classList.add("hidden");
});

button4.addEventListener("click", function() {
  div1.classList.add("hidden");
  div2.classList.add("hidden");
  div3.classList.add("hidden");
  div4.classList.remove("hidden");
});
//-------------------------------------------------------------------


// Lấy tất cả các nút "Thêm vào giỏ hàng" trên trang
var addToCartButtons = document.querySelectorAll(".addToCart");
// Lặp qua từng nút "Thêm vào giỏ hàng" để thêm sự kiện click
addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    // Ngăn chặn hành động mặc định của nút
    event.preventDefault();

    // Lấy thông tin sản phẩm từ các phần tử trong card
    var card = button.closest(".CardItem");
    var img = card.querySelector(".ImgItem").src;
    var name = card.querySelector(".NameItem").textContent;
    var fullName = card.querySelector(".FullName").textContent;
    var price = card.querySelector(".PriceItem").textContent;

    // Thêm sản phẩm vào giỏ hàng
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var item = {
      img: img,
      name: name,
      fullName: fullName,
      price: price,
      quantity: 1
    };
    var existingItem = cartItems.find(function(e) {
      return e.name === item.name && e.fullName === item.fullName && e.price === item.price && e.img === item.img;
    });
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    var overlay = document.createElement("div");
      overlay.classList.add("overlay");

      // Tạo hộp chứa hình chữ nhật
      var alertBox = document.createElement("div");
      alertBox.classList.add("alert-box");

      // Tạo hình chữ nhật
      var rectangle = document.createElement("div");
      rectangle.style.width = "300px";
      rectangle.style.height = "50px";
      rectangle.style.backgroundColor = "none";
      rectangle.innerHTML+="<p>Sản phẩm đã được thêm vào giỏ hàng!</p>"
      rectangle.classList.add("alert-main")

      // Thêm hình chữ nhật vào hộp chứa
      alertBox.appendChild(rectangle);

      // Thêm hộp chứa vào lớp mờ
      overlay.appendChild(alertBox);

      // Thêm lớp mờ vào body
      document.body.appendChild(overlay);

      // Đóng cửa sổ pop-up cảnh báo sau 1 giây
      setTimeout(function() {
        overlay.remove();
      }, 1000);
  });
});

function addToCart(img, name, fullName, price) {
  // Tạo một đối tượng sản phẩm mới
  var product = {
    img: img,
    name: name,
    fullName: fullName,
    price: price
  };

  // Thêm sản phẩm vào giỏ hàng
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);
  // Lưu giá trị của mảng cartItems vào localStorage để lưu trữ giỏ hàng
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng
  var overlay = document.createElement("div");
      overlay.classList.add("overlay");

      // Tạo hộp chứa hình chữ nhật
      var alertBox = document.createElement("div");
      alertBox.classList.add("alert-box");

      // Tạo hình chữ nhật
      var rectangle = document.createElement("div");
      rectangle.style.width = "100px";
      rectangle.style.height = "100px";
      rectangle.style.backgroundColor = "none";
      rectangle.innerHTML+="<p>Sản phẩm đã được thêm vào giỏ hàng!</p>"

      // Thêm hình chữ nhật vào hộp chứa
      alertBox.appendChild(rectangle);

      // Thêm hộp chứa vào lớp mờ
      overlay.appendChild(alertBox);

      // Thêm lớp mờ vào body
      document.body.appendChild(overlay);

      // Đóng cửa sổ pop-up cảnh báo sau 1 giây
      setTimeout(function() {
        overlay.remove();
      }, 1000);
}
const products = document.querySelectorAll('.product');
const searchInput = document.querySelector('.form-control');
const filterBrand = document.querySelectorAll('.filter-brand a');
const filterGender = document.querySelectorAll('.filter-gender a');
const filterPrice = document.querySelectorAll('.filter-price a');
const filterClear = document.querySelector('#filter-clear');
const filterApply = document.querySelector('#button-addon1');

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedBrands = Array.from(filterBrand).filter((brand) => brand.classList.contains('active')).map((brand) => brand.textContent);
  const selectedGender = Array.from(filterGender).filter((gender) => gender.classList.contains('active')).map((gender) => gender.textContent.toLowerCase());
  const selectedPrice = Array.from(filterPrice).filter((price) => price.classList.contains('active')).map((price) => price.textContent);
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const name = product.querySelector('.FullName').textContent.toLowerCase();
    const brand = product.querySelector('.NameItem').textContent;
    const genderImgSrc = product.querySelector('.gender').src;
    const price = parseInt(product.querySelector('.PriceItem').textContent.replace(',', ''));
    let gender = null;
    
    if (genderImgSrc.includes('w'))  {
      gender = 'nữ';
    } else {
      gender = 'nam';
    }
    
    if (!searchText && selectedBrands.length === 0 && selectedGender.length === 0 && selectedPrice.length === 0) {
      product.style.display = 'block';
    } else if (searchText && name.includes(searchText)) {
      product.style.display = 'block';
    } else if (selectedBrands.includes(brand)) {
      product.style.display = 'block';
    } else if (selectedGender.includes(gender)) {
      product.style.display = 'block';
    } else if (selectedPrice.some(range => {
      const [min, max] = range.split(' - ').map(price => parseInt(price.replace(/đ/g, '').replace(',', '')));
      return price >= min && price <= max;
    })) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  }
}

// Lắng nghe sự kiện click nút "Lọc"
filterApply.addEventListener('click', filterProducts);

// Lắng nghe sự kiện click nút "Xóa lọc"
filterClear.addEventListener('click', function() {
  searchInput.value = '';
  Array.from(filterBrand).forEach((brand) => brand.classList.remove('active'));
  Array.from(filterGender).forEach((gender) => gender.classList.remove('active'));
  Array.from(filterPrice).forEach((price) => price.classList.remove('active'));
  filterProducts();
});

// Lắng nghe sự kiện click vào các liên kết thương hiệu, giới tính và giá để chọn tiêu chí lọc
Array.from(filterBrand).forEach((brand) => {
  brand.addEventListener('click', function() {
    brand.classList.toggle('active');
    filterProducts();
  });
});

Array.from(filterGender).forEach((gender) => {
  gender.addEventListener('click', function() {
    gender.classList.toggle('active');
    filterProducts();
  });
});

Array.from(filterPrice).forEach((price) => {
  price.addEventListener('click', function() {
    price.classList.toggle('active');
    filterProducts();
  });
});
