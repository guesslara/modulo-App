<?php
/** * 
 *  @name                Index modulo principal
 *  @version             1
 *  @copyright           Air Logistics & GPS S.A. de C.V.   
 *  @author              Gerardo Lara
 *  @modificado          29 Noviembre 2014
**/	
	$tpl = new Template('modules/'.$_GET['m'].'/template');
	$dir_pimages = "public/images";
	$dir_mod 	 = 'modules/'.$_GET['m'].'/template';
	$dbf         = new dbFunctions();	
	if(isset($_GET['c'])){
		$filename = $config['modules']."".$_GET['m']."/".$_GET['c'].'.php';
		if(file_exists($filename)){
			include $filename;
		}else{
			echo "<script>window.location='errors/index.php?e=error404';</script>";
		}
	}else{
		echo "<script>window.location='index.php?m=".$_GET['m']."&c=default';</script>";
	}		
?>