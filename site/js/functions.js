/*
	proscom.ru
	Simple Communication

	ilko.me
	Ilya Komichev

	Description:
		auto - function available always
		plugin - jQuery plugin
		function - need load function
*/

$(document).ready(function(){

	//	#preventDefault
	//	auto
	// ===============================================
	$("a[href='#']").click(function(e){
		e.preventDefault();
	});


	//	comment write
	//	auto
	$(function(){
		$(".js-comment-write").on("click", function(e){
			var thisis = $(this),
				commentBox = thisis.find(".files"),
				textarea = thisis.find("textarea"),
				metaBox = thisis.find(".textarea-desc__more");

			metaBox.fadeIn();
			textarea.addClass("is-active").focus();
			commentBox.slideDown();
		});
	});

	//	hide show text
	//	auto
	// ===============================================
	$(".js-showhide-link").on("click", function(e){
		e.preventDefault();
		
		var thisis = $(this),
			box = $(this).closest(".js-showhide-box"),
			content = box.find(".js-showhide-content"),
			link = box.find(".js-showhide-link");

		if(content.is(":visible")){
			box.removeClass("is-active");
			content.stop().slideUp(400, upperbarFixed);
			link.removeClass("open");
		} else {
			box.addClass("is-active");
			content.stop().slideDown(400, upperbarFixed);
			link.addClass("open");
		}
	});


	//	faq ask
	//	auto  
	// ===============================================
	$(function(){
		$(".js-fadein-link").on("click", function(e){
			e.preventDefault();
			var box = $(".js-fadein-box"),
				upperbar = $(".js-upperbar"),
				boxIn = box.find(".faq-ask-in");

			if(box.is(":hidden")){
				if(upperbar.hasClass("is-fixed")) {
					boxIn.addClass("is-fixed");	
				}
				box.stop().fadeIn();
			} else {
				box.stop().fadeOut();
				boxIn.removeClass("is-fixed");
			}
		});
	});


	//	search
	//	auto
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


	//	ratingbox
	//	plugin
	// ===============================================
	$('.js-ratingbox').raty({
		target     : '.ratingbox__count',
		targetType : 'score',
		targetKeep : true,
		starType   : 'div', 
		number     : '10', 
		score      : '1',
	});
	$('.js-ratingbox-view').raty({
		starType   : 'div',
		number     : '10',
		readOnly   : true,
		score: function() {
			return $(this).attr('data-score');
		},
	});


	//	bxslider
	//	plugin
	// ===============================================
	$(function(){
		var sliderBooty = $('.js-booty-slider').bxSlider({
			mode: 'horizontal',
			speed: 800,
			useCSS: 1,
			easing: "ease-in-out",
			adaptiveHeight: 0,
			infiniteLoop: false,
			pager: 1,
			controls: 0,
			pagerSelector: ".js-booty-slider-pager",
			onSlideBefore: function(sld, oldIndex, newIndex) {
				var slideCounts = sliderBooty.getSlideCount();
				if(slideCounts == (newIndex+1)) {
					$(".js-booty-slider-nav .next").addClass("is-disable");
				} else {
					$(".js-booty-slider-nav .next").removeClass("is-disable");
				}
				if((newIndex+1) == 1) {
					$(".js-booty-slider-nav .prev").addClass("is-disable");
				} else {
					$(".js-booty-slider-nav .prev").removeClass("is-disable");
				}
			},
		});
		$(".js-booty-slider-nav .prev").on("click", function(e) {
			sliderBooty.goToPrevSlide();
		});
		$(".js-booty-slider-nav .next").on("click", function(e) {sliderBooty.goToNextSlide();
		});

		var sliderStatistics = $('.js-statics-slider').bxSlider({
			mode: 'horizontal',
			speed: 800,
			useCSS: 1,
			easing: "ease-in-out",
			adaptiveHeight: 0,
			infiniteLoop: false,
			pager: 1,
			controls: 0,
			slideMargin: 20,
			pagerSelector: ".js-booty-slider-pager",
			onSlideBefore: function(sld, oldIndex, newIndex) {
				var slideCounts = sliderStatistics.getSlideCount();
				if(slideCounts == (newIndex+1)) {
					$(".js-statics-slider-nav .next").addClass("is-disable");
				} else {
					$(".js-statics-slider-nav .next").removeClass("is-disable");
				}
				if((newIndex+1) == 1) {
					$(".js-statics-slider-nav .prev").addClass("is-disable");
				} else {
					$(".js-statics-slider-nav .prev").removeClass("is-disable");
				}
			},
		});
		$(".js-statics-slider-nav .prev").on("click", function(e) {
			sliderStatistics.goToPrevSlide();
		});
		$(".js-statics-slider-nav .next").on("click", function(e) {sliderStatistics.goToNextSlide();
		});


	});

	//	infobox full height
	//	function
	// ===============================================
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
	

	//	show btn in infobox on hover
	//	auto 
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


	//	fix upperbar
	//	function
	// ===============================================
	function upperbarFixed(){
		var upperbar = $(".js-upperbar"),
			windowHeight = $(window).height(),
			windowWidth = $(window).width();

		if (upperbar.length) {
			var upperbarHeight = upperbar.outerHeight() + 20,
				colRight = $(".l-right"),
				contentHeight = colRight.outerHeight();
		
			if (windowHeight < contentHeight && windowHeight >= 700 && windowWidth > 1280) {
				if(!(upperbar.hasClass("is-fixed"))){
					upperbar.stop().fadeOut(100, function(){
						upperbar.addClass("is-fixed");
						colRight.css({paddingTop: upperbarHeight});
						upperbar.stop().fadeIn(400);
					});
				}
			} else {
				if((upperbar.hasClass("is-fixed"))){
					upperbar.stop().fadeOut(100, function(){
						upperbar.removeClass("is-fixed");
						colRight.css({paddingTop: '20px'});
						upperbar.stop().fadeIn(400);
					});
				}
			}
		}
	};


	//	ripplelink
	//	auto
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


	//	run functions
	// ===============================================
	upperbarFixed();
	infoboxFullHeight();


	//	run functions on resize
	//	use timer to make resize correct
	// ===============================================
	var timer;
	$(window).on("resize", function(){
		clearTimeout(timer);
		timer = setTimeout(function(){
			upperbarFixed();
			infoboxFullHeight();
		}, 200);
	});

});