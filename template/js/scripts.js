function cargarModulo(url,div){
	mostrarModulo(url,"default",div,div,"POST");
}

function mostrarModulo(url,parametros,divCarga,divResultado,tipoPeticion){
	$.ajax({
		url: "index.php?m="+url+"&c=default",
		type: tipoPeticion,
		data: parametros,
		beforeSend:function(){ 
			$("#tab_"+divCarga).show().html("Procesando Informacion ..."); 
		},
		success: function(data) {
			$("#tab_"+divCarga).hide();
			$("#tab_"+divResultado).show().html(data);
		},
		timeout:90000000,
		error:function() {
		    $("#tab_"+divCarga).hide();
		    $("#error").show();
		    $("#error_mensaje").html('Ocurrio un error al procesar la solicitud.');
		}
	});
}