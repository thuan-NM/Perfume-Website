const buttonWonman = document.getElementById("buttonWonman");
const buttonMan = document.getElementById("buttonMan");
const manlist = document.getElementById("manlist");
const ImgItem = document.getElementsByClassName("ImgItem");
const NameItem = document.getElementsByClassName("NameItem");
const FullName = document.getElementsByClassName("FullName");
const PriceItem = document.getElementsByClassName("PriceItem");
const content =document.getElementById("content-main");
const text1= document.getElementsByClassName("text-content")[0];
const text2= document.getElementsByClassName("text-2")[0];
const man= document.getElementById("man");
const woman= document.getElementById("woman");

content.addEventListener("click", function(){
    text1.innerHTML += "Nước hoa là một trong những sản phẩm mang tính cá nhân nhất, nó mang lại cho người dùng những trải nghiệm riêng biệt và đặc biệt. Tại La Parfumania, chúng tôi hiểu được điều này và luôn cố gắng mang đến cho khách hàng những trải nghiệm tuyệt vời nhất với nước hoa." +"<br><br>" + 
    "Mỗi mùi hương là một cuộc hành trình đầy cảm hứng và sự khám phá. Chúng ta có thể tìm thấy những kí ức và cảm xúc của mình trong mỗi hương thơm và khám phá những chân trời mới lạ. Với La Parfumania, chúng tôi hy vọng sẽ giúp khách hàng khám phá và trải nghiệm những mùi hương đặc biệt, và mang đến cho họ những cuộc phiêu lưu tuyệt vời." +"<br><br>"+
    "Tại La Parfumania, chúng tôi cam kết cung cấp cho khách hàng những sản phẩm nước hoa chất lượng nhất từ những thương hiệu nổi tiếng và danh tiếng trên thế giới. Chúng tôi luôn chọn lựa và cập nhật các mẫu nước hoa mới nhất và phù hợp nhất với xu hướng thị trường và sở thích của khách hàng." + "<br><br>"+
    "Đội ngũ nhân viên của chúng tôi là những chuyên gia về nước hoa, luôn sẵn sàng tư vấn và hỗ trợ khách hàng trong việc chọn lựa và sử dụng sản phẩm. Chúng tôi hiểu rằng mỗi người có một phong cách, một cá tính riêng và chúng tôi sẽ tìm ra cho bạn một mùi hương phù hợp với cá tính và phong cách của bạn." +"<br><br>"+
    "Không chỉ cung cấp các sản phẩm nước hoa, La Parfumania còn cung cấp các dịch vụ tư vấn và định hướng cho khách hàng trong việc lựa chọn sản phẩm phù hợp với nhu cầu sử dụng, cũng như các dịch vụ hậu mãi như bảo trì và sửa chữa sản phẩm nếu cần thiết." +"<br><br>"+
    "Với mong muốn mang đến cho khách hàng những trải nghiệm tuyệt vời nhất với nước hoa, La Parfumania sẽ không ngừng nỗ lực và cải tiến để trở thành địa chỉ tin cậy và chất lượng nhất cho những ai yêu thích nước hoa.";
    content.classList.add("hidden");
})

