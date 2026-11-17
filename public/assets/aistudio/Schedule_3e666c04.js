document.addEventListener("DOMContentLoaded", function() {

    // =====================================
    // 1. LẤY CÁC PHẦN TỬ HTML
    // =====================================
    const schedulePage = document.getElementById("schedulePage");
    const detailPages = document.querySelectorAll(".detail-page");
    const detailButtons = document.querySelectorAll(".detail-btn");
    const backButtons = document.querySelectorAll(".back-btn");

    // =====================================
    // 2. XỬ LÝ NÚT DETAIL
    // =====================================
    detailButtons.forEach(function(button) {
        button.addEventListener("click", function() {
// Lấy ID trang chi tiết tương ứng với nút được nhấn
            const targetId = button.getAttribute("data-target");


 // Tìm trang chi tiết theo ID
            const selectedPage = document.getElementById(targetId);

// Kiểm tra trang chi tiết có tồn tại không
            if (selectedPage) {
  // Kiểm tra schedulePage có tồn tại trước khi thao tác class
                if (schedulePage) {
                    schedulePage.classList.add("hidden");
                }

                // Ẩn tất cả các trang chi tiết
                detailPages.forEach(function(page) {
                    page.classList.add("hidden");
                });

                // Hiển thị trang chi tiết được chọn
                selectedPage.classList.remove("hidden");

                // Cuộn lên đầu trang
                window.scrollTo(0, 0);
            }
        });
    });

    // =====================================
    // 3. XỬ LÝ NÚT BACK
    // =====================================
    backButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Ẩn tất cả các trang chi tiết
            detailPages.forEach(function(page) {
                page.classList.add("hidden");
            });

            // Hiển thị lại danh sách sự kiện nếu tồn tại
            if (schedulePage) {
                schedulePage.classList.remove("hidden");
            }

            // Cuộn lên đầu trang
            window.scrollTo(0, 0);
        });
    });

    // =====================================
    // 4. XỬ LÝ MENU TRÊN ĐIỆN THOẠI
    // =====================================
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

});



