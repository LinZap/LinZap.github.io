<?php
include_once('simple_html_dom.php');
	
	if(isset($_POST['url'])){
		$html = file_get_html($_POST['url']);
		echo $html->find('#i3 a img',0)->src;
	}
	

?>