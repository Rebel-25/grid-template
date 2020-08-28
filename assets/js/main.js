$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});


$(document).ready(function(){
	$('.nav-icon').click(function(){
		const drawer = document.getElementsByClassName('header-navbar__list');
		$(drawer).toggleClass(function() {
			if ($(this).is('.open-drawer')) {
			  return "close-drawer";
			} else {
			  return "open-drawer";
			}
		  });

	});
});