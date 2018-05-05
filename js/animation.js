$(document).ready(function() {
    if ($(window).width() < 960) {
        // menu animation
        $('a.open_menu').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            TweenMax.fromTo('header', 0.3, {
                opacity: 0,
                display: 'none',
                ease: Linear.easeOut
            }, {
                opacity: 1,
                display: 'block',
                ease: Linear.easeOut
            });
        });
        $('header a.close_menu').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            TweenMax.fromTo('header', 0.3, {
                opacity: 1,
                display: 'block',
                ease: Linear.easeIn
            }, {
                opacity: 0,
                display: 'none',
                ease: Linear.easeIn
            });
        });
    }
    if ($(window).width() > 960) {

        // menu animation
        $('.menu_icon a.open_menu').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            TweenMax.fromTo('header', 0.5, {
                scale: 0,
                display: 'none',
                ease: Linear.easeOut
            }, {
                scale: 1,
                display: 'block',
                ease: Linear.easeOut
            });
        });
        $('header a.close_menu').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            TweenMax.fromTo('header', 0.5, {
                scale: 1,
                display: 'block',
                ease: Linear.easeIn
            }, {
                scale: 0,
                display: 'none',
                ease: Linear.easeIn
            });
        });

        // scroll animations
        // init controller
        var scrollmagic = new ScrollMagic.Controller({
            // addIndicators: true,
            globalSceneOptions: {
                //triggerHook: 'onEnter'
            }
        });

        var s1 = new ScrollMagic.Scene({
            // starting scene, when reaching this element
            triggerElement: ".home",
            duration: $(".home").outerHeight(),
            reverse: true,
        });
        var s2 = new ScrollMagic.Scene({
            // starting scene, when reaching this element
            triggerElement: ".panel2",
            duration: $(".panel2").outerHeight(),
            reverse: true,
        });
        var s3 = new ScrollMagic.Scene({
            // starting scene, when reaching this element
            triggerElement: ".panel3",
            duration: $(".panel3").outerHeight(),
            reverse: true,
        });
        var s4 = new ScrollMagic.Scene({
            // starting scene, when reaching this element
            triggerElement: ".panel4",
            duration: $(".panel4").outerHeight(),
            reverse: true,
        });

        // home page /*
        s1.on("enter", function(event) {
            var t1 = new TimelineMax();
            console.log("Scene home entered.");
            t1.to(".home", 1, {
                opacity: "1",
                ease: Back.easeOut
            }).from('.home .art_img', 1, {
                opacity: 0,
                y: 100,
                ease: Back.easeOut
            }).from('.home .art_content', 1, {
                opacity: 0,
                y: 50,
                ease: Back.easeOut
            });
        });
        s2.on("enter", function(event) {
            var t1 = new TimelineMax();
            console.log("Scene panel2 entered.");
            t1.to(".panel2", 1, {
                opacity: "1",
                ease: Linear.easeNone
            }).from('.panel2 .art_img', 1, {
                opacity: 0,
                y: 100,
                ease: Back.easeOut
            }).from('.panel2 .art_content', 1, {
                opacity: 0,
                y: 50,
                ease: Back.easeOut
            });
        });
        s3.on("enter", function(event) {
            var t1 = new TimelineMax();
            console.log("Scene panel3 entered.");
            t1.to(".panel3", 1, {
                opacity: "1",
                ease: Linear.easeNone
            }).from('.panel3 .art_img', 1, {
                opacity: 0,
                y: 100,
                ease: Back.easeOut
            }).from('.panel3 .art_content', 1, {
                opacity: 0,
                y: 50,
                ease: Back.easeOut
            });
        });
        s4.on("enter", function(event) {
            var t1 = new TimelineMax();
            console.log("Scene panel4 entered.");
            t1.to(".panel4", 1, {
                opacity: "1",
                ease: Linear.easeNone
            }).from('.panel4 .art_img', 1, {
                opacity: 0,
                y: 100,
                ease: Back.easeOut
            }).from('.panel4 .art_content', 1, {
                opacity: 0,
                y: 50,
                ease: Back.easeOut
            });
        });

        // on window load function 
        $(window).load(function() {
            // to hide all the elements
            TweenMax.set('.home, .panel2, .panel3, .panel4', {
                css: {
                    opacity: 0,
                }
            });

            // adding the scenes after some delay 
            setTimeout(function() {
                // Add Scene to ScrollMagic Controller
                scrollmagic.addScene([
                    s1, s2, s3, s4
                ]);
            }, 100);
        });
    }
});