
$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();

	});

	$(".exit").click(function(){

		$(this).toggleClass('active');
		$(".page-nav").fadeToggle();
	});

	// end hamburger menu

});
