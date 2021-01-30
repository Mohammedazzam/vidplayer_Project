// Adding Classes To The Links
let myLis = document.querySelectorAll('#navbar li');
myLis.forEach( li => {
    li.addEventListener('click', function () {
        myLis.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
    
});


// Trigger nice Scroll

// Scroll to top button
let scrollBtn = document.getElementById('scrolly')
window.onscroll = function () {
    'use strict';
    if (window.pageYOffset > 800) {
        scrollBtn.classList.add("showBtn");
    } else {
        scrollBtn.classList.remove("showBtn");
    }
};

scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

// using jQuery
$(function () {
    "use strict";
    $('.navbar li a').on('click', function (e) {
        if(!$(this).hasClass('nonprevent')){
            e.preventDefault();
        }
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scrolling')).offset().top
        }, 1200);
    });
    $('nav .navbar-toggler').on('click', function () {
        $('#chcolor').toggleClass('chcolor');
        $('header .carousel-inner').toggleClass('mr');
        $('.carousel .carousel-indicators').toggleClass('view');
    });
});

// Using Media Query

function mediaFunction(z){
    if (z.matches){
        $("body").niceScroll({
            cursorcolor: '#00bfe7',
            cursorborder: 'none',
            cursorwidth:"6px"
        });
        // Trigger Wow Js
        new WOW().init();
    }
}
let z = window.matchMedia("(min-width:1200px)");
mediaFunction(z);
z.addListener(mediaFunction);

