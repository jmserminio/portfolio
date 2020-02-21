$(function() {
	AOS.init();
  
	$('.nav_menu_btn').click(function () {
		
		$(this).animate({
			right: -100
		});
		
		$('.wrap_inner, footer').addClass('content_blur');
		
		$('nav').animate({
			right: 0
		});

		$('body').css('overflow', 'hidden');
	});
	
	$('a[href^="#"], .wrap_inner').click(function (e) {
		$('.wrap_inner, footer').removeClass('content_blur');

		$boxWidth = $('nav').width() + 50;

		$('nav').animate({
			right: -$boxWidth
		});
		
		$('.nav_menu_btn').animate({
			right: 0
		});
		
		$('body').css('overflow', 'auto');

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		e.preventDefault();
	});

	$('.project_list').hover(function(){
		$(this).children('.project_cap').css('bottom', '0');
	},function(){
		$('.project_cap').css('bottom', '-150px');
	});
});