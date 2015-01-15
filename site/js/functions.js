/*
	proscom.ru
	Simple Communication
*/

$(document).ready(function() {
	//	#slider
	// ===============================================
	if ( $.isFunction($.fn.lightSlider) ) {
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



	//	#banner
	// ===============================================
	$(".js-close-banner-text").on("click", function(e){
		e.preventDefault();
		$(this).closest(".js-banner-text").slideUp();
	})
	


	//	#menu-drop
	// ===============================================
	$(".js-menu-drop-item").hover(
		function() {
			$(this).find(".menu-drop").stop().fadeIn();
		}, function() {
			$(this).find(".menu-drop").stop().fadeOut();
		}
	);


	// #hidden-text
	// ===============================================
	$(".js-hidden-text-open").on("click", function(e) {
		var thisis = $(this);
		var box = $(this).closest(".js-hidden-text-box");
		var item = box.find(".js-hidden-text");

		e.preventDefault();
		item.slideDown();
		box.addClass("is-active");
	});



	//	#dropmenu
	// ===============================================
	$(".js-dropmenu").hover(
		function() {
			$(this).find(".js-dropmenu-link").addClass("is-open");
			$(this).find(".js-dropmenu-content").stop().slideDown();
		}, function() {
			$(this).find(".js-dropmenu-link").removeClass("is-open");
			$(this).find(".js-dropmenu-content").stop().fadeOut('fast');
		}
	);



	//	#select
	// ===============================================
	var selectBox = $('.select-wrap');
	var selectBoxItems = selectBox.find('.option-list');
	var selectBoxHeight = selectBox.outerHeight();
	selectBox.removeClass("open");
	
	selectBox.hover(
		function() {
			$(this).find('.option-list').stop().slideDown('fast').css({top: selectBoxHeight});
			$(this).find(".select").addClass('is-open');
		}, function() {
			$(this).find('.option-list').stop().fadeOut('fast');
			$(this).find(".select").removeClass('is-open');
		}
	);

	$('.select-wrap .option-list li').click(function() {
		var title = $(this).closest('.select-wrap').find('.select .title');
		var option = $(this).html();
		$(this).closest('.select-wrap').find('.select-value').val( $(this).attr('data-value') );
		title.empty();
		title.html(option);
		$(this).closest('.option-list').stop().fadeOut('fast');
		$(this).closest('.select-wrap').find('.select').removeClass('is-open');
	});



	//	#scroller
	// ===============================================
	$(".scroller-box").mCustomScrollbar({
		scrollInertia:150,
		advanced:{
			updateOnContentResize: true
		}
	})

});