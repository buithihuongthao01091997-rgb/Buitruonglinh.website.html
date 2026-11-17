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
// ================================
// FILE JAVASCRIPT: CHỨC NĂNG LỌC ALBUM
// ================================


// Lấy tất cả nút lọc và các thẻ album trên trang
   const filterButtons = document.querySelectorAll('.filter-btn');
   const albumCards = document.querySelectorAll('.album-card');


   // Gắn sự kiện click cho từng nút lọc
   filterButtons.forEach(function(button) {
     button.addEventListener('click', function() {
       // Lấy loại album cần hiển thị từ thuộc tính data-filter
       const selectedFilter = button.getAttribute('data-filter');


       // Đổi trạng thái nút đang được chọn
       filterButtons.forEach(function(item) {
         item.classList.remove('active');
       });
       button.classList.add('active');


       // Kiểm tra từng album để hiển thị hoặc ẩn
       albumCards.forEach(function(card) {
         const albumType = card.getAttribute('data-type');


         // Nếu chọn ALL hoặc loại album trùng khớp thì hiển thị
         if (selectedFilter === 'all' || selectedFilter === albumType) {
           card.classList.remove('hidden');
         } else {
           card.classList.add('hidden');
         }
       });
     });
   });










