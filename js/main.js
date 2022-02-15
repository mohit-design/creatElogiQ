$(document).ready(function() {
	// Hamburger Menu JS
	$(".hamburger-menu").click(function() {
		$(".navbar-menu-listing").slideToggle("active");
	});
	$(window).resize(function() {
		if($(window).width() > 991) {
			$(".navbar-menu-listing").css("display","flex");
		} else {
			$(".navbar-menu-listing").css("display","none");
		}
	});
	// Scroll To Top On Click JS
  var offset = 250;
  var duration = 500;
  $(window).scroll(function() {
    if($(this).scrollTop() > offset) {
      $(".scroll-to-top").addClass("visible");
    } else {
      $(".scroll-to-top").removeClass("visible");
    }
  });
  $(".scroll-to-top").click(function() {
    $('html,body').animate({scrollTop: 0},1500);
  });
});