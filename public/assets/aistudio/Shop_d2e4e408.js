
/* =================================
   1. NAVIGATION
================================= */

// Lấy thanh điều hướng từ HTML
var header = document.querySelector(".site-header");

// Thay đổi nền menu khi cuộn trang
if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}


// Lấy nút mở menu và danh sách menu
var nutMenu = document.getElementById("menuToggle");
var menu = document.getElementById("nav-menu");

if (nutMenu && menu) {

    // Đóng menu
    function dongMenu() {
        menu.classList.remove("open");
        nutMenu.setAttribute("aria-expanded", "false");
        nutMenu.textContent = "☰";
    }

    // Mở hoặc đóng menu khi nhấn nút
    nutMenu.addEventListener("click", function () {

        var dangMo = menu.classList.toggle("open");

        nutMenu.setAttribute("aria-expanded", String(dangMo));

        if (dangMo) {
            nutMenu.textContent = "×";
        } else {
            nutMenu.textContent = "☰";
        }

    });

    // Đóng menu khi chọn một mục điều hướng
    var cacLienKet = menu.getElementsByTagName("a");

    for (var i = 0; i < cacLienKet.length; i++) {
        cacLienKet[i].addEventListener("click", dongMenu);
    }

    // Đóng menu khi chuyển sang màn hình máy tính
    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {
            dongMenu();
        }

    });

}


/* =================================
   2. PRODUCT DATA
================================= */

// Lưu tên các sản phẩm có thể mua
var tenSanPham = [
    "TỪNG NGÀY NHƯ MÃI MÃI",
    "ÁO ARCHER",
    "TÚI TOTE ARCHER",
    "ÁO TỪNG NGÀY"
];

// Lưu giá của từng sản phẩm
var giaSanPham = [
    529000,
    449000,
    249000,
    499000
];

// Lưu đường dẫn ảnh sản phẩm
var anhSanPham = [
    "https://cdn.phototourl.com/anon/2026-11-15-9199c512-6078-441b-8edd-6567d98db7c8.png",

    "https://cdn.phototourl.com/anon/2026-11-15-808a62f5-e8f2-4c68-99a5-b313d6588e6c.png",

    "https://cdn.phototourl.com/anon/2026-11-15-65fea7a0-6b63-4af6-bdd0-cce6d675b22d.png",

    "https://cdn.phototourl.com/anon/2026-11-15-e3e01775-12ee-4038-abad-5f0b6b4dbf65.png"
];

// Mảng lưu số lượng từng sản phẩm
var soLuong = [0, 0, 0, 0];


/* =================================
   3. FORMAT PRICE
================================= */

// Chuyển số tiền thành định dạng tiền Việt Nam
function dinhDangTien(tien) {
    return tien.toLocaleString("vi-VN") + "đ";
}


/* =================================
   4. ADD TO CART
================================= */

// Thêm sản phẩm vào giỏ hàng
function addToCart(id) {

    soLuong[id]++;

    hienThiGioHang();

    alert("Đã thêm sản phẩm vào giỏ hàng!");

}


/* =================================
   5. UPDATE CART COUNT
================================= */

// Cập nhật số lượng sản phẩm trên biểu tượng giỏ hàng
function capNhatSoLuongGioHang() {

    var tongSoLuong = 0;

    for (var i = 0; i < soLuong.length; i++) {
        tongSoLuong = tongSoLuong + soLuong[i];
    }

    document.getElementById("cart-count").innerHTML = tongSoLuong;

}


/* =================================
   6. DISPLAY CART
================================= */

// Hiển thị danh sách sản phẩm trong giỏ hàng
function hienThiGioHang() {

    var noiDung = "";
    var tongTien = 0;
    var tongSoLuong = 0;

    for (var i = 0; i < tenSanPham.length; i++) {

        if (soLuong[i] > 0) {

            var thanhTien = giaSanPham[i] * soLuong[i];

            tongTien = tongTien + thanhTien;
            tongSoLuong = tongSoLuong + soLuong[i];

            noiDung += '<div class="cart-item">';

            noiDung += '<div>';
            noiDung += '<h3>' + tenSanPham[i] + '</h3>';
            noiDung += '<p>' + dinhDangTien(giaSanPham[i]) + '</p>';
            noiDung += '</div>';

            noiDung += '<div>';

            // Nút giảm số lượng
            noiDung += '<button onclick="changeQuantity(' + i + ',-1)">-</button>';

            noiDung += '<span> ' + soLuong[i] + ' </span>';

            // Nút tăng số lượng
            noiDung += '<button onclick="changeQuantity(' + i + ',1)">+</button>';

            // Nút xóa sản phẩm
            noiDung += '<button class="remove-button" onclick="removeProduct(' + i + ')">Xóa</button>';

            noiDung += '</div>';
            noiDung += '</div>';

        }

    }

    // Thông báo khi giỏ hàng trống
    if (tongSoLuong === 0) {
        noiDung = "<p>Giỏ hàng đang trống.</p>";
    }

    // Cập nhật nội dung giỏ hàng
    document.getElementById("cart-items").innerHTML = noiDung;

    // Cập nhật tổng tiền
    document.getElementById("total").innerHTML = dinhDangTien(tongTien);

    // Khóa hoặc mở nút thanh toán
    document.getElementById("checkout").disabled = tongSoLuong === 0;

    // Cập nhật số lượng trên biểu tượng giỏ hàng
    capNhatSoLuongGioHang();

}


/* =================================
   7. CHANGE QUANTITY
================================= */

// Thay đổi số lượng sản phẩm
function changeQuantity(id, soLuongThayDoi) {

    soLuong[id] = soLuong[id] + soLuongThayDoi;

    // Không cho phép số lượng nhỏ hơn 0
    if (soLuong[id] < 0) {
        soLuong[id] = 0;
    }

    hienThiGioHang();

}


