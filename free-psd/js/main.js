$(function() {
	$('.slider_inner, .news_slider_inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});
	$('select').styler();
	$('.header_btn_menu').on('click', function(){
		$('.menu ul').slideToggle();
	})
});
