$(document).ready(function() {
	// Accordian JS
	$(".accordion-heading").click(function(){
		if ($(".accordion-body").is(":visible")) {
			$(".accordion-body").slideUp(700);
			$(".accordion-heading").removeClass("active");
		}
    if( $(this).next(".accordion-body").is(":visible")){
        $(this).next(".accordion-body").slideUp(700);
        $(".accordion-heading").removeClass("active");
    }	else {
        $(this).next(".accordion-body").slideDown(700); 
       	$(this).addClass("active");
    }
	});
});