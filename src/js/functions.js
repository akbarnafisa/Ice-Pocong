
$( document ).ready(function() {
	$('body').css({'overflow' : 'hidden'});
	 setTimeout(function(){
	 	window.onbeforeunload = function(){
	 		window.scrollTo(0,0);
	 	}
	 	setInterval(function(){
	 		$('body').css({'overflow' : 'visible'});
	 	},2000)
 		$('body').addClass('loaded');
 		var $bodywrapper 	= $('.bodywrapper');
 		var $nav2		 	= $bodywrapper.find('.nav2');
 		var $navBurger   	= $nav2.find('.nav-burger');
 		var $black2		 	= $bodywrapper.find('.black2');
 		var $navigation	 	= $bodywrapper.find('.navigation');
 		var $navWrapper  	= $navigation.find('.nav-wrapper');
 		var $home		 	= $bodywrapper.find('#main-home');
 		var $headerWrapper 	= $home.find('.header-wrapper')
 		var $navTrigger 	= $home.find('.nav-trigger')
 		var $header 		= $headerWrapper.find('.header')
 		var $navSlide 		= $navigation.find('.nav-slide');
 		var $about		 	= $bodywrapper.find('#main-about');
 		var $gallery		= $bodywrapper.find('#main-gallery');
 		var $myCarousel		= $bodywrapper.find('#myCarousel');
 		var $findus			= $bodywrapper.find('#main-findus');
 		var $landingText	= $home.find('.landing-text')
 		setInterval(function(){
 			$landingText.children().addClass('text-reveal');
 			$navigation.children().each(function(i){
 				setTimeout(function(){
 					$navigation.children().eq(i).addClass('nav-reveal');
 						} , 300 * (i+1));
 				});
 		},1000)
 		$('.option').children().on('click',function(){
 			$('.option').find('.optionMenu.active').removeClass('active')
 			$(this).addClass('active')
 			if($(this).attr('id') == 'option-2'){
 				$('.flex').addClass('grid')
 			}
 			else{
 				$('.flex').removeClass('grid')
 			}
 		});
 		$navBurger.on('click',function(){
 			$('body').toggleClass('slide')
 			$black2	.toggleClass('black')

 			$black2	.on('click',function(){
 				$black2	.removeClass('black')
 				$('body').removeClass('slide')
 			});
 		});

 		$navWrapper.children().on('click',function(){
 			$('body').toggleClass('slide')
 			$black2	.removeClass('black')
 		});
		  $(window).scroll(function(){
		  	var wScroll = $(this).scrollTop();

  	      if (wScroll > $navTrigger.offset().top) {
  		      $headerWrapper.addClass('fixed ');
  		      $navigation.addClass('nav-black');
  		    
  		     }

  		     if (wScroll < $navTrigger.offset().top) {
  		       		      $headerWrapper.removeClass('fixed ');
  		       		      $navigation.removeClass('nav-black');
  		       		    
       		     }
		  		
		  	if(window.innerWidth > 1024){
		  		$header.css({
		  			'transform' : 'translate(0px , -'+ wScroll /1140 +'%)'
		  			});
		  	}	
		  

		  		if(wScroll >= $home.offset().top - 80 && wScroll < ($home.offset().top + $home.height()  - 80 )){
		  			$navSlide.addClass('nav-active');
		  		}
		  		else{
		  			$navSlide.removeClass('nav-active');
		  		}

		  		if(wScroll >= $about.offset().top - 80  && wScroll < $gallery.offset().top - 80 ){
		  			$navSlide.addClass('nav-active2');
		  		}
		  		else{
		  			$navSlide.removeClass('nav-active2');
		  		}

		  		if(wScroll >= $gallery.offset().top - 80  && wScroll < $findus.offset().top - 80){
		  			$navSlide.addClass('nav-active3');
		  			
		  		}
		  		else{
		  			$navSlide.removeClass('nav-active3');
		  			
		  		}

		  		
		  		if(wScroll >= $findus.offset().top - 80 ){
		  			$navSlide.addClass('nav-active4');
		  			$('.footer').addClass('footer-reveal');
		  		}
		  		else{
		  			$navSlide.removeClass('nav-active4');
		  			$('.footer').removeClass('footer-reveal');
		  		}

		  		if(wScroll > $('#slide1').offset().top / 3){
		  			$('#slide1').children().each(function(i){
		  				setTimeout(function(){
		  					$('#slide1').children().eq(i).addClass('show');
		  						} , 300 * (i+1));
		  				});
		  		}

		  		if(wScroll > $('#slide2').offset().top / 2){
		  			$('#slide2').children().each(function(i){
		  				setTimeout(function(){
		  					$('#slide2').children().eq(i).addClass('show');
		  						} , 300 * (i+1));
		  				});
		  			$('#slide2').addClass('show');
		  		}

		  		if(wScroll > $('.slide3').offset().top / 1.5){
  					$('.slide3').addClass('show');
  				}

		  		if(wScroll > $('.slide4').offset().top / 1.2){
  					$('.slide4').addClass('show');

  				}

  				if(wScroll > $findus.offset().top / 1.2){
  					$findus.children().each(function(i){
  						setTimeout(function(){
  							$findus.children().eq(i).addClass('show');
  								} , 300 * (i+1));
  						});
  				}
		  	});
		  
			$(function(){
				smoothScroll(750);
			});
			function smoothScroll (duration) {
			 	$('a[href^=#main]').on('click', function(event) {
			 	    var target = $( $(this).attr('href') );
			 	    if( target.length ) {
			         event.preventDefault();
			 	        $('html, body').animate({
			 	            scrollTop: target.offset().top + 1
			 	        }, duration);
			 	    }
			 	});
			 }

	 },5000);

});