$(function (params) {
	var header = $('header'),
		introH = $('#intro').innerHeight();
	scrollOffset = 0;

	// Fixed Header
	$(window).on('scroll', function name(params) {
		scrollOffset = $(this).scrollTop();

		if (scrollOffset >= introH) {
			header.addClass('header--fixed');
		} else {
			header.removeClass('header--fixed');
		}
	});

	// Smooth scroll

	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;

		$('#nav a').removeClass('active');
		$this.addClass('active');

		$('html, body').animate(
			{
				scrollTop: blockOffset,
			},
			500,
		);
	});

	// Nav toggle

	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();

		$(this).toggleClass('active');
		$('#nav').toggleClass('active');
	});

	// Modal

	$('#sites').on('click', function (event) {
		event.preventDefault();
		$('.sites').toggleClass('menu__active');
	});

	$('.menu__list-close').on('click', function (event) {
		event.preventDefault();
		$('.sites').removeClass('menu__active');
	});

});
