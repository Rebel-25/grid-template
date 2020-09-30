$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.header-navbar__list').toggleClass('open');
		$('.header-navbar__list').fadeToggle (500);


	});
});
