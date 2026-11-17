(function () {
   /* 1. THAY ĐỔI NỀN MENU KHI CUỘN TRANG */
   var header = document.querySelector(".site-header");
   if (header) {
       var capNhatNenMenu = function () {
           if (window.scrollY > 50) {
               header.classList.add("scrolled");
           } else {
               header.classList.remove("scrolled");
           }
       };
       window.addEventListener("scroll", capNhatNenMenu);
       capNhatNenMenu();
   }
   /* 2. MỞ VÀ ĐÓNG MENU TRÊN ĐIỆN THOẠI */
   var nutMenu = document.getElementById("menuToggle");
   var menu = document.getElementById("nav-menu");


   if (nutMenu && menu) {
       function dongMenu() {
           menu.classList.remove("open");
           nutMenu.setAttribute("aria-expanded", "false");
           nutMenu.textContent = "☰";
       }
       // Khi nhấn nút menu
       nutMenu.addEventListener("click", function () {
           var dangMo = menu.classList.toggle("open");
           nutMenu.setAttribute("aria-expanded", String(dangMo));
           nutMenu.textContent = dangMo ? "×" : "☰";
       });
       // Khi nhấn vào một liên kết, menu sẽ tự đóng
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
})();



