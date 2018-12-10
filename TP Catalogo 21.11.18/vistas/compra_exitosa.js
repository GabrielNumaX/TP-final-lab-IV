//la funcion intenta validar que haya un mail ingresado
//pero no anduvo ni con null o undefined ni con todos los operadores de igualdad
//tambien copie una funcion para validar el mail pero no logre implementarla
//con el window.alert, es decir salian dos notificaciones, una que estaba bien y otra incorrecta
//finalemente decidi dejar lo que yo habia hecho

function compra() {
  var email;
      email=prompt("Ingrese su Email");

        if (email.prompt === false || null || undefined) {
          window.alert("Ingrese su Email");
        }
        else {
          window.alert("compra realizada, chequee su Email");
        }
}
