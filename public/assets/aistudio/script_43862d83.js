

/* 1. THAY ĐỔI NỀN MENU KHI CUỘN TRANG */
var header = document.getElementById("header");
if (header) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.className = "site-header scrolled";
        } else {
            header.className = "site-header";
        }
    });
}
/* 2. MỞ VÀ ĐÓNG MENU TRÊN ĐIỆN THOẠI */




var nutMenu = document.getElementById("menuToggle");
var menu = document.getElementById("nav-menu");
if (nutMenu && menu) {




    // Khi nhấn nút menu
    nutMenu.addEventListener("click", function() {
        if (menu.className == "main-nav open") {
            menu.className = "main-nav";
        } else {
            menu.className = "main-nav open";
        }
    });
    // Khi nhấn vào một liên kết, menu sẽ tự đóng
    var cacLienKet = menu.getElementsByTagName("a");




    for (var i = 0; i < cacLienKet.length; i++) {




        cacLienKet[i].addEventListener("click", function() {
            menu.className = "main-nav";
        });
    }
    // Đóng menu khi chuyển sang màn hình máy tính
    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            menu.className = "main-nav";
        }
    });




}
/* 3. SLIDER LATEST NEWS */




var track = document.getElementById("slider-track");
var dots = document.getElementsByClassName("dot");




if (track && dots.length > 0) {




    var slides = track.getElementsByClassName("slide");
    var tongSlide = slides.length;




    if (dots.length < tongSlide) {
        tongSlide = dots.length;
    }
    var viTri = 0;
    var tuChay = null;
    // Hiển thị slide theo vị trí được chọn
    function hienSlide(viTriMoi) {
        if (viTriMoi >= tongSlide) {
            viTriMoi = 0;
        }




        if (viTriMoi < 0) {
            viTriMoi = tongSlide - 1;
        }
        viTri = viTriMoi;
        // Thay đổi vị trí của Slider
        track.style.transform =
            "translateX(-" + (viTri * 100) + "%)";




        // Cập nhật trạng thái của các nút chuyển slide
        for (var i = 0; i < tongSlide; i++) {
            if (i == viTri) {
                dots[i].className = "dot active";
            } else {
                dots[i].className = "dot";
            }
        }
    }
    // Chuyển sang slide tiếp theo
    function slideKeTiep() {
        hienSlide(viTri + 1);
    }
    // Bắt đầu tự động chuyển slide
    function batDauTuDong() {




        if (tuChay != null) {
            clearInterval(tuChay);
        }




        if (tongSlide > 1) {
            tuChay = setInterval(slideKeTiep, 4000);
        }




    }




    // Cho phép người dùng chọn slide bằng các nút tròn
    for (var i = 0; i < tongSlide; i++) {




        dots[i].addEventListener("click", function() {




            var viTriChon = parseInt(this.getAttribute("data-index"));




            hienSlide(viTriChon);
            batDauTuDong();




        });
    }
    // Hiển thị slide đầu tiên khi mở trang
    hienSlide(0);




    // Bắt đầu chế độ tự động
    batDauTuDong();




}




