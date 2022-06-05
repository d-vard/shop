jQuery(document).ready(function($) {
    $('.intro').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.bestsellers__box').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        nextArrow: '<button class="slick-arrow slick-next"><img src="img/next.svg" alt=""></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="img/prev.svg" alt=""></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            },
        ]
    });
    $('.reviews__box').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
            }
        }]
    
});
$('.partners__box').slick({
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    nextArrow: '<button class="slick-arrow slick-next"><img src="img/next.svg" alt=""></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="img/prev.svg" alt=""></button>',
    responsive: [{
        breakpoint: 1199,
        settings: {
            arrows: false,
        }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        
    }]
});
$('.news__box').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    nextArrow: '<button class="slick-arrow slick-next"><img src="img/next.svg" alt=""></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="img/prev.svg" alt=""></button>',
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        }
    ]
});

$(window).scroll(function(e) {
    let headerHeight = $('.header').height();
    if ($(this).scrollTop() >= headerHeight) {
        $('.header').addClass('active');

    } else {
        $('.header').removeClass('active');
    }

});

$('.burger__btn').click(function(event) {
    $('.menu__list').addClass('active');
});
$('.close__btn').click(function(event) {
    $('.menu__list').removeClass('active');
});

$('.faq__arrow, .faq__title').click(function(event) {
    $(this).closest('.faq_block').find('.faq__arrow').toggle();
    $(this).closest('.faq_block').find('.faq__desc').slideToggle();
});

jQuery(function($) {
$('[type="tel"]').mask("+9 999 999-9999");
});

// $('.features__box').slick({
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,

// });

// $('[data-color]').click(function() {
//     let datanum = $(this).data('color');
//     $('[data-color]').removeClass('active');
//     $(this).toggleClass('active');
//     $('button[data-color="' + datanum + '"]').toggleClass('active');

// });
// $('[data-par]').click(function(e) {
//     e.preventDefault();
//     let btnact = $(this).data('par');
//     console.log(btnact);
//     $(this).closest('.questions__item').toggleClass('active');
//     $(this).closest('.questions__item').find('.questions__item__desc').slideToggle();
//     $('button[data-btn="' + btnact + '"] .btn__plus').toggle();
//     $('button[data-btn="' + btnact + '"] .btn__minus').toggle();

// })
});