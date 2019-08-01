$(document).ready(function(){

	var controller = new ScrollMagic.Controller();

	/*Good size for div*/
		var wheight = $(window).height();
		$('.parallax').css("height", wheight);
		$('.content-wrapper').css("height", wheight * 2);
		$('.contact').css("height", wheight);
		$('.footer').css("height", wheight / 3);

	/*METHODES global animation*/
		var scene2 = new ScrollMagic.Scene({
			triggerElement: '.content',
			duration: 800,
			offset: wheight / 2,
		})
		.setPin(".content")
		.addTo(controller);

		var scene3 = new ScrollMagic.Scene({
			triggerElement: '.content',
			duration: 800,
			offset: 0,
		})
		.setClassToggle('.content', 'show')
		.addTo(controller);

	/*METHODES secondary animation*/
		var scene = new ScrollMagic.Scene({
			triggerElement: '.some-page-wrapper',
			duration: 900,
			offset: 0,
		})
		.setClassToggle('.some-page-wrapper', 'show')
		.addTo(controller);

	/*OFFRES global animation*/
		var scene4 = new ScrollMagic.Scene({
			triggerElement: '.content2',
			offset: wheight / 2.3,
		})
		.setClassToggle('.content2', 'show')
		.addTo(controller);
})
