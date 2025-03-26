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

function slidersInit() {
	const sliderListFiveItems = new Swiper('.items-slider__list', {
		slidesPerGroup: 2,
		slidesPerView: 2,
		//spaceBetween: 30,
		// loop: true,
		// Navigation arrows
		navigation: {
			prevEl: '.slider-controls__arrow--left',
			nextEl: '.slider-controls__arrow--right',
		},
	
		// breakpoints: {
		// 	// when window width is >= 480px
		// 	320: {
		// 		slidesPerView: 1.8,
		// 		spaceBetween: 20
		// 	},
		// 	// when window width is >= 600px
		// 	600: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 20
		// 	},
		// 	// when window width is >= 800px
		// 	850: {
		// 		slidesPerGroup: 1,
		// 		slidesPerView: 4,
		// 		spaceBetween: 20
		// 	},
		// 	992: {
		// 		slidesPerGroup: 4,
		// 		slidesPerView: 4,
		// 		spaceBetween: 20
		// 	},
		// 	// when window width is >= 1200px
		// 	1200: {
		// 		slidesPerGroup: 5,
		// 		slidesPerView: 5,
		// 		spaceBetween: 30
		// 	}
		// }
	});
}