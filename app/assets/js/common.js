$(document).ready(function () {
    $('.js--main-bunner').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        vertical: false,
        prevArrow: $('.js--main-bunner__arrow_left'),
        nextArrow: $('.js--main-bunner__arrow_right'),
    });


    $('.js--special-products__list-slide').slick({
        infinite: false,
        dots: true,
        slidesPerRow: 4,
        rows: 2,
        swipe: false,
        vertical: false,
        prevArrow: $('.js--special-products__list-nav-prev'),
        nextArrow: $('.js--special-products__list-nav-next'),
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<div class="special-products__list-nav-numbers-item">'+(i+1)+'</div>';
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
    });

    $('.js--special-products__list-slide_mobile').slick({
        infinite: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: true,
        vertical: false,
        prevArrow: $('.js--special-products__list-nav-prev'),
        nextArrow: $('.js--special-products__list-nav-next'),
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<div class="special-products__list-nav-numbers-item">'+(i+1)+'</div>';
        },
        responsive: [
            {
                breakpoint: 521,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(document).on("scroll", window, function () {
    if ($(window).scrollTop()>900) {
            $(".js--nav-pages__item_up").removeClass("nav-pages__item_hidden");
        } else {
            $(".js--nav-pages__item_up").addClass("nav-pages__item_hidden");
        }
    });

    // Лист категорий в каталоге, выпадашка субкатегорий

    $(document).on('click','.catalog-categories-list__item-name',function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });

    // Закрыть банер с акцией в каталоге

    $(document).on('click','.js--stock-bunner__close',function(){
        $(".js--stock-bunner").removeClass('active');
    });

    // открыть список категорий на мобилке в каталоге

    $(document).on('click','.js--catalog-categories-list__tabulator',function(){
        $(this).toggleClass('active');
    });

    // Слайдеры на продукте

    $('.js--products-page__top-big-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        dots: false,
        fade: true,
        asNavFor: '.js--products-page__bottom-nav-slider'
    });
    $('.js--products-page__bottom-nav-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.js--products-page__top-big-slider',
        dots: false,
        swipe: false,
        centerMode: false,
        prevArrow: $('.js--bottom-nav-slider__arrow_left'),
        nextArrow: $('.js--bottom-nav-slider__arrow_right'),
        focusOnSelect: true
    });
    $('.js--might-like-products__list-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        dots: false,
        prevArrow: $('.js--might-like-slider__arrow_left'),
        nextArrow: $('.js--might-like-slider__arrow_right'),
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 921,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 521,
                settings: {
                    slidesToShow: 1,
                    swipe: true
                }
            }
        ]
    });

    // Слайдер в article

    $('.js--products-from-article__list-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        dots: false,
        prevArrow: $('.js--products-from-article__arrow_left'),
        nextArrow: $('.js--products-from-article__arrow_right'),
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 921,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 521,
                settings: {
                    slidesToShow: 1,
                    swipe: true
                }
            }
        ]
    });

    // MMenu


        let $menu = $("#mobile-burger-menu").mmenu({
            "navbars": [
                {
                    "position": "top",
                    "content": [
                        `<div class="mobile-menu__header">
                        <div class="mobile-menu__header-top">
                            <a href="index.html" class="mobile-menu__header-top-logo">
                                <img src="assets/img/sex-logo.png" alt="">
                            </a>
                            <a class="mobile-menu__header-close js--mobile-menu__header-close" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                            </a>
                        </div>
                        <div class="mobile-menu__header-bottom">
                            <div class="mobile-menu__header-bottom-img-wrapper">
                                <img src="assets/img/avatar.png" alt="">
                            </div>
                            <div class="mobile-menu__header-bottom-text-wrapper">
                                <span>Иван Иванов</span>
                                <a href="profile.html" >Личный кабинет</a>
                            </div>
                            <div class="header-mid__basket">
                                <a href="deferredgoods.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                        <path d="M0,6.52A5.158,5.158,0,0,1,1.541,2.834a5.569,5.569,0,0,1,2.7-1.662A5.244,5.244,0,0,1,9.151,2.377c0.16,0.139.15,0.228,0,.366-0.31.29-.608,0.594-0.9,0.9a0.179,0.179,0,0,1-.309.013A3.525,3.525,0,0,0,3.265,3.6a4.026,4.026,0,0,0-1.38,1.989,3.339,3.339,0,0,0,.881,3.353c1.181,1.2,2.393,2.375,3.593,3.561L10.3,16.4c0.194,0.192.2,0.191,0.394,0q3.7-3.652,7.4-7.3a3.522,3.522,0,0,0,1.151-2.532,3.437,3.437,0,0,0-1.069-2.542,4,4,0,0,0-1.523-1.06,3.511,3.511,0,0,0-3.808.881c-0.728.7-1.446,1.42-2.161,2.137-0.13.13-.216,0.161-0.359,0.011-0.3-.318-0.619-0.622-0.939-0.923-0.122-.115-0.047-0.185.028-0.261,0.409-.413.816-0.827,1.23-1.234A18.789,18.789,0,0,1,12.179,2.1a5.055,5.055,0,0,1,2.656-1.069A5.3,5.3,0,0,1,19.221,2.6a5.338,5.338,0,0,1,1.741,3.3A5.088,5.088,0,0,1,19.744,9.9c-0.191.227-.406,0.435-0.617,0.644q-4.2,4.154-8.408,8.3c-0.21.207-.209,0.206-0.423,0Q8.042,16.621,5.788,14.4q-2.139-2.11-4.275-4.224A5.1,5.1,0,0,1,0,6.52Z"/>
                                    </svg>
                                    <span>3</span>
                                </a>
                                <a href="basket.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19">
                                        <path d="M13.535,12.221H7.9c-0.291,0-.3,0-0.226.281,0.122,0.493.259,0.983,0.37,1.479a0.265,0.265,0,0,0,.314.248q4.192-.009,8.384,0c0.636,0,1.272,0,1.908,0a0.7,0.7,0,1,1,0,1.384H7.685a0.737,0.737,0,0,1-.861-0.669q-1.01-4-2.017-8.005Q4.137,4.277,3.472,1.617a0.27,0.27,0,0,0-.32-0.244c-0.822.01-1.644,0.008-2.466,0A0.683,0.683,0,0,1,0,.769,0.683,0.683,0,0,1,.517.015,0.985,0.985,0,0,1,.75-0.006q1.565,0,3.131,0a0.7,0.7,0,0,1,.783.6c0.157,0.608.32,1.215,0.458,1.827a0.31,0.31,0,0,0,.369.291Q13.338,2.7,21.185,2.7a0.8,0.8,0,0,1,.544.148,0.7,0.7,0,0,1,.231.764q-0.472,1.867-.945,3.735-0.54,2.134-1.082,4.268a0.708,0.708,0,0,1-.781.6H13.535ZM6.894,4.089c-0.372,0-.744.007-1.115,0C5.6,4.081,5.554,4.125,5.6,4.3c0.2,0.757.39,1.517,0.577,2.278a0.215,0.215,0,0,0,.251.191c0.629-.007,1.258-0.01,1.887,0,0.207,0,.242-0.082.219-0.255-0.1-.748-0.2-1.5-0.289-2.244a0.177,0.177,0,0,0-.214-0.189C7.652,4.093,7.273,4.089,6.894,4.089Zm12.144,0c-0.379,0-.758,0-1.136,0a0.172,0.172,0,0,0-.213.19c-0.006.147-.038,0.293-0.057,0.44-0.077.6-.152,1.2-0.233,1.8-0.024.176,0.018,0.257,0.221,0.253,0.629-.011,1.258-0.008,1.887,0a0.214,0.214,0,0,0,.248-0.194c0.189-.767.381-1.534,0.582-2.3,0.044-.167-0.015-0.2-0.163-0.193C19.8,4.093,19.418,4.089,19.039,4.089Zm-6.772,1.35h0c0-.374-0.008-0.748,0-1.121a0.186,0.186,0,0,0-.229-0.232c-0.714.009-1.428,0.011-2.142,0-0.207,0-.241.082-0.218,0.255,0.1,0.754.2,1.508,0.291,2.263a0.167,0.167,0,0,0,.209.169c0.628,0,1.257-.006,1.885,0a0.171,0.171,0,0,0,.2-0.214C12.261,6.186,12.266,5.812,12.266,5.438Zm1.4-.017c0,0.388,0,.775,0,1.163,0,0.115.023,0.188,0.163,0.187,0.657,0,1.314,0,1.971,0a0.132,0.132,0,0,0,.157-0.129q0.146-1.174.3-2.347c0.021-.161-0.047-0.208-0.2-0.207-0.721.006-1.442,0.008-2.163,0a0.187,0.187,0,0,0-.225.236C13.675,4.688,13.669,5.054,13.669,5.421ZM7.674,8.155c-0.293,0-.586.008-0.879,0-0.172-.006-0.208.049-0.166,0.21q0.3,1.137.575,2.279a0.225,0.225,0,0,0,.267.2c0.443-.008.886,0,1.33,0,0.253,0,.275-0.023.245-0.264-0.1-.748-0.2-1.5-0.287-2.244a0.167,0.167,0,0,0-.2-0.174C8.26,8.159,7.967,8.155,7.674,8.155Zm10.59,0c-0.279,0-.557.007-0.836,0-0.162-.006-0.257.027-0.257,0.213a3.334,3.334,0,0,1-.052.419c-0.078.6-.153,1.2-0.233,1.8-0.024.175,0.018,0.259,0.222,0.253,0.457-.013.914-0.008,1.371,0a0.205,0.205,0,0,0,.239-0.18q0.289-1.171.595-2.338c0.04-.152-0.027-0.168-0.148-0.167C18.864,8.157,18.564,8.155,18.264,8.155Zm-6,1.362c0-.374-0.008-0.748,0-1.121a0.194,0.194,0,0,0-.238-0.245c-0.535.012-1.071,0.014-1.607,0-0.218-.006-0.255.082-0.231,0.264,0.1,0.747.2,1.494,0.289,2.242a0.167,0.167,0,0,0,.2.182q0.7-.009,1.392,0a0.162,0.162,0,0,0,.195-0.2C12.262,10.265,12.266,9.891,12.266,9.517Zm1.4-.031c0,0.388,0,.776,0,1.164,0,0.115.021,0.189,0.162,0.188,0.486,0,.971,0,1.457,0a0.132,0.132,0,0,0,.157-0.129q0.146-1.174.3-2.347c0.021-.16-0.044-0.21-0.2-0.208q-0.835.01-1.671,0a0.17,0.17,0,0,0-.2.214C13.674,8.739,13.669,9.113,13.669,9.487ZM8.751,19a1.37,1.37,0,1,1,1.4-1.376A1.359,1.359,0,0,1,8.751,19Zm8.434-2.74a1.37,1.37,0,1,1-1.4,1.369A1.365,1.365,0,0,1,17.185,16.258Z"/>
                                    </svg>
                                    <span>6</span>
                                </a>
                                <span>0,00 &#8381</span>
                            </div>
                        </div>
                    </div>`
                    ]
                }
            ],
            "extensions": [
                "position-front",
                "position-right",
                "fullscreen"
            ],
            "navbar": {
                title: "Меню"
            }
        });
    
        // // close modal button
        // $(document).on('click','.js--mobile-menu__header-close',function(){
        //     $('.mm-menu').removeClass('mm-menu_opened');
        //     $('html').removeClass('mm-wrapper_blocking');
        //     $('html').removeClass('mm-wrapper_opened');
        //     $('html').removeClass('mm-wrapper_background');
        //     $('html').removeClass('mm-wrapper_opening');
        // });
    
    
        let $icon = $(".js--burger-button");
        let API = $menu.data("mmenu");
    
    
    
        $icon.on("click", function () {
    
            API.open();
    
        });
    
    
        API.bind("opened", function () {
    
            setTimeout(function () {
    
                $icon.addClass("is-active");
    
            }, 10);
    
            $icon.on("click", function () {
    
                API.close();
    
            });
    
        });
    
        API.bind("closed", function () {
    
            setTimeout(function () {
    
                $icon.removeClass("is-active");
    
            }, 10);
    
            $icon.on("click", function () {
    
                API.open();
    
            });
    
        });


}); 