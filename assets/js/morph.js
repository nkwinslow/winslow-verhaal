'use strict';
$(document).ready(function(){

  //vanillabox
	if( $('a.image').length > 0 ) {
		$('a.image').vanillabox();
	}

	if( $('a.vimeo').length > 0 ){
		$('a.vimeo').vanillabox({
			type: 'iframe'
		});
	}

	if( $('a.youtube').length > 0 ){
		$('a.youtube').vanillabox({
			type: 'iframe'
		});
	}

	if( $('a.website').length > 0 ){
		$('a.website').vanillabox({
			type: 'iframe'
		});
	}


	// smooth scroll
	$('html').smoothScroll();

});


// parallax
$('.parallax').parallax("50%", -0.50);
$('.parallax2').parallax("50%", -0.50);


// sticky nav
$(".js_fixedcontent").fixedcontent({
	 marginTop: 0
 });


// matchHeight
$(function() {
  $('.match-height').matchHeight();
});


// filterable work
(function($){
	$(window).load(function(){

		var $container = $('.isotope-container');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$('.creations-filter a').on('click', function(){
			$('.creations-filter .current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});

			return false;
		});

	});
})(jQuery);


// collapse expanded bootstrap nav
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});
