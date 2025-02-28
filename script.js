$(document).ready(function () {
    // Smooth scrolling
    $('a.nav-link, a[href="#contact"]').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 70,
                },
                800
            );
        }
    });

    // Initialize Wow.js for animations
    new WOW().init();

    // Initialize Vanta.js Birds Animation with brighter colors
    VANTA.BIRDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color1: 0x4a8fe3, // Bright blue
        color2: 0x63a4ff, // Light blue
        colorMode: "variance",
        birdSize: 1.50,
        wingSpan: 30.00,
        speedLimit: 5.00,
        separation: 50.00,
        alignment: 50.00,
        cohesion: 30.00,
        quantity: 3.00,
        backgroundAlpha: 0.10
    });

    // Add active class to navbar items on scroll
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        
        $('section').each(function() {
            let target = $(this).offset().top - 100;
            let id = $(this).attr('id');
            
            if (position >= target) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                $('.navbar-nav .nav-item .nav-link[href="#' + id + '"]').addClass('active');
            }
        });
        
        // Add shadow to navbar when scrolled
        if (position > 60) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    // Collapse navbar on mobile when link is clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // Add some additional animation for the cards and items
    $('.experience-item, .education-item, .skill-category, .card').hover(
        function() {
            $(this).addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).removeClass('animate__animated animate__pulse');
        }
    );
    
    // Add active class to current section in navbar
    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});