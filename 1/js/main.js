'use strict';

jQuery(function($) {
	initObjectFitImagesPolyfill();
	initHamburgerMenu();
	initViewportUnitsOnMobile();
	initSliders();
	initAccordionActiveClass();
	initShortenText();

	// OBJECT FIT IMAGES POLUFILL
	function initObjectFitImagesPolyfill() {
		var $ofi = $('img.js-ofi:not(.js-lazy)');
		objectFitImages($ofi);
	}

	// HAMBURGER MENU
	function initHamburgerMenu() {
		function openMenu() {
			$('.js-menu').addClass('-active');
			$('body').addClass('-disable-scroll');
		}

		function removeMenu() {
			$('.js-menu').removeClass('-active');
			$('body').removeClass('-disable-scroll');
		}

		$('.js-hamburger-menu').on('click', function(e) {
			e.preventDefault();

			if ($(this).hasClass('-active')) {
				$(this).removeClass('-active');
				removeMenu();
			} else {
				$(this).addClass('-active');
				openMenu();
			}
		})
	}

	// VIEWPORT UNITS ON MOBILE
	function initViewportUnitsOnMobile() {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');

		$(window).on('resize', function() {
			vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', vh + 'px');
		});
	}

	// SLIDERS
	function initSliders() {
		$(".js-reviews-slider").slick({
			draggable: false,
			slidesToShow: 1,
			swipe: false,
			touchMove: false,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3
					}
				}
			]
		})

		$(".js-slider-team").slick({
			draggable: false,
			swipe: false,
			touchMove: false,
			adaptiveHeight: true
		})

		$(".js-customer-reviews-slider").slick({
			draggable: false,
			swipe: false,
			touchMove: false,
			vertical: true,
			speed: 500
		})
	}

	// ACCORDION ACTIVE CLASS
	function initAccordionActiveClass() {
		$('.js-accordion-with-icons .collapse').on('show.bs.collapse', function () {
			$(this).closest('.js-accordion-with-icons-item').addClass('-active');
		});

		$('.js-accordion-with-icons .collapse').on('hide.bs.collapse', function () {
			$(this).closest('.js-accordion-with-icons-item').removeClass('-active');
		});
	}

	// SHORTEN TEXT
	function initShortenText() {
		var shortenTextItem = $(".js-shorten-text");

		if (shortenTextItem.length) {
			shortenTextItem.each(function() {
				var chars = +$(this).attr('data-chars');

				$(this).shorten({
					chars: chars ? chars : 100,
					ellipses: "...",
					more: "more",
					less: "less",
				});
			});
		}
	}
});