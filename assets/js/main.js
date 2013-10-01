function autorun()
{
	var today = new Date()
		, birthday = new Date("1990/04/09")
		, age = Math.abs(today.getFullYear() - birthday.getFullYear());

	console.log("Thanks for visiting tomgavrilos.com - The portfolio of Tom Gavrilos. I'm a " + age + " year old product designer presently residing in Detroit, MI.");

	//$('footer .year').html(today.getFullYear());

	var mySwiper = new Swiper('.swiper-container',{
		autoplay : 5000,
		loop: true,
		slidesPerView: (window.innerWidth < 768) ? 1 : 2,
		centeredSlides: true,
		grabCursor: true,
		keyboardControl: true,
		//Enable 3D Flow
		tdFlow: {
			rotate: -30,
			stretch: 0,
			depth: 120,
			modifier: 1,
			shadows: true
		}
	});

	$(window).resize(function() {
		if (window.innerWidth < 768) {
			mySwiper.params.slidesPerView = 1;
			$(".swiper-wrapper").css({padding: 0});
		} else {
			mySwiper.params.slidesPerView = 2;
		}
		mySwiper.reInit();
	});

	$(".swiper-container").hammer().on("touch", function(event) {
		mySwiper.stopAutoplay()
		mySwiper.reInit();
	});

}
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;