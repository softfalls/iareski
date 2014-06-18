jQuery(function($){

 var BRUSHED = window.BRUSHED || {};

/* ==================================================
   Mobile Navigation
================================================== */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

/* AJUSTA O SITE CONFORME O TAMANHO DA JANELA*/
BRUSHED.mobileNav = function(){
	var windowWidth = $(window).width();
	
	if( windowWidth <= 979 ) {
		if( $('#mobile-nav').length > 0 ) {
			mobileMenuClone.insertAfter('#menu');
			$('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
		}
                /*$('#cab object').hide();
                $('#cab img').show();*/
                $('#sofrildo').hide();
                
	} else {
                /*$('#cab object').show();
                $('#cab img').hide();*/
                $('#sofrildo').show();
		$('#navigation-mobile').css('display', 'none');
		if ($('#mobile-nav').hasClass('open')) {
			$('#mobile-nav').removeClass('open');	
		}
	}
        console.log('BRUSHED.mobileNav');
};

BRUSHED.listenerMenu = function(){
	$('#mobile-nav').on('click', function(e){
		$(this).toggleClass('open');
		
		if ($('#mobile-nav').hasClass('open')) {
			$('#navigation-mobile').slideDown(500, 'easeOutExpo');
		} else {
			$('#navigation-mobile').slideUp(500, 'easeOutExpo');
		}
		e.preventDefault();
	});
	
	$('#menu-nav-mobile a').on('click', function(){
		$('#mobile-nav').removeClass('open');
		$('#navigation-mobile').slideUp(350, 'easeOutExpo');
	});
        
        console.log('BRUSHED.listenerMenu');
};


/* ==================================================
   Slider Options
================================================== */

BRUSHED.slider = function(){
	$.supersized({
		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay		:   1,			// Slideshow starts playing automatically
		start_slide             :   1,			// Start slide (0 is random)
		stop_loop		:   0,			// Pauses slideshow on last slide
		random			:   0,			// Randomize slide order (Ignores start slide)
		slide_interval          :   12000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed	:   300,		// Speed of transition
		new_window		:   1,			// Image links open in new window/tab
		pause_hover             :   1,			// Pause slideshow on hover
		keyboard_nav            :   1,			// Keyboard navigation on/off
		performance		:   1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect		:   1,			// Disables image dragging and right click with Javascript
												   
		// Size & Position						   
		min_width		:   0,			// Min width allowed (in pixels)
		min_height		:   0,			// Min height allowed (in pixels)
		vertical_center         :   1,			// Vertically center background
		horizontal_center       :   1,			// Horizontally center background
		fit_always		:   0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	:   1,			// Portrait images will not exceed browser height
		fit_landscape		:   0,			// Landscape images will not exceed browser width
												   
		// Components							
		slide_links		:   'blank',            // Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links		:   1,			// Individual thumb links for each slide: default-0
		thumbnail_navigation    :   1,			// Thumbnail navigation: default-0
                slides 			:                       // Slideshow Images
                    [			
                        {image : '_include/img/slider-images/image01.jpg', title : '<div class="slide-content"></div>', thumb : '', url : ''},
                        {image : '_include/img/slider-images/image02.jpg', title : '<div class="slide-content"></div>', thumb : '', url : ''},
                        {image : '_include/img/slider-images/image03.jpg', title : '<div class="slide-content">Iareski</div>', thumb : '', url : ''},
                        {image : '_include/img/slider-images/image04.jpg', title : '<div class="slide-content">Iareski</div>', thumb : '', url : ''}  
                    ],
									
		// Theme Options			   
		progress_bar		:   0,			// Timer for each slide							
		mouse_scrub		:   0		
	});

};


/* ==================================================
   Navigation Fix
================================================== */

BRUSHED.nav = function(){
	$('.sticky-nav').waypoint('sticky');
        console.log('BRUSHED.nav');
};


BRUSHED.callBackFilter = function(){
    console.log('globalInit = ' + index.globalInit ); 
    index.globalInit == 0 ?  $("#menu-descricao").click() : '' ;
};

/* ==================================================
   Filter Works
================================================== */

BRUSHED.filter = function (){
	if($('#projects').length > 0){		
		var $container = $('#projects');
		
		$container.imagesLoaded(function() {
			$container.isotope({
                          filter: '.inicio',
			  // options
			  animationEngine: 'best-available',
			  itemSelector : '.item-thumbs',
			  layoutMode : 'fitRows'/*,
                          complete: BRUSHED.callBackFilter()*/
			});
		});
	
		
		// filter items when filter link is clicked
		var $optionSets = $('#options .option-set');
                var $optionLinks = $optionSets.find('a');
	
		  $optionLinks.click(function(){
			var $this = $(this);
			// don't proceed if already selected
			if ( $this.hasClass('selected') ) {
			  return false;
			}
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
	  
			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[ key ] = value;
			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			  // changes in layout modes need extra logic                          
			  changeLayoutMode( $this, options )
			} else {                            
			  // otherwise, apply new options
			  $container.isotope( options );
			}
			
                        /*if($(this).attr('id')=='filtro-inicio'){ 
                            index.globalInit = 1;                                                        
                        }*/
                        
			return false;
		});
	}
        console.log('BRUSHED.filter');
};


/* ==================================================
   FancyBox
================================================== */

BRUSHED.fancyBox = function(){
	if($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0){
		
		/*$(".fancybox").fancybox({				
				padding : 0,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' }
				},
                                minWidth: 300,
                                maxHeight: 337
                                /*type: 'iframe', // Maison add
                                autoSize : false, // Maison add
                                beforeLoad : function() { // Maison add   
                                    this.width  = 500;  
                                    this.height  = 500;  
                                    //this.width  = parseInt(this.element.data('fancybox-width'));  
                                    //this.height = parseInt(this.element.data('fancybox-height'));
                                }*/
			/*});
			
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});*/
	}
        console.log('BRUSHED.fancybox');
};

$.fn.exists = function () { return this.length !== 0; }  //FUNCAO RETORNA TRUE SE EXISTE

/* ==================================================
   Contact Form
================================================== */
BRUSHED.contactForm = function(){
	$(".submit").click(function() {
            var nome = 'NOME CLIENTE: ' + $(this).parents('form').find('#contact_name').val() + '<br/>';
            var email_cliente = 'EMAIL CLIENTE: ' + $(this).parents('form').find('#contact_email').val() + '<br/>';
            var mensagem = 'MENSAGEM CLIENTE: ' +$(this).parents('form').find('#contact_message').val() + '<br/>';
            var $codigo_ref = $(this).parents('form').find('#contact_codigo');
            var codigo_ref = $codigo_ref.exists() === true ? $codigo_ref.val() +'<br/>' : '';
            var $response = $(this).parents('form').find('#response');
            
            
            
            $response.empty().html('<p>Enviando informacoes aguarde...</p>');
            $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
              'key': 'GOoB031qdGCLNJBgrXb3kw',
              'message': {
                'from_email': 'maison.sakamoto@gmail.com',
                'to': [                    
                    { 'email': 'iareski@hotmail.com','name': 'IARESKI','type': 'to' }/*,
                    { 'email': 'maison.sakamoto@gmail.com', 'name': 'MAISON','type': 'to' }*/
                  ],
                'autotext': 'true',
                'subject': 'EMAIL AUTOMATICO DO SITE', // ASSUNTO
                'html': nome+email_cliente+codigo_ref+mensagem //MENSAGEM
              }
            }
           }).done(function(response) {
                console.log(response); // if you're into that sorta thing
                $response.empty().html('<p>Enviado com sucesso, Obrigado!</p>');
                $('#contact-form .campo').val('');
                $('#contact-form textarea').val('');
           });
            /*$contact_form = $('#contact-form');		
		var fields = $contact_form.serialize();		
		$.ajax({
			type: "POST",
			url: "_include/php/contact.php",
			data: fields,
			dataType: 'json',
			success: function(response) {
				
				if(response.status){
					$('#contact-form .campo').val('');
					$('#contact-form textarea').val('');
				}
				
				$('#response').empty().html(response.html);
			}
		});*/
		return false;
	});
        
        console.log('BRUSHED.contactForm');
};


