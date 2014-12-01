//declaraciones iniciales
$(document).ready(function(){
	$( "#tabsAppMovi" ).tabs();

	$("#div_manualUsuarioContenido").draggable();

	$("#div_ticketsServicio").draggable();

	$("#div_usuarioLogo").click(function(){
		console.log("detalleUsuario")
		$("#div_detalleUsuario").show("fast");
	});

	$("#div_manualUsuario").click(function(){
		$("#div_manualUsuarioContenido").show();
	});	

	$("#div_soporteUsuario").click(function(){
		$("#div_ticketsServicio").show();
	});

	$("#btnCerrarAyuda").click(function(){
		$("#div_manualUsuarioContenido").hide();
	});

	$("#btnCerrarTicket").click(function(){
		$("#div_ticketsServicio").hide();
	});

	redimensionarModuloPrincipal();   	
});

function redimensionarModuloPrincipal(){
	altoAppX=$(document).height();
	//console.log(altoAppX);
	$("#contenedorAppMovi").css("height",(altoAppX-4)+"px");
	$("#tabsAppMovi").css("height",(altoAppX-12)+"px");
}

window.onresize=redimensionarModuloPrincipal;

function ajaxMonitoreo(accion,c,parametros,divCarga,divResultado,tipoPeticion){
	$.ajax({
		url: "index.php?m="+m+"&c="+c,
		type: tipoPeticion,
		data: parametros,
		beforeSend:function(){ 
			$("#"+divCarga).show().html("Procesando Informacion ..."); 
		},
		success: function(data) {
			$("#"+divCarga).hide();
			controladorAcciones(accion,data,divResultado);
		},
		timeout:90000000,
		error:function() {
		    $("#"+divCarga).hide();
		    $("#error").show();
		    $("#error_mensaje").html('Ocurrio un error al procesar la solicitud.');
		}
	});
}