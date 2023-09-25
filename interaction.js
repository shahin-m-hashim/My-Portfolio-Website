    window.onload =function()
    {
    console.log(`The Page Has Loaded Successfully${"\n"}Welcome To My Portfolio`);
    }

    //header
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

    // section 1 intro description
    let words = document.querySelectorAll(".word");
    words.forEach((word)=>{
        let letters = word.textContent.split(""); word.textContent="";
        letters.forEach((letter)=>{
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length -1;
    words[currentWordIndex].style.opacity = "1";

    let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            },i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            },340 + i * 80);
        });
        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    changeText();
    setInterval(changeText,5000);


    //section 2 about 
    ScrollReveal().reveal('.scroll-reveal', {
        delay:10,
        reset:true,
        duration: 500,
        origin: 'top',
        easing: 'ease-in-out',
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


    //section 2 interests
    ScrollOut({
    targets:'.pb-scroll-out h1,.pb-scroll-out h2,.pb-scroll-out h3'
    });


    //section 3 skills progress bar animation on scroll
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


    //Project Slideshow Container in Section 3

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }