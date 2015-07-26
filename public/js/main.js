$(document).ready( function() {
	$('#about-lnk').on('click', function() {
		if($('.about').css('display') == 'none') {
			$('.home-main').animate({
				left: "-=250",
				width: "50%"
			}, 500, function() {
				$('.home-main').css({width: '50%', display:'table-cell'});
				$('.about').css({display: 'table-cell', width: '50%', 'padding-right':'10%', opacity: 1});
				$('.about').addClass('animated bounce');
				$('.about').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					$('.about').removeClass('animated bounce');
				});
			});
		}
	});


	$('.close-about').on('click', function() {
		$('.about').addClass('animated slideOutUp');
		$('.about').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.about').css({display: "none", width: '0%'});
			$('.about').removeClass('animated slideOutUp bounce');
			//$('.home-main').css({left: 0, display: 'block', width: '100%'});
			$('.home-main').animate({
				left: "+=250"
			}, 500, function() {
				$('.home-main').css({left: 0, display: 'block', width: '100%'});
			})
		})
		
	});

	$('#home-lnk').on('click', function() {
		var currentDiv = getCurrentDiv();
		if (currentDiv !== 'home')
			transitionr(currentDiv, 'home');
	});

	$('#portfolio-lnk').click( function() {
		var currentDiv = getCurrentDiv();
		if ( currentDiv !== 'portfolio')
			transitionr(currentDiv, 'portfolio');
	});

	$('#cv-lnk').click(function() {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'cv')
			transitionr(currentDiv, 'cv');
	});

	$('#contact-lnk').click(function() {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'contact')
			transitionr(currentDiv, 'contact');
	});


	$('#kitchens-lnk').click( function(e) {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'kitchens')
			transitionr(currentDiv, 'kitchens');
	});

	$('#kitchen-1-lnk').click( function(e) {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'kitchen-1')
			transitionr(currentDiv, 'kitchen-1');
	});

	$('#kitchen-2-lnk').click( function(e) {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'kitchen-2')
			transitionr(currentDiv, 'kitchen-2');
	});

	$('#kitchen-3-lnk').click( function(e) {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'kitchen-3')
			transitionr(currentDiv, 'kitchen-3');
	});

	$('#kitchen-4-lnk').click( function(e) {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'kitchen-4')
			transitionr(currentDiv, 'kitchen-4');
	});

	$('#dom-lnk').click( function(e) {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'dom')
			transitionr(currentDiv, 'dom');
	});

	$('#park-lnk').click( function(e) {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'park')
			transitionr(currentDiv, 'park');
	});

	$('#chair-lnk').click( function(e) {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'chair')
			transitionr(currentDiv, 'chair');
	});

	$('#project-3-lnk').click( function(e) {
		var currentDiv= getCurrentDiv();
		if (currentDiv !== 'project-3')
			transitionr(currentDiv, 'project-3');
	});

	$('#random-lnk').click( function(e) {
		var currentDiv = getCurrentDiv();
		if (currentDiv !== 'random')
			transitionr(currentDiv, 'random');
	});

	$('.portfolio-thumb-block').mouseover( function() {
		$(this).find('.thumb-text').css({display: 'inline'})
	});

	$('.portfolio-thumb-block').mouseout( function() {
		$(this).find('.thumb-text').css({display: 'none'})
	});

	$('.back-to-portfolio-lnk').click( function() {
		goBack(getCurrentDiv(), 'portfolio');
	});

	$('.back-to-kitchens').click( function() {
		goBack(getCurrentDiv(), 'kitchens');
	});

	$('.back-btn').click( function() {
		goBack(getCurrentDiv(), 'home');
	})

	$('.thumb-img-hover').mouseover(function(event) {
		var self = this;
		var file = $(self).attr('src');
		var extension = file.substr( (file.lastIndexOf('.') +1) );
		if (extension === 'jpg') {
			$(self).attr('src', file.slice(0, -4) + '.png');
		} else if (extension === 'png') {
			$(self).attr('src', file.slice(0, -4) + '.jpg');
		}
	});

	$('.thumb-img-hover').mouseout(function(event) {
		var self = this;
		var file = $(self).attr('src');
		var extension = file.substr( (file.lastIndexOf('.') +1) );
		if (extension === 'jpg') {
			$(self).attr('src', file.slice(0, -4) + '.png');
		} else if (extension === 'png') {
			$(self).attr('src', file.slice(0, -4) + '.jpg');
		}
	});

	function getCurrentDiv() {
		var elementId = '';
		$('#main > div').filter( function() {
		    var element = $(this);
			if(element.css('display') !== 'none') {
		       	elementId =  element.attr('id');
		    }
		});
		return elementId;
	}

	function transitionr (from, to) {
		console.log( from + "__transition__" + to);
		console.log('#' + to);
		$('*').removeClass('animated bounceOutLeft bounceOutRight');
		$('#' + from).addClass('animated bounceOutLeft');
		$('#' + from).children().addClass('animated bounceOutLeft');
		$('#' + from).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
			console.log('#' + to + '_____Reached');
			$('#' + from).css({
				display: 'none'
			});
			$('#' + to).css({
				display: 'block'
			});
		});
	};

	function goBack (from, to) {
		console.log( from + "__goback__" + to);
		$('*').removeClass('animated bounceOutRight bounceOutLeft');
		$('#' + from).addClass('animated bounceOutRight');
		$('#' + from).children().addClass('animated bounceOutRight');
		$('#' + from).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
			console.log('#' + to + '_____Reached');
			$('#' + from).css({
				display: 'none'
			});
			$('#' + to).css({
				display: 'block'
			});

		});
	}


	var contactForm = document.querySelector('form'),
    inputName = contactForm.querySelector('[name="name"]'),
    inputEmail = contactForm.querySelector('[name="email"]'),
    textAreaMessage = contactForm.querySelector('[name="message"]'),
    sendButton = contactForm.querySelector('button');

    sendButton.addEventListener('click', function(event){
      event.preventDefault(); // prevent the form to do the post.

      sendButton.innerHTML = 'sending..';

      var xhr = new XMLHttpRequest();
      xhr.open('POST', '//formspree.io/agatapatel@outlook.com', true);
      xhr.setRequestHeader("Accept", "application/json")
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

      xhr.send(
        "name=" + inputName.value +
        "&email=" + inputEmail.value +
        "&message=" + textAreaMessage.value);

      xhr.onloadend = function (res) {
        if (res.target.status === 200){
          sendButton.innerHTML = 'Message sent!';
        }
        else {
          sendButton.innerHTML = 'Error!';
        }
      }
    });

    $(document).on('click','.navbar-collapse.in', function(e) {
	    if( $(e.target).is('a') ) {
	        $(this).collapse('hide');
	    }
	});

	$('#download-cv').click( function() {
		window.location = 'https://www.dropbox.com/s/sxwo7lgk47ocek5/Agata_Patel_CV.pdf?dl=1';
	});
});
