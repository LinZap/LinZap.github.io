var page = '';
$(function(){

	$('.appname,.footer').hide().fadeIn(300);
	$('.nav').hide();

	page = getPage();
	togpage(page);

	$('.navbox a').on('click', function(event) {
		
			page = $(this).data('name');
			togpage(page);
		
	});

	$('.tag').click(function(event) {
		page = $(this).data('name');
		togpage(page);
	});


	function togpage(name){
		switch(name) {
			case 'home': page1(); break;
			case 'demo': page2(name);break;
			case 'about': page2(name);break;
			case 'contact': page2(name);break;
			default: page1();
		}
	}

	function page1(){
		$('.panel').removeClass('filp');
		$('.tagbox').removeClass('mah');
		$('.nav').hide();
		$('.appname').promise().done(function(){
			$('.nav').fadeIn(500).promise().done(function() {
	    		$(".navbox").css('opacity', 1);
	  		});
	  	});
	}

	function page2(name){
		closenav();
		$('.tagbox').removeClass('mah');
		$('.card-page').hide();
		$('.panel').addClass('filp2');
		setTimeout(function(){
			$('.panel').addClass('filp').removeClass('filp2');
			$('.card-page[page="'+name+'"]').fadeIn(1000).promise().done(function(){
				$('.tagbox').addClass('mah');
			});

		},1000);

	}


	function closenav(){ if($('.nav').is(':visible')) $('.nav').fadeOut(500); }

	function getPage(){ return location.href.split("#")[1];}
});