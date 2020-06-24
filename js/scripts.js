/*!
    * Start Bootstrap - Agency v6.0.1 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
             $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);
})(jQuery);

// End of use strict


$(function () {


    /* =========================================
        COUNTDOWN 1
     ========================================= */
    $('#clock').countdown('2021/1/10').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 font-weight-bold">%D</span> Day%!d'
        + '<span class="h1 font-weight-bold">%H</span> Hr'
        + '<span class="h1 font-weight-bold">%M</span> Min'
        + '<span class="h1 font-weight-bold">%S</span> Sec'));
    });

    /* =========================================
        COUNTDOWN 2
     ========================================= */
    $('#clock-a').countdown('2021/1/10').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 font-weight-bold">%w</span> week%!w'
        + '<span class="h1 font-weight-bold">%D</span> Days'));
    });

    /* =========================================
        COUNTDOWN 3
     ========================================= */
    $('#clock-b').countdown('2020/6/28').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="holder m-1"><span class="h2 font-weight-bold">%D</span> Day%!d</div>'
        + '<div class="holder m-1"><span class="h2 font-weight-bold">%H</span> Hr</div>'
        + '<div class="holder m-1"><span class="h2 font-weight-bold">%M</span> Min</div>'
        + '<div class="holder m-1"><span class="h2 font-weight-bold">%S</span> Sec</div>'));
    });


    /* =========================================
        COUNTDOWN 4
     ========================================= */
    function get15dayFromNow() {
        return new Date(new Date().valueOf() + 7 * 24 * 60 * 60 * 1000);
    }

    $('#clock-c').countdown(get15dayFromNow(), function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 font-weight-bold">%D</span> Day%!d'
        + '<span class="h1 font-weight-bold">%H</span> Hr'
        + '<span class="h1 font-weight-bold">%M</span> Min'
        + '<span class="h1 font-weight-bold">%S</span> Sec'));
    });

    /* =========================================
        CALL TO ACTIONS FOR COUNTDOWN 4
     ========================================= */
    $('#btn-reset').click(function() {
        $('#clock-c').countdown(get15dayFromNow());
    });
   /* $('#btn-pause').click(function() {
        $('#clock-c').countdown('pause');
    });
    $('#btn-resume').click(function() {
        $('#clock-c').countdown('resume');
    });
*/
});

$('.alert').alert()