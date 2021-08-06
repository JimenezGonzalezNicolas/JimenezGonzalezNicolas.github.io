function validar(){
if (document.formvalid.correo.value.length==0){
alert("Ingrese un correo electrónico!")
document.formvalid.correo.focus()
return 0;
}

if (document.formvalid.password.value.length==0){
alert ("Ingrese su contraseña!")
document.formvalid.password.focus()
return 0;
}
alert("Ingreso completo, bienvenido...");
document.formvalid.submit();
}