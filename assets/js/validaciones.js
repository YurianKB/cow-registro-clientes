/*var telefono = localStorage.getItem("Telefono");

function cargarPagina(){
	$("#registrarse").click(redireccionar);
	$("#telephone_contact").keyup(validacion);
	$("#name_contact").keyup(validarDatosUsuario);
	$("#email_contact").keyup(validarDatosUsuario);
}

function validacion(){
	// console.log($(this).val().length);
	var $valorTelefono = $("#telephone_contact").val();
	var $longitudTelefono = $valorTelefono.length;

	if (/^([0-9])*$/.test($valorTelefono) && $longitudTelefono == 10) {
		$("#registrarNumero").removeClass("disabled");
		// peticionCodigo(url,$valorTelefono,$valorCheck);

	}else {
		$("#registrarNumero").addClass("disabled");
	}
}

function validarDatosUsuario(){
	var $name_contact = $("#name_contact").val().trim();
	var $emailUsuario = $("#email_contact").val().trim();
	var $contrasenaUsuario = $("#password").val().trim();

	if($name_contact!== "" && $emailUsuario!== "" && $contrasenaUsuario.length >=6){
			$("#btnCrearUsuario").removeClass("disabled");

			localStorage.setItem("Usuario", $name_contact);
			localStorage.setItem("Email", $emailUsuario);
			localStorage.setItem("Password", $contrasenaUsuario);
		}else{
		$("#btnCrearUsuario").addClass("disabled");
	}
}
*/
