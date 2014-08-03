$(function(){

imagesLoaded( 'body', function() {$('.load').css('display', 'block'); $('#load_txt').fadeOut(1000);});


	/*
$(window).scroll(function(){
	console.log($(this).scrollTop());
});*/

	$.stellar({
	horizontalScrolling: false,
	verticalOffset: 40
	});

	var controller = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: false,
			reverse:true
	});

	controller.addTween('#dzap-txt', 
				(new TimelineLite())
			    .append([
			    	TweenMax.fromTo( $('#incjcu-img1'),0.5, {opacity:0},{opacity:1,backgroundPosition:"-=0px 0px"})])
			    .append([
			    	TweenMax.to( $('#incjcu-img1'),0.5, {backgroundPosition:"-=0px -=10px"})])
			    .append([			   
			     TweenMax.fromTo( $('#incjcu-img2'),2,{opacity:0},{opacity:1,backgroundPosition:"-=0px +=50px"}),
			     TweenMax.to($('#incjcu-img1'),2,{backgroundPosition:"-=0px -=165px"})	])
			    ,500);


	controller.addTween('#story2-txt1', 
				(new TimelineLite())
				.append( [
					TweenMax.fromTo($('#story2-txt2'),2,{opacity:0},{opacity:1}) ])
				,600);

	controller.addTween('#incjcu-img3', 
				(new TimelineLite())
				.append( [TweenMax.fromTo($('#story2-txt3'),2,{opacity:0},{opacity:1}) ])
				,500);


	controller.addTween('#story2-txt3', 
				(new TimelineLite())
				.append( [TweenMax.fromTo($('#incjcu-img4'),2,{opacity:0},{opacity:1}) ])
				,500);


	controller.addTween('#incjcu-img4', 
				(new TimelineLite())
				.append( [TweenMax.to($('#incjcu-img4'),2,{opacity:0}) ])
				,400);



	controller.addTween('#incjcu-img2', 
				(new TimelineLite())
				.append([			   
			     TweenMax.fromTo( $('#incjcu-img3'),1,{opacity:0},{opacity:1})  ])
				.append([			   
			     TweenMax.to( $('#incjcu-img3'),1,{backgroundPosition:"-=0px -=100px"})  ])			    
			    ,500);



	controller.addTween('#story3-txt2', 
				(new TimelineLite()).append([TweenMax.fromTo( $('#story4-txt1'),1,{opacity:0},{opacity:1}) ]),500);

	controller.addTween('#bone-box1', 
				(new TimelineLite()).append([TweenMax.fromTo( $('#story4-txt2'),1,{opacity:0},{opacity:1}) ]),300);

	controller.addTween('#bone-box2', 
				(new TimelineLite()).append([TweenMax.fromTo( $('#story4-txt3'),1,{opacity:0},{opacity:1}) ]),300);




	// story1
	controller.pin($('#page-story1'), 6000, {
	  anim: (new TimelineLite())	 
	      .append([TweenMax.fromTo( $('#dzap1'),10, {opacity:0},{display:"block",opacity:1})])
	      .append([TweenMax.fromTo( $('#dzap-txt'),5, {opacity:0},{opacity:1})])
	      .append([TweenMax.to( $('#dzap1'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap2'),1, {display:"block"}),])
	      .append([TweenMax.to( $('#dzap2'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap3'),1, {display:"block"}),])
	      .append([TweenMax.to( $('#dzap3'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap4'),1, {display:"block"}),TweenMax.to( $('#dzap-txt'),2, {opacity:0.9})])
	      .append([TweenMax.to( $('#dzap4'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap5'),1, {display:"block"}),])
	      .append([TweenMax.to( $('#dzap5'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap6'),1, {display:"block"}),])
	      .append([TweenMax.to( $('#dzap6'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap7'),1, {display:"block"}),])
	      .append([TweenMax.to( $('#dzap7'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap8'),1, {display:"block"}),])
	      .append([TweenMax.to( $('#dzap8'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap9'),1, {display:"block"}),])
	      .append([TweenMax.to( $('#dzap9'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap10'),1, {display:"block"}),])
	      .append([TweenMax.to( $('#dzap10'),1, {display:"none"}),])
		  .append([TweenMax.to( $('#dzap'),1, {display:"block"}),])
		  .append([TweenMax.to( $('#dzap'),10, {opacity:0}),
		  	TweenMax.to($('#dzap-txt'),2, { css:{opacity:0}, onComplete:function(){scrollto(0);}  } )
		  	]) 	
	});
		
	
	// story3
	controller.pin($('#page-story3'), 8500, {
	  anim: (new TimelineLite())
	.append([TweenMax.fromTo( $('#meetdf-img1'),10,{backgroundSize:"100% 100%",opacity:0.9},{backgroundSize:"+=500% +=500%",opacity:0,display:"none"}) ]) 	
	.append([TweenMax.fromTo( $('#izap'),4,{opacity:0},{opacity:0.5}),TweenMax.fromTo( $('#df'),4,{opacity:0},{opacity:0.4}),TweenMax.to( $('#story3-txt1'),1,{opacity:0})]) 
	.append([TweenMax.to( $('#izap'),1,{opacity:0.7}),TweenMax.to( $('#df'),1,{opacity:0})]) 
	.append([TweenMax.fromTo( $('#story3-txt2'),2,{opacity:0},{opacity:0.4})]) 
	.append([TweenMax.to( $('#izap'),1,{opacity:0}),TweenMax.to( $('#story3-txt2'),5,{marginTop:"-=300px",opacity:1})]) 
	.append([TweenMax.to( $('#story3-txt2'),.5,{opacity:0})]) 
	});
	



	var dy = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	function scrollto(p){
		var parr = [7725];
		if($(window).scrollTop()<parr[p])	dy.animate({scrollTop: parr[p]}, 1000);
	}

});