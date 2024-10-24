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
// ============================== accordion js ==============================
function toggleAccordion(activeItem) {
    const contents = document.querySelectorAll('[id^="content-"]');
    const headers = document.querySelectorAll('[id^="header-"]');
    const icons = document.querySelectorAll('[id^="icon-"]');

    contents.forEach((content, index) => {
        const itemNumber = index + 1;

        if (itemNumber === activeItem) {
            content.classList.toggle('hidden');
            const isActive = !content.classList.contains('hidden');
            headers[index].style.color = isActive ? '#2ABAE9' : '';
            icons[index].innerHTML = isActive ?
                `<svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.14583 2.14836C0.92482 2.14836 0.712858 2.06056 0.556578 1.90428C0.400298 1.748 0.3125 1.53604 0.3125 1.31502C0.3125 1.09401 0.400298 0.882048 0.556578 0.725767C0.712858 0.569487 0.92482 0.481689 1.14583 0.481689H11.1458C11.3668 0.481689 11.5788 0.569487 11.7351 0.725767C11.8914 0.882048 11.9792 1.09401 11.9792 1.31502C11.9792 1.53604 11.8914 1.748 11.7351 1.90428C11.5788 2.06056 11.3668 2.14836 11.1458 2.14836H1.14583Z" fill="#2ABAE9"/>
                </svg>
                ` : // minus icon
                `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9805 6.13118H7.98047V1.13118C7.98047 0.910171 7.89267 0.69821 7.73639 0.541929C7.58011 0.385649 7.36815 0.297852 7.14714 0.297852C6.92612 0.297852 6.71416 0.385649 6.55788 0.541929C6.4016 0.69821 6.3138 0.910171 6.3138 1.13118V6.13118H1.3138C1.09279 6.13118 0.880827 6.21898 0.724547 6.37526C0.568266 6.53154 0.480469 6.7435 0.480469 6.96452C0.480469 7.18553 0.568266 7.39749 0.724547 7.55377C0.880827 7.71005 1.09279 7.79785 1.3138 7.79785H6.3138V12.7979C6.3138 13.0189 6.4016 13.2308 6.55788 13.3871C6.71416 13.5434 6.92612 13.6312 7.14714 13.6312C7.36815 13.6312 7.58011 13.5434 7.73639 13.3871C7.89267 13.2308 7.98047 13.0189 7.98047 12.7979V7.79785H12.9805C13.2015 7.79785 13.4134 7.71005 13.5697 7.55377C13.726 7.39749 13.8138 7.18553 13.8138 6.96452C13.8138 6.7435 13.726 6.53154 13.5697 6.37526C13.4134 6.21898 13.2015 6.13118 12.9805 6.13118Z" fill="black"/>
                </svg>`; // plus icon
        } else {
            content.classList.add('hidden');
            headers[index].style.color = '';
            icons[index].innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9805 6.13118H7.98047V1.13118C7.98047 0.910171 7.89267 0.69821 7.73639 0.541929C7.58011 0.385649 7.36815 0.297852 7.14714 0.297852C6.92612 0.297852 6.71416 0.385649 6.55788 0.541929C6.4016 0.69821 6.3138 0.910171 6.3138 1.13118V6.13118H1.3138C1.09279 6.13118 0.880827 6.21898 0.724547 6.37526C0.568266 6.53154 0.480469 6.7435 0.480469 6.96452C0.480469 7.18553 0.568266 7.39749 0.724547 7.55377C0.880827 7.71005 1.09279 7.79785 1.3138 7.79785H6.3138V12.7979C6.3138 13.0189 6.4016 13.2308 6.55788 13.3871C6.71416 13.5434 6.92612 13.6312 7.14714 13.6312C7.36815 13.6312 7.58011 13.5434 7.73639 13.3871C7.89267 13.2308 7.98047 13.0189 7.98047 12.7979V7.79785H12.9805C13.2015 7.79785 13.4134 7.71005 13.5697 7.55377C13.726 7.39749 13.8138 7.18553 13.8138 6.96452C13.8138 6.7435 13.726 6.53154 13.5697 6.37526C13.4134 6.21898 13.2015 6.13118 12.9805 6.13118Z" fill="black"/>
            </svg>`; // plus icon
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const firstItem = 1;
    const firstContent = document.getElementById(`content-${firstItem}`);
    const firstHeader = document.getElementById(`header-${firstItem}`);
    const firstIcon = document.getElementById(`icon-${firstItem}`);

    firstContent.classList.remove('hidden');
    firstHeader.style.color = '#2ABAE9';
    firstIcon.innerHTML = `<svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.14583 2.14836C0.92482 2.14836 0.712858 2.06056 0.556578 1.90428C0.400298 1.748 0.3125 1.53604 0.3125 1.31502C0.3125 1.09401 0.400298 0.882048 0.556578 0.725767C0.712858 0.569487 0.92482 0.481689 1.14583 0.481689H11.1458C11.3668 0.481689 11.5788 0.569487 11.7351 0.725767C11.8914 0.882048 11.9792 1.09401 11.9792 1.31502C11.9792 1.53604 11.8914 1.748 11.7351 1.90428C11.5788 2.06056 11.3668 2.14836 11.1458 2.14836H1.14583Z" fill="#2ABAE9"/>
</svg>
`; // minus icon
});