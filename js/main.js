(function ($) {
    "use strict";


    const testimonialCarousel = () => {
        $('.testimonial-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
            responsiveClass: true,
            responsive: {
                768: {
                    items: 2,
                }
            }
        });
    };

    const landingCarousel = () => {
        $('.carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                768: {
                    items: 3,
                }
            }
        });
    };

    // for scrolling
    const sectionScroller = () => {
        let animateTime = 2500;
        $("a[href^='#']").click(function (e) {
            e.preventDefault();
            let position = $($(this).attr("href")).offset().top;
            $("body, html").animate({
                scrollTop: position
            }, animateTime);
        });
    };


    //back to top
    const backToTop = () => {
        $(window).scroll(function () {
            if ($(this).scrollTop()) {
                $('.to-top').fadeIn(500);
            } else {
                $('.to-top').fadeOut(500);
            }
        });
    }


    /* Initialize
* ------------------------------------------------------ */
    (function ssInit() {
        sectionScroller();
        landingCarousel();
        testimonialCarousel();
        backToTop();
    })();
})(jQuery);