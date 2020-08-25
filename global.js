/** Velosity Scroll */
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  /*$('a.scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });*/
  
  $('a.scroll[href*="#"]:not([href="#"])').click(function(e) {
		e.preventDefault();
        e.stopPropagation();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
	 
		$(target).velocity('scroll', {
            duration: 500,
            offset: -40,
            easing: 'ease-in-out'
        });
			//$(target).velocity("scroll", 1000)	
		
        
      }
    }
  });
  
$(".btn-container-velocity").velocity("fadeIn", function(){
	$(".btn-container-velocity .btn").velocity(
		{ translateY: "10px" },
		{ duration: 800, loop: true }
	);
});

  // Closes responsive menu when a scroll trigger link is clicked
   $('.scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  }); 

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#TopNav',
    offset: 54
  });
  
  // add the animation to the modal
$("#myModal2").on('shown.bs.modal', function(e) {
      
      $('#myModal2 .modal-dialog').velocity("slideDown")
     

  });
 
 
 

})(jQuery); // End of use strict
				
//Bootstrap 4 tooltip plugin
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});
	//Bootstrap modal + VelocityJs	
/*$(".modal").on('shown.bs.modal', function(e) {
	var open = $(this).attr('data-easein');
	$('.modal-dialog').velocity('callout.' + open);
});*/

/** AOS */
AOS.init({
    duration: 1200
});

/** ToTop */
var btn = $("#button");

$(window).scroll(function() {
    $(window).scrollTop() > 300 ? btn.addClass("show") : btn.removeClass("show");
}), btn.on("click", function(a) {
    a.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, "300");
}), 
});