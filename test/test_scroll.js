$(document).ready(function(){

	var controller = new ScrollMagic.Controller();

	/*Good size for div*/
	var wheight = $(window).height() * 2;
	$('.content-wrapper').css("height", wheight);
	
	/*MEHTODES secondary animation*/
	var scene = new ScrollMagic.Scene({
		triggerElement: '.some-page-wrapper',
		offset: 500,
	})
	.setClassToggle('.some-page-wrapper', 'show')
	.addTo(controller);

	/*METHODES global animation*/
	var scene2 = new ScrollMagic.Scene({
		triggerElement: '.content',
		duration: 800,
		offset: 630,
	})
	.setPin(".content")
	.addTo(controller);
	var scene3 = new ScrollMagic.Scene({
		triggerElement: '.content',
		duration: 900,
		offset: 0,
	})
	.setClassToggle('.content', 'show')
	.addTo(controller);

	/*OFFRES global animation*/
	var scene4 = new ScrollMagic.Scene({
		triggerElement: '.content2',
		duration: 900,
		offset: 900,
	})
	.setClassToggle('.content2', 'show')
	.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '.content2',
		duration: 1500,
		offset: 690,
	})
	.setPin(".content2")
	.addTo(controller);
})
