window.onload =function()
{
 console.log(`The Page Has Loaded Successfully${"\n"}Welcome To My Portfolio`);
}


//  website-tagline-txt
    var typed1 = new Typed('#slog-txt1', {
        strings: ['Websites, Images And Videos'],
        typeSpeed: 100,
        backSpeed: 100,
        showCursor: false,
        loop: false
    });

    var typed2 = new Typed('#slog-txt2', {
        strings: ['That Just Feels RIGHT'],
        typeSpeed: 150,
        backSpeed: 110,
        loop: true
    });

//section 2 about 
    ScrollReveal().reveal('.scroll-reveal', {
        delay:100,
        reset:true,
        duration: 550,
        origin: 'top',
        easing: 'ease',
        distance:'150px',
            rotate: {
            x: 180,
            y: -90,
            z: 180
        }
    });

//section 2 character
    ScrollReveal().reveal('.scroll-reveal-character-heading', {
        delay:100,
        reset:true,
        duration: 400,
        origin: 'top',
        easing: 'ease',
        distance:'150px',
    });

    ScrollOut({
    targets:'.pb-scroll-out h1,.pb-scroll-out h2,.pb-scroll-out h3'
    });


// section 3 skills progress bar animation on scroll
    function radial_animate() { 
    $('svg.radial-progress').each(function( index, value ) { 

        $(this).find($('circle.bar--animated')).removeAttr( 'style' );    
        // Get element in View port
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        
        if(elementBottom > viewportTop && elementTop < viewportBottom) {
            var percent = $(value).data('countervalue');
            var radius = $(this).find($('circle.bar--animated')).attr('r');
            var circumference = 2 * Math.PI * radius;
            var strokeDashOffset = circumference - ((percent * circumference) / 100);
            $(this).find($('circle.bar--animated')).animate({'stroke-dashoffset': strokeDashOffset}, 2800);
        }
    });
    }

    // Progress text
    var $window = $(window);
    function check_if_in_view() {    
    $('.countervalue').each(function(){
        if ($(this).hasClass('start')){
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).removeClass('start');
                $('.countervalue').text();
                var myNumbers = $(this).text();
                if (myNumbers == Math.floor(myNumbers)) {
                    $(this).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2800,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now)  + '%');                                
                        }
                    });
                } else {
                    $(this).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2800,
                        easing: 'swing',
                        step: function(now) {                                
                            $(this).text(now.toFixed(2)  + '$'); 
                        }
                    });
                }
                radial_animate();
            }
        }
    });
    }
    $window.on('scroll', check_if_in_view);

