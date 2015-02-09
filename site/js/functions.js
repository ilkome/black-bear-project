/*
	proscom.ru
	Simple Communication
*/

$(document).ready(function(){


	//	#preventDefault
	// ===============================================
	$('a[href="#"]').click(function(e){
		e.preventDefault();
	});


	/*//	#slider
	// ===============================================
	if ( $.isFunction($.fn.lightSlider) ){
		$(".js-slider-reviews").lightSlider({
			item: 1,
			loop: true,
			auto: false,
			pause: 4000,
			pager: false,
			cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
			swipeThreshold: 100,
		});
		$('.js-slider-inform').lightSlider({
			gallery:true,
			item:1,
			thumbItem:3,
			thumbMargin:1,
			slideMargin:0,
			pagerWidthMin:1,
		});
	}


	//	#menu-drop
	// ===============================================
	$(".js-menu-drop-item").hover(
		function(){
			$(this).find(".menu-drop").stop().fadeIn();
		}, function(){
			$(this).find(".menu-drop").stop().fadeOut();
		}
	);


	// #hidden-text
	// ===============================================
	$(".js-hidden-link").on("click", function(e){
		e.preventDefault();

		var thisis = $(this);
		var box = $(this).closest(".js-hidden-box");
		var content = box.find(".js-hidden-content");

		if(content.is(":visible")){
			box.removeClass("is-active");
			content.stop().slideUp();
		} else {
			box.addClass("is-active");
			content.stop().slideDown();
		}
	});

*/
	// #search
	// ===============================================
	$(function(){
		$(".js-search-form-action").on("click", function(e){
			e.preventDefault();
			var thisis = $(this),
				box = thisis.closest(".js-search"),
				formBox = box.find(".search-form"),
				openBtn = box.find(".open"),
				closeBtn = box.find(".close");
			
			formBox.find(".input").focus();
			
			if((formBox.hasClass("show"))){
				thisis.fadeOut();
				formBox.removeClass("show");
				openBtn.stop().fadeIn();
			} else {
				formBox.addClass("show");
				thisis.fadeOut();
				closeBtn.stop().fadeIn();
			}
		});
	});


	//	#ratingbox
	// ===============================================
	$('.js-ratingbox').raty({
		target     : '.ratingbox__count',
		targetType : 'score',
		targetKeep : true,
		starType   : 'div', 
		number     : '10', 
		score      : '1',
	});


	//	make infobox full height
	// ===============================================
	$(function(){
		function infoboxFullHeight(){
			var maxHeight = "0",
				infobox = $(".js-infobox");
			
			infobox.height("auto");
			infobox.each(function(){
				thisHeight = $(this).height();
				if(thisHeight > maxHeight){
					maxHeight = thisHeight;
				}
			});
			infobox.height(maxHeight);
		};

		infoboxFullHeight();

		//	change height on resize using timer
		var timer;
		$(window).on("resize", function(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				infoboxFullHeight();
			}, 500);
		});
	});


	//	show btn in infobox on hover 
	// ===============================================
	$(function(){
		var infobox = $(".js-showhover-box"),
			textBox = infobox.find(".desc");
		infobox.hover( 
			function(){
				$(this).find(".text").stop().fadeOut(200);
				$(this).find(".hover").stop().fadeIn(500);
			},
			function(){
				$(this).find(".text").stop().fadeIn(500);
				$(this).find(".hover").stop().fadeOut(200);
			}
		);
	});


	// #ripplelink
	// ===============================================
	$(function(){
		var ink, d, x, y;
		$(".ripplelink").click(function(e){
			if($(this).find(".ripplelink-ink").length === 0){
				$(this).prepend("<span class='ripplelink-ink'></span>");
			}

			ink = $(this).find(".ripplelink-ink");
			ink.removeClass("ripplelink-animate");

			if(!ink.height() && !ink.width()){
				d = Math.max($(this).outerWidth(), $(this).outerHeight());
				ink.css({height: d, width: d});
			}

			x = e.pageX - $(this).offset().left - ink.width()/2;
			y = e.pageY - $(this).offset().top - ink.height()/2;

			ink.css({top: y+'px', left: x+'px'}).addClass("ripplelink-animate");
		});
	});
});