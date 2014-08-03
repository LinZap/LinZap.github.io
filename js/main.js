$$(function(){
	var subhint=[
	'Web架構的基礎技術，包括URI和HTTP',
	'可以讓客戶端使用網頁到伺服器請求資源',
	'REST是設計風格而不是標準。譬如常使用的HTTP、URI、XML以及HTML等協議皆然',
	'一種直譯式程式語言。動態型別、弱型別、基於原型的語言，也內建支援型別',
	'由淺入深 Demo 實際案例',
	'關於我'];
	var subcolor=['#2C2C56','#492549','#7E2929','#474723','#336666','#fff'];
	// 大標題
	var topic_data = ["Web Archecture","CGI","Cloud Computing/ RESTful API","Javacript programming","Dymanic HTML Examples","About Me"];
	// 子標題
	var subtopic_data = [
	["Web的架構","Web的技術","HTML語言的結構","靜態網頁內容","動態網頁內容","content-type","造訪一個網頁","Cookie是什麼"],
	["CGI共通閘道介面","CGI環境變數","查詢字串與表單"],
	["何謂REST","RESTful Web API"],
	["JS簡介","JS簡單範例","JS物件模型","DOM簡介","事件與事件處理","JS Function","經典範例"],
	["動態改變內容","動態改變外貌","散落的相片","手機螢幕滑動","Canvas 圓形進度條","純 CSS 對話氣泡","轉動的齒輪","翻書特效"],
	[]];
	// init append data
	init_appen_data();
	// init music setting
	init_music();
	// init type-effect
	typein_effect( $('#keyin1') );
	blink_effect( $('.cursor') );
	



	// init page height
	$('.box').css('height', $(window).height());

	$(window).resize(function(event) {
		$('.box').css('height', $(window).height());
	});

	$('.right-box,#topic-content').hide();

	

	$('.top-box li').click(function(event) {

		var index = $('.top-box li').index(this);

		$('.box').css('left', '-50.01%');
		$('.left-box').fadeOut(200);

		$('#cnt2').addClass('cnt-listmode').css('background-color', '#fff');
		$('#cnt3').addClass('cnt-contantmode').css('background-color', subcolor[index]);;


		$('#topic-title').text($(this).text());
		$('#topic-subtitle').text($(this).text());
		$('#topic-subhint').html(subhint[index]);

		show_topic_list(index);

		$('.right-box').fadeIn(500);

	});

	$('.myicon').click(function(event) {
		$('.box').css('left', '0');

		$('.left-box').fadeIn(200);
		$('.right-box').fadeOut(200);
		$('.topic-subbox').show();
		$('#topic-content').hide();
		 recolor(false);

		$('#cnt2').removeClass('cnt-listmode').css('background-color', '#222');
		$('#cnt3').removeClass('cnt-contantmode');
		$('.right-box li').removeClass('recolor-active');
		$('#topic-content').html("");
		$('#loading-img').css('display','none');
	});



	$('.right-box li').click(function(event) {

		$('.right-box li').removeClass('recolor-active');
		$(this).addClass('recolor-active');


		recolor(true);

		var fa = $(this).parent(".right-box ul");
		// node's father index
		var faidx = $('.right-box ul').index(fa);
		// node index in father
		var index = fa.children().index(this);

		loadpage(faidx,index);

	});


	$('#showme').click(function(event) {
		loadpage(1000,0);
	});


	function loadpage(faidx,index){

		var path = '';
		switch(faidx) {
			case 0: path = 'sub/WebArchecture/'; break;
			case 1: path = 'sub/CGI/'; break;
			case 2: path = 'sub/RESTful/'; break;
			case 3: path = 'sub/JavacriptProgramming/'; break;
			case 4: path = 'sub/StartUpEx/'; break;
			default: path = 'sub/AboutMe/'; 
		}
		path+=index+'.html';
		
		$('.topic-subbox').hide();
		//$('#topic-content').load(path).fadeIn(200);

		$.ajax({
		  url: path,
		  cache: false,
		  beforeSend: function( xhr ) {
		    $('#loading-img').css('display','block');
		  }
		})
		.done(function( html ) {
			$('#loading-img').css('display','none');
		    $("#topic-content").html(html).fadeIn(200).scrollTop(0);
		  })
		.fail(function() {
		   $("#topic-content").html("");
		  });
	}


	// show出 大選項 的 子選項，
	// 大選項的index，會對應子選項的index
	function show_topic_list(index){
		$('.right-box ul').hide();
		$('.right-box ul:eq('+index+')').fadeIn(200);
	}

	
	function recolor(boo){
		if(boo){
			$('#topic-title').addClass('top-highlight2');
			$('.right-box li').addClass('recolor');
			$('#cnt2').css('background-color', '#222');
		}
		else{
			$('#topic-title').removeClass('top-highlight2');
			$('.right-box li').removeClass('recolor');
			$('#cnt2').css('background-color', '#FFF');
		}
	}


	function init_music(){

	$('.myicon').click(function(event) {
		new Audio("music/BigButtonClick.wav").play();
	});

	$('.top-box li, .right-box li').click(function(event) {
		new Audio("music/MouseClick1.wav").play();
	});

	$('.top-box li, .right-box li').mouseenter(function(event) {
		var m = new Audio("music/BristleBackMissileLaunch1.wav");
		m.volume=0.05;
		m.play();
	});
	}


	// init data
	function init_appen_data(){

		// appen main topic data
		var ul = $('<ul>');
		for(var i=0;i<topic_data.length-1;i++)
			ul.append( $('<li>').addClass('box-list').text(topic_data[i]) );
		ul.append( $('<li>').addClass('box-list').attr('id', 'showme').text(topic_data[topic_data.length-1]) );
		$('.top-box').append(ul);
		
		// appen sub-topic data
		var sub_topic_box = $('.right-box');

		for(var i=0;i<subtopic_data.length;i++){
			var ul = $('<ul>');
			for(var j=0;j<subtopic_data[i].length;j++)
				ul.append( $('<li>').addClass('box-list').text(subtopic_data[i][j]) );
			
			sub_topic_box.append(ul);
		}

		// appen keyin-effect data
		$('#keyin1').html("＜!DOCTYPE html＞<br>＜html＞<br>＜head＞＜/head＞<br><br>＜body＞<br>　　Hello ~ I'm Zap! ＜br＞<br>　　Welcome to my website !<br><br>＜/body＞<br><br>＜/html＞<br>");
	}

	


});

// Typein- Effect 
function typein_effect(ele){
var str = ele.html();
var i=0;
ele.html("");
keyin(ele,str,0);
}

function keyin(ele,str,idx){

	var cs = str.charAt(idx);
	idx++;

	var incs = cs;
	if(cs=='<'){
		while(str.charAt(idx)!='>'){
			incs+=str.charAt(idx);
			idx++;
		}
		incs+=str.charAt(idx);
		idx++;

	}


	ele.append(incs);
	var speed = usefloor(50,200) ;
	if(idx<=str.length)
		setTimeout(function(){ 
			keyin(ele,str,idx); 
		},speed);
	else 
		setTimeout(function(){typein_effect(ele)},4700);
}

function usefloor(min,max) {
return Math.floor(Math.random()*(max-min+1)+min);
}

function blink_effect(ele){
	ele.toggleClass('hide');
	setTimeout(function(){
		blink_effect(ele);
	},550);
}


(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=1382733725313090"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));