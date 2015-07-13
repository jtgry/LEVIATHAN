//Animations
$(document).ready(function () {
    //Menu
    $(".mobileNavIcon").click(function () {
        $(".mobileNav").fadeToggle(500);
        $(".topNav").toggleClass("top-animate");
        $(".midNav").toggleClass("mid-animate");
        $(".bottomNav").toggleClass("bottom-animate");
    });
    $(".mobileNav").click(function () {
        $(".mobileNav").fadeToggle(500);
        $(".topNav").toggleClass("top-animate");
        $(".midNav").toggleClass("mid-animate");
        $(".bottomNav").toggleClass("bottom-animate");
    });
	  $(".mobileNav a").click(function () {
        $(".mobileNav").fadeToggle(500);
        $(".topNav").toggleClass("top-animate");
        $(".midNav").toggleClass("mid-animate");
        $(".bottomNav").toggleClass("bottom-animate");
    });
    //Smooth Scroll
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
        }, 900, 'swing');
	});
    
});