/* ==================================================
   Twitter Feed
================================================== */

BRUSHED.tweetFeed = function(){
	
	var valueTop = -64; // Margin Top Value
	
    $("#ticker").tweet({
          modpath: '_include/js/twitter/',
          username: "Bluxart", // Change this with YOUR ID
          page: 1,
          avatar_size: 0,
          count: 10,
		  template: "{text}{time}",
		  filter: function(t){ return ! /^@\w+/.test(t.tweet_raw_text); },
          loading_text: "loading ..."
	}).bind("loaded", function() {
	  var ul = $(this).find(".tweet_list");
	  var ticker = function() {
		setTimeout(function() {
			ul.find('li:first').animate( {marginTop: valueTop + 'px'}, 500, 'linear', function() {
				$(this).detach().appendTo(ul).removeAttr('style');
			});	
		  ticker();
		}, 5000);
	  };
	  ticker();
	});
	console.log('BRUSHED.tweetFeed');
};

/* ==================================================
   Menu Highlight
================================================== */

BRUSHED.menu = function(){
	$('#menu-nav, #menu-nav-mobile').onePageNav({
		currentClass: 'current',
    	changeHash: false,
    	scrollSpeed: 750,
    	scrollOffset: 30,
    	scrollThreshold: 0.5,
		easing: 'easeOutExpo',
		filter: ':not(.external)'
	});
        console.log('BRUSHED.menu');
};

