<?php
set_time_limit(0);

include_once('simple_html_dom.php');

$url = "http://g.e-hentai.org/?page=".$_POST['page']."&f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=1&f_non-h=1&f_imageset=1&f_cosplay=1&f_asianporn=1&f_misc=1&f_search=".$_POST['keyword']."&f_apply=Apply+Filter";

//http://g.e-hentai.org/?f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=1&f_non-h=1&f_imageset=1&f_cosplay=1&f_asianporn=1&f_misc=1&f_search=hunter&f_apply=Apply+Filter
//http://g.e-hentai.org/?page=1&f_doujinshi=on&f_manga=on&f_artistcg=on&f_gamecg=on&f_western=on&f_non-h=on&f_imageset=on&f_cosplay=on&f_asianporn=on&f_misc=on&f_search=hunter&f_apply=Apply+Filter


$html = file_get_html($url);

$listImg = $html->find('.it2');
$listName = $html->find('.it5 a');

$count = count($listName);

$all = "";
$all .= "[";


for($i=0;$i<$count;$i++){

	$all .= "{\"name\":\"".$listName[$i]->plaintext."\",";
	$all .= "\"href\":\"".$listName[$i]->href."\",";
	$imgsrc = $listImg[$i]->find("img",0)->src;

	if($imgsrc=="")$imgsrc= bulidsrc($listImg[$i]->innertext);;
	$all .= "\"img\":\"".$imgsrc."\"},";
}

$all = substr($all,0,-1);
$all .="]";
echo $all;



function bulidsrc($str){
	 $sp_str = explode('~',$str); 
	 $src = (count($sp_str)>=4)? "http://$sp_str[1]/$sp_str[2]" : "";
	 return $src;
}



?>