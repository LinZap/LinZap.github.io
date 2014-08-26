<?php
set_time_limit(0);

$all = "";

if(isset($_POST['link'])){

	include_once('simple_html_dom.php');
	$url = $_POST['link'];
	$page = 0;
	$all .= "[";
	gethtml($url,$page);
}


function printlink($html){
	global $all;
	$listlink = $html->find(".gdtm div a");
	for( $i=0; $i<count($listlink); $i++ ) $all .= getImg($listlink[$i]->href);
}

function gethtml($url,$page){
	global $all;
	$pageurl = $url."?p=".$page;
	$html = file_get_html($pageurl);
	printlink($html);
	if(havenext($html)){
		$page++;
		gethtml($url,$page);
	}
	else{
		$all = substr($all,0,-1);
		$all .= "]";
		echo $all;
	}
	
}

function havenext($html){
	global $all;
	$ip = $html->find('.ip',0)->plaintext;
	$sp_ip = explode(' ',$ip);
	return ((int)$sp_ip[3]<(int)$sp_ip[5])?true:false;
}

function getImg($link){
	return "\"".$link."\",";
	/*
	$html = file_get_html($link);
	$imgsrc = $html->find('.i3 a img',0)->src;
	echo $imgsrc."<br>";
	*/
}


?>