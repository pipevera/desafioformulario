function validar(){
  var nombre, apellidos, correo, usuario, clave, telefono, expresion;
  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  correo = document.getElementById("correo").value;
  usuario = document.getElementById("usuario").value;
  clave = document.getElementById("pass").value;
  telefono = document.getElementById("telefono").value;


expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === ""){
    alert("el campo nombre está vacio");
return false;
  }
  else if(nombre.length>30){
    alert("el nombre no debe superar los 30 caracteres");
return false;
  }
  if(apellidos === ""){
    alert("el campo apellidos está vacio");
return false;
  }
  else if(apellidos.length>80){
    alert("el apellido no debe superar los 80 caracteres");
return false;
  }
  if(correo === ""){
    alert("el campo correo está vacio");
return false;
  }
  else if(correo.length>100){
    alert("el correo no debe superar los 100 caracteres");
return false;
  }
  else if(!expresion.test(correo)){
    alert("el correo no es valido");
return false;
  }
  if(usuario === ""){
    alert("el campo usuario está vacio");
return false;
  }
  else if(usuario.length>20){
    alert("el usuario no debe superar los 20 caracteres");
return false;
  }
  if(clave === ""){
    alert("el campo clave está vacio");
return false;
  }
  if(telefono === ""){
    alert("el campo telefono está vacio");
return false;
  }
  else if(isNaN(telefono)){
    alert("el telefono ingresado debe ser numero");
return false;
  }
  else if(telefono.length>15){
    alert("el telefono no debe superar los 15 caracteres");
    return false;
  }

  alert("Hola " + nombre + " " + apellidos + " tu usuario es " + usuario + " y tu clave es " + clave);
}