/* ==================================================
   Next Section
================================================== */

BRUSHED.goSection = function(){
	//$('#nextsection').on('click', function(){
        $('#menu-descricao').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
        console.log('BRUSHED.goSection');
};

/* ==================================================
   GoUp
================================================== */

BRUSHED.goUp = function(){
	$('#goUp').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
        console.log('BRUSHED.goUp');
};


/* ==================================================
	Scroll to Top
================================================== */

BRUSHED.scrollToTop = function(){
	var windowWidth = $(window).width(),
		didScroll = false;

	var $arrow = $('#back-to-top');

	$arrow.click(function(e) {
		$('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
		e.preventDefault();
	});

	$(window).scroll(function() {
		didScroll = true;
	});

	setInterval(function() {
		if( didScroll ) {
			didScroll = false;

			if( $(window).scrollTop() > 1000 ) {
				$arrow.css('display', 'block');
			} else {
				$arrow.css('display', 'none');
			}
		}
	}, 250);
        console.log('BRUSHED.scrollTop');
};

/* ==================================================
   Thumbs / Social Effects
================================================== */

BRUSHED.utils = function(){
	
	$('.item-thumbs').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	$('.image-wrap').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
	
	$('#social ul li').bind('touchstart', function(){
		$(".active").removeClass("active");
      	$(this).addClass('active');
    });
    console.log('BRUSHED.utils');
	
};

/* ==================================================
   Accordion
================================================== */

BRUSHED.accordion = function(){
	var accordion_trigger = $('.accordion-heading.accordionize');
	
	accordion_trigger.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	accordion_trigger.find('.active').addClass('inactive');          
		  	accordion_trigger.find('.active').removeClass('active');   
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		event.preventDefault();
	});
        console.log('BRUSHED.accordion');
};

/* ==================================================
   Toggle
================================================== */

BRUSHED.toggle = function(){
	var accordion_trigger_toggle = $('.accordion-heading.togglize');
	
	accordion_trigger_toggle.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		event.preventDefault();
	});
        console.log('BRUSHED.toggle');
};

/* ==================================================
   Tooltip
================================================== */

BRUSHED.toolTip = function(){ 
    $('a[data-toggle=tooltip]').tooltip();
    console.log('BRUSHED.toolTip');
};

/* ==================================================
	Init
================================================== */

// BRUSHED.slider(); // home-slider aqui

$(document).ready(function(){
	Modernizr.load([
	{
		test: Modernizr.placeholder,
		nope: '_include/js/placeholder.js', 
		complete : function() {
				/*if (!Modernizr.placeholder) {
						Placeholders.init({
						live: true,
						hideOnFocus: false,
						className: "yourClass",
						textColor: "#999"
						});    
				}*/
		}
	}
	]);
	
	// Preload the page with jPreLoader
	
	
        index.carregarFotos();
	BRUSHED.nav();
	BRUSHED.mobileNav();
	BRUSHED.listenerMenu();
	BRUSHED.menu();
	BRUSHED.goSection();
	BRUSHED.goUp();
	BRUSHED.filter();
	BRUSHED.fancyBox();
	BRUSHED.contactForm();
	BRUSHED.tweetFeed();
	BRUSHED.scrollToTop();
	BRUSHED.utils();
	BRUSHED.accordion();
	BRUSHED.toggle();
	BRUSHED.toolTip();
        index.start();
          
        $('body').jpreLoader({ //Segura no "carregando" enquando carrega as imagens do site
		splashID: "#jSplash",
		showSplash: true,
		showPercentage: true,
		autoClose: true,
		splashFunction: function() {
			$('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
		}
	},function(){
            console.log('filtro click apos preloader');
            $("#menu-descricao").click();
            //$('#filtro-inicio').click(); // INICIA COM 12 IMOVEIS NA PAGINA INICIAL                        
            //setTimeout(function(){ $("#menu-descricao").click(); },600);            
        });
        
        
});

$(window).resize(function(){
	BRUSHED.mobileNav();
});

});
