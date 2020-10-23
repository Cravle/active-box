$(function() {
	/*Fixed Header*/
	let header = $("#header");
	let intro = $("#intro");
	let scrollPos = $(window).scrollTop();
	let introH = intro.innerHeight();

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function(){
		introH = intro.innerHeight();

		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);

		
	});

	function checkScroll(scrollPos, introH) {
		if( scrollPos >= introH) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");
		}
	}

	/*Smooth scroll*/

	let nav = $("#nav");
	let navToggle = $("#nav-toggle");

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		nav.removeClass("show");


		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});


	/*Nav Toggle*/


	navToggle.on("click", function(event){
		event.preventDefault();
		nav.toggleClass("show");

	});

	/* Reviews https://kenwheeler.github.io/slick/ */

	let slider = $("#reviewsSlider");
	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});

	

});