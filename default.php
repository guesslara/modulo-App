<?php
/** * 
 *  @name                Pagina default del modulo principal
 *  @version             1.0.0
 *  @copyright           Air Logistics & GPS S.A. de C.V.   
 *  @author              Gerardo Lara
 *  @modificado          29 Noviembre 2014
**/
 
	$db = new sql($config_bd['host'],$config_bd['port'],$config_bd['bname'],$config_bd['user'],$config_bd['pass']);
	
	if(!$userAdmin->u_logged())
		echo '<script>window.location="index.php?m=login"</script>';
	
	$tpl->set_filenames(array('default'=>'default'));	
	//informacion necesaria del usuario
	$idProfile   = $userAdmin->user_info['ID_PROFILE'];
	$idCliente   = $userAdmin->user_info['ID_CLIENTE'];
	$idUsuario	 = $userAdmin->user_info['ID_USUARIO'];
	$idTipo 	 = $userAdmin->user_info['ID_TIPO_USUARIO'];
	//se extrae el  menu del usuario
	$objFuncionesBase= new usersAdministration();

	$strMenuP=$objFuncionesBase->validarMenuPrincipal($idTipo);

	$strMenuP=explode("||",$strMenuP);

	//echo "<pre>";
	//print_r($strMenuP);
	//echo "</pre>";

	for($i=0;$i<count($strMenuP);$i++){
		$opciones=explode("??",$strMenuP[$i]);
		//echo "<pre>";
		//print_r($opciones);
		//echo "</pre>";		
		$tpl->assign_block_vars('listadoMenuP',array(
			'IDMENU'  		=> $opciones[0],
			'NOMBREMENU' 	=> $opciones[1],
			'URL'			=> $opciones[2]
		));
		$tpl->assign_block_vars('listadoMenuPD',array(
			'IDMENU'  		=> $opciones[0]
		));
	}


	$tpl->assign_vars(array(
		'PAGE_TITLE'	=> "Administraci&oacute;n de tareas",	
		'PATH'			=> $dir_mod,
		'IDCLIENTE'		=> $idCliente,
		'IDUSUARIO'		=> $idUsuario
	));

	$tpl->pparse('default');
?>