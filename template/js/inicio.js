//declaraciones iniciales
$(document).ready(function(){
	$( "#tabsAppMovi" ).tabs();
	redimensionarModuloPrincipal();   	
});

function redimensionarModuloPrincipal(){
	altoAppX=$(document).height();
	//console.log(altoAppX);
	$("#contenedorAppMovi").css("height",(altoAppX-4)+"px");
}
window.onresize=redimensionarModuloPrincipal;