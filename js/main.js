$(window).load( function() {

 /*--------------------------------------------------
    PRELOADER
---------------------------------------------------*/
        var loader = $(".loader");
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        var o = 0;

        loader.css({
            top: wHeight / 2 - 2.5,
            left: wWidth / 2 - 200
        })

        do {
            loader.animate({
                width: o
            }, 10)
            o += 3;
        } while (o <= 400)
        if (o === 402) {
            loader.animate({
                left: 0,
                width: '100%'
            })
            loader.animate({
                top: '0',
                height: '100vh'
            })
        }

        setTimeout(function() {
            $(".loader-wrapper").fadeOut('fast');
            (loader).fadeOut('fast');
        }, 500);  // 3500


    }); // window load end

$(document).ready( function() {


// AJAX LOAD
function ajaxLoad() {
    typed();
    twitter();
    sslider();
    headermenu();
    carousel();
    magnific();
    portfolio_filter();
}

ajaxLoad();

   // AJAX LOAD
   $("main").on('click','[data-type="ajax-load"]', function(e) {
    $(".page-overlay").addClass("from-bottom");
    var href = $(this).attr("href");

    loadHtml();
    function loadHtml() {
        setTimeout(function() {
            loadContent(href);
            history.pushState('', 'new URL: '+href, href);
        },1000);
    }
    e.preventDefault();
    });

    function loadContent(url) {
        var getData = $.get(url, function(response) {
            var markup = $("<main>" + response + "</main>");
            var fragment = markup.find("main").html();
            var title = markup.find("title").html();
            $('head title').html( title );

            $("main").html(fragment);
            ajaxLoad();
            window.scrollTo(0, 0);
            $(".page-overlay").addClass("from-bottom");
            setTimeout( function(){
              $(".page-overlay").addClass("from-bottom-end");
              setTimeout( function(){
                $(".page-overlay").removeClass("from-bottom");
                $(".page-overlay").removeClass("from-bottom-end");
              } , 800 );
            } , 500 );

        });
    }

 /*--------------------------------------------------
    TYPED HOME
---------------------------------------------------*/
function typed() {
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2')],
                loop: $(this).data('loop') ? $(this).data('loop') : false ,
                backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,
                typeSpeed: 10,
            });
        });
    }
}



 /*--------------------------------------------------
    TWITTER JS
---------------------------------------------------*/
function twitter() {
    if ($('.tweet').length) {
        $('.tweet').twittie({
            username: 'envato'
            , list: null
            , dateFormat: '%B %d, %Y'
            , template: '{{tweet}} <br/> <span class="date">{{date}}</span>'
            , count: 10

        }, function () {
            setInterval(function() {
                var item = $('.tweet ul').find('li:first');

                item.animate( {marginLeft: '-300px', 'opacity': '0'}, 500, function() {
                    $(this).detach().appendTo('.tweet ul').removeAttr('style');
                });
            }, 7000);
        });
    }
}


 /*--------------------------------------------------
    SLIDES JS
---------------------------------------------------*/
function sslider(){
if ($('#slides').length) {
    //SUPER SLİDER
        $('#slides').superslides({
        animation: 'fade',
        play: 3000
        });
    }
}


/*--------------------------------------------------
    HEADER MENU
---------------------------------------------------*/

