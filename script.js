$(document).ready( function () {
    $('.nav-button').on('click', function (e) {
        e.stopPropagation();
        $('.mobile-menu').show();
    });

    $('.mobile-menu__close').on('click', function(e) {
        e.stopPropagation();
        $('.mobile-menu').hide();
    });

    var pages = ['portfolio', 'projects', 'cv', 'contact'];
    var pathname = window.location.pathname;
    var currentPage = window.location.pathname.replace(/\//g, '');

    setBackgrounds();
    setSelectedPage();

    function setBackgrounds() {
        if (!currentPage) {
            $('html').addClass('page__home');
        } else {
            $('html').addClass('page__' + currentPage);
        }
    }
    function setSelectedPage() {
        if (!currentPage) {
            return;
        }

        $('#' + currentPage + '-link').addClass('selected');
    }

    $('.main-section').waypoint(function(direction) {
        var size = direction == 'down' ? 'small' : 'large';
        $('nav').attr('class', 'header-' + size);
    });

    $('footer').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').removeClass('header-show');
            $('nav').addClass('header-hide');
        } else {
            $('nav').removeClass('header-hide');
            $('nav').addClass('header-show');
        }
    }, { offset: '60%' });

    $('#portfolio-row-5__first-image').waypoint(function(direction) {
        $(this.element).addClass('fadeInLeft');
    }, { offset: '100%' });

    $('#img-12').waypoint(function(direction) {
        $(this.element).addClass('fadeInRight');
    }, { offset: '100%' });
    
});


