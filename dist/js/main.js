'use strict';function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

jQuery(function ($) {
	initStopAnimationsDuringWindowResizing();
	initHamburgerMenu();
	initViewportUnitsOnMobile();
	initSliders();
	initAccordionActiveClass();
	initShortenText();
	initScrollTopBtn();
	initActiveHeaderAfterScroll();
	initGetScrollBarWidth();
	initModalScrollCompensation();
	initFancyBoxModal();

	$(window).on('resize', function () {
		initGetScrollBarWidth();
	});

	// STOP ANIMATIONS DURING WINDOW RESIZING
	function initStopAnimationsDuringWindowResizing() {
		var resizeTimer;

		$(window).on('resize', function () {
			$('body').addClass('resize-animation-stopper');

			clearTimeout(resizeTimer);

			resizeTimer = setTimeout(function () {
				$('body').removeClass('resize-animation-stopper');
			}, 400);
		});
	}

	// HAMBURGER MENU
	function initHamburgerMenu() {
		function openMenu() {
			$('.js-menu').addClass('active');
			$('body').addClass('disable-scroll');
		}

		function removeMenu() {
			$('.js-menu').removeClass('active');
			$('body').removeClass('disable-scroll');
		}

		$('.js-hamburger-menu').on('click', function (e) {
			e.preventDefault();

			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				removeMenu();
			} else {
				$(this).addClass('active');
				openMenu();
			}
		});
	}

	// VIEWPORT UNITS ON MOBILE
	function initViewportUnitsOnMobile() {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');

		$(window).on('resize', function () {
			vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', vh + 'px');
		});
	}

	// SLIDERS
	function initSliders() {var _$$slick;
		$('.js-reviews-slider').slick({
			dots: true,
			arrows: false,
			draggable: false,
			slidesToShow: 1,
			swipe: true,
			touchMove: false,
			mobileFirst: true,
			responsive: [
			{
				breakpoint: 575,
				settings: {
					dots: false,
					arrows: true,
					swipe: false } },


			{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: true,
					slidesToShow: 3,
					swipe: false } }] });





		$('.js-slider-team').slick((_$$slick = {
			draggable: false,
			arrows: false,
			swipe: true,
			touchMove: false,
			dots: true }, _defineProperty(_$$slick, "swipe",
		true), _defineProperty(_$$slick, "mobileFirst",
		true), _defineProperty(_$$slick, "responsive",
		[
		{
			breakpoint: 575,
			settings: {
				dots: false,
				arrows: true,
				swipe: false } }]), _$$slick));





		$('.js-customer-reviews-slider').slick({
			draggable: false,
			arrows: false,
			swipe: true,
			touchMove: false,
			dots: true,
			vertical: false,
			speed: 500,
			adaptiveHeight: true,
			mobileFirst: true,
			responsive: [
			{
				breakpoint: 575,
				settings: {
					dots: false,
					arrows: true,
					swipe: false,
					vertical: true,
					adaptiveHeight: false } }] });





		$('.js-images-slider').slick({
			slidesToShow: 1,
			draggable: false,
			arrows: false,
			swipe: true,
			touchMove: false,
			dots: true,
			speed: 500,
			mobileFirst: true,
			infinite: false,
			responsive: [
			{
				breakpoint: 575,
				settings: {
					dots: false,
					arrows: true,
					swipe: false,
					slidesToShow: 2 } }] });





		$('.js-testimonials-slider').slick({
			dots: true,
			arrows: false,
			draggable: false,
			slidesToShow: 1,
			swipe: true,
			touchMove: false,
			mobileFirst: true,
			responsive: [
			{
				breakpoint: 575,
				settings: {
					dots: false,
					arrows: true,
					swipe: false } },


			{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: true,
					slidesToShow: 3,
					swipe: false } }] });




	}

	// ACCORDION ACTIVE CLASS
	function initAccordionActiveClass() {
		$('.js-accordion-with-icons .collapse').on('show.bs.collapse', function () {
			$(this).closest('.js-accordion-with-icons-item').addClass('active');
		});

		$('.js-accordion-with-icons .collapse').on('hide.bs.collapse', function () {
			$(this).closest('.js-accordion-with-icons-item').removeClass('active');
		});
	}

	// SHORTEN TEXT
	function initShortenText() {
		var shortenTextItem = $('.js-shorten-text');

		if (shortenTextItem.length) {
			shortenTextItem.each(function () {
				var chars = +$(this).attr('data-chars');

				$(this).shorten({
					chars: chars ? chars : 100,
					ellipses: '...',
					more: 'more',
					less: 'less' });

			});
		}
	}

	// SCROLL TOP BTN
	function initScrollTopBtn() {
		var scrollTopBtn = $('.js-scroll-top-btn'),
		scrollingComplete = true;

		scrollTopBtn.on('click', function () {
			if (scrollingComplete) {
				scrollingComplete = false;

				$('body, html').animate({
					scrollTop: 0 },
				1000).promise().done(function () {
					scrollingComplete = true;
				});

				return false;
			}
		});
	}

	// ACTIVE HEADER AFTER SCROLL
	function initActiveHeaderAfterScroll() {
		var header = $('.js-header');

		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 10) {
				header.addClass('active');
			} else {
				header.removeClass('active');
			}
		});

		if ($(document).scrollTop() > 10) {
			header.addClass('active');
		}
	}

	// GET SCROLLBAR WIDTH
	function initGetScrollBarWidth() {
		if (window.innerWidth > $(window).width()) {
			var $outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
			widthWithScroll = $('<div>').css({ width: '100%' }).appendTo($outer).outerWidth();
			$outer.remove();
			window.widthOfScrollbar = 100 - widthWithScroll;
			return 100 - widthWithScroll;
		} else {
			return window.widthOfScrollbar = 0;
		}
	}

	// MODAL SCROLL COMPENSATION
	function initModalScrollCompensation() {
		function addScrollbarCompensation(element) {
			element.css('padding-right', window.widthOfScrollbar);
		}

		function removeScrollbarCompensation(element) {
			element.css('padding-right', 0);
		}

		$('.modal').on('show.bs.modal', function (e) {
			addScrollbarCompensation($('.js-header'));
		});

		$('.modal').on('hidden.bs.modal', function (e) {
			removeScrollbarCompensation($('.js-header'));
		});
	}

	// FANCYBOX MODAL
	function initFancyBoxModal() {
		$('[data-fancybox]').fancybox({
			buttons: [
			'close'],

			animationEffect: 'zoom-in-out',
			idleTime: false,
			btnTpl: {
				close:
				'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
				'<i class="icon-close"></i>' +
				"</button>" },

			afterLoad: function afterLoad(instance, current) {
				$('.fancybox-button.fancybox-button--close').appendTo('.fancybox-slide--current > div');
			} });

	}
});