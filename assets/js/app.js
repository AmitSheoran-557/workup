const menuicon = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const menubarThird = document.querySelector(".menubarThird");
const body = document.body;

menuicon.addEventListener("click", function () {
    menuList.classList.toggle("-right-full");
    menuList.classList.toggle("right-0");
    menubarFirst.classList.toggle("rotate-[40deg]");
    menubarSecond.classList.toggle("hidden");
    menubarThird.classList.toggle("-rotate-[40deg]");
    body.classList.toggle("overflow-lg-hidden")
})
// ======================================================
$('.features-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: ".next",
    prevArrow: ".prev",
    responsive: [
        {
            breakpoint: 1224,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
               
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,

            }
        },
    ]
});
