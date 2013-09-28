function autorun()
{
	var today = new Date()
		, birthday = new Date("1990/04/09")
		, age = Math.abs(today.getFullYear() - birthday.getFullYear());

	$("li")
		.bind({
			"reposition": function() {
				var degrees = $(this).data("roundabout").degrees
					, roundaboutBearing = $(this).parent().data("roundabout").bearing
					, rotateY = Math.round(roundaboutBearing - degrees);
				
				$(this).css({
					"-webkit-transform": "perspective(2000) rotateY(" + rotateY + "deg)",
					"-moz-transform": "perspective(2000) rotateY(" + rotateY + "deg)",
					"transform": "perspective(2000) rotateY(" + rotateY + "deg)"
				});
			}
		})
	
	$("ul").roundabout({
		autoplay: true,
		minScale: 0.7,
		easing: "easeOut",
		duration: 1600
	});

/*
	$(document).keydown(function(event) {
		if (event.which === 37) { // left
			$("ul").roundabout("animateToPreviousChild", 1600, "easeOut");
		} else if (event.which === 39) { // right
			$("ul").roundabout("animateToNextChild", 1600, "easeOut");
		}
		event.preventDefault();
	});
*/

	console.log("Thanks for visiting tomgavrilos.com - The portfolio of Tom Gavrilos. I'm a " + age + " year old product designer presently residing in Detroit, MI.");
}
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;