//archivo de funcion js para busqueda de texto en el html principal
//esta funcion la saque de internet y le hice algunas modificaciones para ajustarla
//a la barra de busqueda del form que esta en el index.
//funciona el la barra de direcciones del navegador pero no arroja ningun resultado
//probe pasarle la funcion search() al boton de busqueda pero tampoco funciono

function search() {

   var name = document.getElementById("searchBar").elements["searchText"].value;
   var pattern = name.toLowerCase();
   var targetId = "";

   var divs = document.getElementsByClassName("listaPrincipal");
   for (var i = 0; i < divs.length; i++) {
      var para = divs[i].getElementsByTagName("ul" || "li" || "h3");
      var index = para[0].innerText.toLowerCase().indexOf(pattern);
      if (index != -1) {
         targetId = divs[i].parentNode.id;
         document.getElementById(targetId).scrollIntoView();
         break;
      }
   }
}

search();
