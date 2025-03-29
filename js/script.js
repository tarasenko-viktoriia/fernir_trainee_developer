"use strict"
document.addEventListener("DOMContentLoaded", function () {
    slidersInit();
});
document.addEventListener("click", function(e){
	const targetElement = e.target
	if(targetElement.closest(".icon-menu")) {
		document.documentElement.classList.toggle("open-menu")
		e.preventDefault()
	}
})


document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.items-slider__list', {
        loop: false,
        spaceBetween: 16, 
        navigation: {
            prevEl: '.slider-controls__arrow--left',
            nextEl: '.slider-controls__arrow--right',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,

            },
            768: {
                slidesPerView: 1.3, 
            },
            992: {
                slidesPerView: 2,
            }
        }
    });
});