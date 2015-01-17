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
	$(".js-hidden-link").on("click", function(e) {
		e.preventDefault();

		var thisis = $(this);
		var box = $(this).closest(".js-hidden-box");
		var content = box.find(".js-hidden-content");

		if(content.is(":visible")) {
			box.removeClass("is-active");
			content.stop().slideUp();
		} else {
			box.addClass("is-active");
			content.stop().slideDown();
		}
	});



	// #popup map
	// ===============================================
	$(".js-popupmap-link").on("click", function(e) {
		e.preventDefault();

		var thisis = $(this);
		var popupId = thisis.data("mapitem-id")
		var box = $(this).closest(".js-popupmap-box");
		var content = box.find(".js-popupmap-content");
		var items = content.find(".js-popupmap-item");
		var currentItem = content.find('.js-popupmap-item[data-mapitem-id="'+popupId+'"]')

		items.stop().fadeOut();
		currentItem.stop().fadeIn();
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
	});



	//	#tabs
	// ===============================================
	$('.tabs').tabslet({
		attribute: 'href',
		animation: true
	});



	//	#map
	// ===============================================
	if($(".map-box").length) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map-box', {
				center: [55.73773386, 37.72953624],
				zoom: 17,
				controls: []
			});
			myMap.behaviors.disable('scrollZoom');
			var myPlacemark = new ymaps.Placemark(myMap.getCenter());
		
			myMap.geoObjects.add(myPlacemark);
		});
	}
});