function headermenu() {
    // Navbar Show When Scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var homeheight = $(".hero").height() -128;

        if (scroll > homeheight ) {
            $("header.fixing").slideDown(100);
            } else {
            $("header.fixing").slideUp(100);
            }
         });

         //SMOOTH SCROLL
         if ($('.hero').length) {
            $(document).on("scroll", onScroll);
            $('nav ul li a, .down-icon').on('click', function (e) {
                e.preventDefault();
                $(document).off("scroll");

                $('a').each(function () {
                    $(this).removeClass('active');
                     if ($(window).width() < 768) {
                         $('header').removeClass('open');
                     }
                });

                $(this).addClass('active');

                var target = this.hash,
                menu = target;
                target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': target.offset().top

                }, 500, 'swing', function () {
                    window.location.hash = target.selector;
                    $(document).on("scroll", onScroll);
                });
            });
        }

        function onScroll(event){
          if ($('#hero').length) {
            var scrollPos = $(document).scrollTop();
            $('nav ul li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('nav ul li a').removeClass("activelink");
                    currLink.addClass("activelink");
                }
            });
           }
        }

        // // Menu animation
         $('.nav-icon').on("click", function(){
          $('header').toggleClass('open');
        });

        //  if ( $(window).width() <= 769 ) {
        //     $('.nav-icon').on("click", function(){
        //         $('header nav').slideToggle();
        //     });
        // }
}




 /*--------------------------------------------------
    OWL CAROUSEL JS
---------------------------------------------------*/
function carousel() {
    var owlcar = $('.owl-carousel');
    if (owlcar.length) {
        owlcar.each(function () {
            var $owl = $(this);
            var itemsData = $owl.data('items');
            var autoplayData = $owl.data('autoplay');
            var autoPlayTimeoutData = $owl.data('autoplaytimeout');
            var dotsData = $owl.data('dots');
            var navData = $owl.data('nav');
            var marginData = $owl.data('margin');
            var stagePaddingData = $owl.data('stagepadding');
            var itemsDesktopData = $owl.data('items-desktop');
            var itemsTabletData = $owl.data('items-tablet');
            var itemsTabletSmallData = $owl.data('items-tablet-small');
            $owl.owlCarousel({
                  items: itemsData
                , dots: dotsData
                , nav: navData
                , margin: marginData
                , loop: true
                , stagePadding: stagePaddingData
                , autoplay: autoplayData
                , autoplayTimeout: autoPlayTimeoutData
                , navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]
                , responsive:{
                        0:{
                            items:itemsTabletSmallData,
                            stagePadding:0
                        },
                        600:{
                            items:itemsTabletData,
                            stagePadding:0
                        },
                        1000:{
                            items:itemsDesktopData
                        }
                    }
            , });
        });
    }
}



// MAGNIFIC POPUP FOR PORTFOLIO PAGE

function magnific()  {
    if ($('.lightbox-icon, .lightbox .image').length) {
      $('.lightbox-icon, .lightbox .image').magnificPopup({
            type:'image',
            gallery:{enabled:true},
            zoom:{enabled: true, duration: 300}
        });
      }

     // LIGHTBOX VIDEO
    $('.video-icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}




/*--------------------------------------------------
    PORTFOLIO FILTER JS
---------------------------------------------------*/

function portfolio_filter() {
    var $container = $('.masonry');
    $container.imagesLoaded( function() {
        $container.isotope({
          itemSelector: '.grid-item, .lightbox-gallery .msnry',
          gutter:0,
          transitionDuration: "0.5s",
          columnWidth: '.grid-item'
        });
    })
        $('.portfolio_filter ul li a').on("click", function(){
          $(".portfolio_filter ul li a").removeClass("select-cat");
          $(this).addClass("select-cat");
          var selector = $(this).attr('data-filter');
          $(".masonry").isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false,
        }
      });
          return false;
      });

      $(".filter-icon").on("click", function() {
              $('.portfolio_filter').addClass('show');
      });

      $(".portfolio_filter").on("click", function (event) {
      if (!$(event.target).is(".portfolio_filter ul li a")) {
              $('.portfolio_filter').removeClass('show');
              return false;
          }
      });

      // Infinite Scroll
      var curPage = 1;
      var pagesNum = $("#pagination-selector").find("li a:last").text();   // Number of pages

      $container.infinitescroll({
          itemSelector: '.grid-item',
          nextSelector: '.portfolio-pagination li a',
          navSelector: '#pagination-selector',
          extraScrollPx: 0,
          bufferPx: 0,
          maxPage: 6,
          loading: {
              finishedMsg: "No more works",
              msgText: '<div class="loader"><span></span></div>',
              speed: 'slow',
              selector: '.load-more',
          },
      },
      // trigger Masonry as a callback
      function( newElements ) {

            var $newElems = $( newElements );
            $newElems.imagesLoaded(function(){  // Append masonry
              $newElems.animate({ opacity: 1 });
              $container.isotope( 'appended', $newElems, true );
            });
            // Check last page
            curPage++;
            if(curPage == pagesNum) {
              $( '.load-more button' ).remove();
            }
            $('.load-more').find('button').css('visibility', 'visible');
          });

          $container.infinitescroll( 'unbind' );
          // jQuery
      $container.on( 'append.infinitescroll', function( event, response, path, items ) {
        console.log( 'Loaded: ' + path );
      });


          $( '.load-more button' ).on('click', function() {
            setTimeout(function()
             {
              magnific();
              },1000);
            $container.infinitescroll( 'retrieve' );
            $('.load-more').find('button').css('visibility', 'hidden');
            return false;
          });

      $(window).bind("pageshow", function(event) {
          if (event.originalEvent.persisted) {
              window.location.reload();
          }
      });
}










}); // document read end



