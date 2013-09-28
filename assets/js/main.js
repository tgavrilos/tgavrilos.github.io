function autorun()
{
	var today = new Date()
		, birthday = new Date("1990/04/09")
		, age = Math.abs(today.getFullYear() - birthday.getFullYear());

	console.log("Thanks for visiting tomgavrilos.com - The portfolio of Tom Gavrilos. I'm a " + age + " year old product designer presently residing in Detroit, MI.");

	var mySwiper = new Swiper('.swiper-container',{
		slidesPerView: 1,
		centeredSlides: true,
		autoplay : 3000,
		loop: true,
		keyboardControl: true,
		//Enable 3D Flow
		tdFlow: {
			rotate: -30,
			stretch: 0,
			depth: 120,
			modifier: 1,
			shadows: false
		}
	})

}
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;