/* =================================
   8. REMOVE PRODUCT
================================= */

// Xóa sản phẩm khỏi giỏ hàng
function removeProduct(id) {

    soLuong[id] = 0;

    hienThiGioHang();

}


/* =================================
   9. CHECKOUT
================================= */

// Chuyển từ giỏ hàng sang trang thanh toán
function checkout() {

    var tongSoLuong = 0;

    for (var i = 0; i < soLuong.length; i++) {
        tongSoLuong = tongSoLuong + soLuong[i];
    }

    // Kiểm tra giỏ hàng có sản phẩm hay không
    if (tongSoLuong === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    // Ẩn cửa hàng và hiển thị trang thanh toán
    document.getElementById("shop-content").style.display = "none";

    document.getElementById("checkout-page").classList.add("show");

    document.body.classList.add("checkout-mode");

    // Hiển thị thông tin sản phẩm trong đơn hàng
    hienThiDonHang();

    // Đưa trang lên đầu
    window.scrollTo(0, 0);

}


/* =================================
   10. DISPLAY ORDER
================================= */

// Hiển thị sản phẩm và tổng tiền trong trang thanh toán
function hienThiDonHang() {

    var noiDung = "";
    var tongTien = 0;
    var tongSoLuong = 0;

    for (var i = 0; i < tenSanPham.length; i++) {

        if (soLuong[i] > 0) {

            var thanhTien = giaSanPham[i] * soLuong[i];

            tongTien = tongTien + thanhTien;
            tongSoLuong = tongSoLuong + soLuong[i];

            noiDung += '<div class="checkout-item">';

            // Hiển thị ảnh sản phẩm
            noiDung += '<img src="' + anhSanPham[i] + '" alt="' + tenSanPham[i] + '">';

            // Hiển thị tên và giá sản phẩm
            noiDung += '<div>';
            noiDung += '<h4>' + tenSanPham[i] + '</h4>';
            noiDung += '<p>' + dinhDangTien(giaSanPham[i]) + '</p>';
            noiDung += '</div>';

            // Hiển thị số lượng
            noiDung += '<div class="item-quantity">';
            noiDung += soLuong[i];
            noiDung += '</div>';

            noiDung += '</div>';

        }

    }

    // Đưa danh sách sản phẩm vào HTML
    document.getElementById("checkout-items").innerHTML = noiDung;

    // Hiển thị tổng tiền
    document.getElementById("checkout-total").innerHTML =
        dinhDangTien(tongTien);

    // Hiển thị tổng số lượng
    document.getElementById("checkout-quantity").innerHTML =
        tongSoLuong;

}


/* =================================
   11. PAYMENT METHOD
================================= */

// Lấy các lựa chọn thanh toán
var phuongThuc = document.getElementsByName("payment");

// Lấy khu vực thông tin ngân hàng
var thongTinNganHang = document.getElementById("bank-info");

// Kiểm tra phương thức thanh toán được chọn
for (var i = 0; i < phuongThuc.length; i++) {

    phuongThuc[i].addEventListener("change", function () {

        if (this.value === "bank") {

            // Hiển thị thông tin khi chọn ngân hàng
            thongTinNganHang.classList.add("show");

        } else {

            // Ẩn thông tin ngân hàng khi chọn tiền mặt
            thongTinNganHang.classList.remove("show");

        }

    });

}


/* =================================
   12. COMPLETE ORDER
================================= */

// Xác nhận đơn hàng sau khi nhập thông tin
function completeOrder() {

    var form = document.getElementById("checkout-form");

    // Kiểm tra các ô thông tin bắt buộc
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Lấy thông tin khách hàng
    var ten = document.getElementById("customer-name").value;
    var sdt = document.getElementById("customer-phone").value;
    var diaChi = document.getElementById("customer-address").value;

    // Lấy phương thức thanh toán
    var luaChon = document.querySelector('input[name="payment"]:checked');

    var thanhToan = "";

    if (luaChon.value === "bank") {
        thanhToan = "Chuyển khoản ngân hàng";
    } else {
        thanhToan = "Thanh toán khi nhận hàng (COD)";
    }

    // Tính tổng tiền đơn hàng
    var tongTien = 0;

    for (var i = 0; i < tenSanPham.length; i++) {
        tongTien = tongTien + giaSanPham[i] * soLuong[i];
    }

    // Hiển thị thông báo xác nhận
    var thongBao =
        "ĐẶT HÀNG THÀNH CÔNG!\n\n" +
        "Khách hàng: " + ten + "\n" +
        "Số điện thoại: " + sdt + "\n" +
        "Địa chỉ: " + diaChi + "\n" +
        "Thanh toán: " + thanhToan + "\n" +
        "Tổng tiền: " + dinhDangTien(tongTien);

    alert(thongBao);

    // Xóa số lượng sản phẩm sau khi đặt hàng
    for (var i = 0; i < soLuong.length; i++) {
        soLuong[i] = 0;
    }

    // Cập nhật lại giỏ hàng
    hienThiGioHang();

    // Xóa thông tin đã nhập
    form.reset();

    // Ẩn trang thanh toán
    backToShop();

}


/* =================================
   13. BACK TO SHOP
================================= */

// Quay lại cửa hàng từ trang thanh toán
function backToShop() {

    document.getElementById("checkout-page").classList.remove("show");

    document.getElementById("shop-content").style.display = "block";

    document.body.classList.remove("checkout-mode");

    window.scrollTo(0, 0);

}


/* =================================
   14. INITIALIZE
================================= */

// Hiển thị giỏ hàng khi mở website
hienThiGioHang();