function WomanPerFume() {
    ImgItem[0].src = "/images/product/perfume-w1.png";
    NameItem[0].innerHTML = "GUCCI";
    FullName[0].innerHTML = "Bloom Eau de Parfum For Her";
    PriceItem[0].innerHTML = "1,780,000đ";
    ImgItem[1].src = "/images/product/perfume-w2.png";
    NameItem[1].innerHTML = "JEAN PAUL GAULTIER";
    FullName[1].innerHTML = "Scandal";
    PriceItem[1].innerHTML = "1,780,000đ";
    ImgItem[2].src = "/images/product/perfume-w3.png";
    NameItem[2].innerHTML = "CAROLINA HERRERA";
    FullName[2].innerHTML = "Good Girl Eau de Parfum";
    PriceItem[2].innerHTML = "1,780,000đ";
    ImgItem[3].src = "/images/product/perfume-w4.png";
    NameItem[3].innerHTML = "VERSACE";
    FullName[3].innerHTML = "Bright Crystal Mini Size";
    PriceItem[3].innerHTML = "1,990,000đ";
    ImgItem[4].src = "/images/product/perfume-w5.png";
    NameItem[4].innerHTML = "SALVATORE FERRAGAMO";
    FullName[4].innerHTML = "Signorina Eau de Parfum";
    PriceItem[4].innerHTML = "1,850,000đ";
    ImgItem[5].src = "/images/product/perfume-w6.png";
    NameItem[5].innerHTML = "MARC JACOBS";
    FullName[5].innerHTML = "Perfect";
    PriceItem[5].innerHTML = "2,400,000đ";
    ImgItem[6].src = "/images/product/perfume-w7.png";
    NameItem[6].innerHTML = "MARC JACOBS";
    FullName[6].innerHTML = "Daisy Love";
    PriceItem[6].innerHTML = "1,480,000đ";
    ImgItem[7].src = "/images/product/perfume-w8.png";
    NameItem[7].innerHTML = "MOSCHINO";
    FullName[7].innerHTML = "Toy 2 For Woman";
    PriceItem[7].innerHTML = "1,380,000đ";
    ImgItem[8].src = "/images/product/perfume-w9.png";
    NameItem[8].innerHTML = "ISSEY MIYAKE";
    FullName[8].innerHTML = "L’Eau d’Issey Eau & Magnolia";
    PriceItem[8].innerHTML = "1,870,000đ";
    ImgItem[9].src = "/images/product/perfume-w10.png";
    NameItem[9].innerHTML = "VERSACE";
    FullName[9].innerHTML = "Yellow Diamond Travel Spray";
    PriceItem[9].innerHTML = "2,800,000đ";
    ImgItem[10].src = "/images/product/perfume-w11.png";
    NameItem[10].innerHTML = "ANNA SUI";
    FullName[10].innerHTML = "Sky";
    PriceItem[10].innerHTML = "1,090,000đ";
    ImgItem[11].src = "/images/product/perfume-w12.png";
    NameItem[11].innerHTML = "AZZARO";
    FullName[11].innerHTML = "Wanted Girl By Night";
    PriceItem[11].innerHTML = "1,280,000đ";
    woman.classList.add("selected");
    woman.classList.add("animation");
    man.classList.remove("selected");
    man.classList.remove("animation");
}
function ManPerFume() {
    ImgItem[0].src = "/images/product/perfume1.png";
    NameItem[0].innerHTML = "CHRISTIAN DIOR";
    FullName[0].innerHTML = "Homme Intense";
    PriceItem[0].innerHTML = "2,800,000đ";
    ImgItem[1].src = "/images/product/perfume2.png";
    NameItem[1].innerHTML = "DOLCE & GABBANA";
    FullName[1].innerHTML = "The One Eau de Parfum for Men";
    PriceItem[1].innerHTML = "2,660,000đ";
    ImgItem[2].src = "/images/product/perfume3.png";
    NameItem[2].innerHTML = "CHANEL";
    FullName[2].innerHTML = "Bleu De Chanel Eau de Parfum";
    PriceItem[2].innerHTML = "2,450,000đ";
    ImgItem[3].src = "/images/product/perfume4.png";
    NameItem[3].innerHTML = "GIORGIO ARMANI";
    FullName[3].innerHTML = "Acqua di Gio Profumo";
    PriceItem[3].innerHTML = "3,200,000đ";
    ImgItem[4].src = "/images/product/perfume5.png";
    NameItem[4].innerHTML = "CREED";
    FullName[4].innerHTML = "Aventus";
    PriceItem[5].innerHTML = "6,500,000đ";
    ImgItem[5].src = "/images/product/perfume6.png";
    NameItem[5].innerHTML = "ARMAF";
    FullName[5].innerHTML = "Club de Nuit Intense Man";
    PriceItem[5].innerHTML = "1,180,000";
    ImgItem[6].src = "/images/product/perfume7.png";
    NameItem[6].innerHTML = "YVES SAINT LAURENT";
    FullName[6].innerHTML = "La Nuit De L'Homme";
    PriceItem[6].innerHTML = "2,650,000đ";
    ImgItem[7].src = "/images/product/perfume8.png";
    NameItem[7].innerHTML = "BVLGARI";
    FullName[7].innerHTML = "Aqva Pour Homme Marine";
    PriceItem[7].innerHTML = "1,650,000đ";
    ImgItem[8].src = "/images/product/perfume9.png";
    NameItem[8].innerHTML = "CALVIN KLEIN";
    FullName[8].innerHTML = "Everyone";
    PriceItem[8].innerHTML = "2,800,000đ";
    ImgItem[9].src = "/images/product/perfume10.png";
    NameItem[9].innerHTML = "VIKTOR & ROLF";
    FullName[9].innerHTML = "Spicebomb For Men";
    PriceItem[9].innerHTML = "2,450,000đ";
    ImgItem[10].src = "/images/product/perfume11.png";
    NameItem[10].innerHTML = "PACO RABANNE";
    FullName[10].innerHTML = "Phantom";
    PriceItem[10].innerHTML = "2,150,000đ";
    ImgItem[11].src = "/images/product/perfume12.png";
    NameItem[11].innerHTML = "JEAN PAUL GAULTIER";
    FullName[11].innerHTML = "Le Beau Le Parfum";
    PriceItem[11].innerHTML = "3,100,000đ";
    man.classList.add("selected");
    man.classList.add("animation");
    woman.classList.remove("selected");
    woman.classList.remove("animation");
}
buttonWonman.addEventListener("click", () => {
    WomanPerFume();
});
buttonMan.addEventListener("click", () => {
    ManPerFume();
});
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