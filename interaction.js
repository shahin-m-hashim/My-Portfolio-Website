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