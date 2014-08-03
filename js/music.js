$(function(){


	$('.myicon').click(function(event) {
		new Audio("music/BigButtonClick.wav").play();
		//mbigclick.play();
	});

	$('.top-box li, .right-box li').click(function(event) {
		new Audio("music/MouseClick1.wav").play();
	});

	$('.top-box li, .right-box li').mouseenter(function(event) {
		var m = new Audio("music/BristleBackMissileLaunch1.wav");
		m.volume=0.05;
		m.play();
	});

});