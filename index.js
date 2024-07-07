const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function allAnimation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";

    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    });

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}
function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function hambergure() {
    var flag = 0;
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = "11%";
            navimg.style.opacity = 0;
            flag = 1;
        }
        else {
            full.style.top = "-100%";
            navimg.style.opacity = 1;
            flag = 0;
        }
    })
}

function load() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";

    }, 4000);
}
allAnimation();
sliderAnimation();
hambergure()
load();