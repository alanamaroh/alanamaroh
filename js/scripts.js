$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

//===============================================================
$(function () {
    AOS.init();

    //Script ordinaire
    if ($('#gmap').height() != null) {

        var adresse = "1257, rue Guy, 2e étage Montréal, QC H3H 2K5";


        $('#gmap').gmap3({
            center: [45.495011, -73.577460],
            zoom: 18,
            scrollwheel: false,
            draggable: false,
            heading: 90,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
        })
                .marker(function (map) {
                    return {
                        position: map.getCenter(),
                        options: {
                            icon: marker
                        }
                    };
                });

    }

    $("footer #gmap").height($("#main-footer").outerHeight());

    $("#hero .slider").slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $("#hero .slider .slick-slide.slick-active").addClass("animate-slide");

    $("#hero .slider").on('afterChange', function (event, currentSlide) {
        //console.log(currentSlide);
        $("#hero .slider .slick-slide").removeClass("animate-slide");
        $("#hero .slider .slick-slide.slick-active").addClass("animate-slide");
    });

    resizeSlider();

    $(window).resize(function () {
        resizeSlider();
    });

    $("#nouvelles .slider").slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $("#technologies .slider").slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $(".images-film .slider, .art-film .slider").slick({
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $(".personnages .slider, .acteurs .slider").slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //==============================
    //Menu
    $(".btn-menu").click(function () {
        $("body").toggleClass("menu-open");
    });

    //==============================

    $(window).scroll(function () {
        if ($('.to-animate').visible()) {
            $('.to-animate').addClass('animated jackInTheBox');
        }
        AOS.init();
    });

    //==============================
    $(".btn-show-more-team").click(function () {
        $(".team-item:lt(4)").removeClass("team-item");

        if ($(".team-item").length <= 0) {
            $(".btn-show-more-team").hide();
            $(".btn-show-team-picture").show();
        }
    });


});

//================================================
//Launch Fancybox
$(document).ready(function () {

    $(".fancy").fancybox({
        beforeShow: function () {
            $("body").css({'overflow-y': 'hidden'});
        },
        afterClose: function () {
            $("body").css({'overflow-y': 'visible'});
        },
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    $(".various").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none'
    });

    $(".video").click(function () {
        $.fancybox({
            'padding': 0,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'title': this.title,
            'width': 640,
            'height': 385,
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });

        return false;
    });

});

function resizeSlider() {
    $("#hero .slider .slick-slide").height(0);
    $("#hero .slider .slick-slide").height($("#hero").height());
}

//------------------------
//Smooth scroll
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});