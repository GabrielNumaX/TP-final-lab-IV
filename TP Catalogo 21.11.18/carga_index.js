//este es el archivo que carga parte del html en la pagina principal

var listaIndex =  [{nombre: 'Leonardo Da Vinci - ',
                  titulo: '<a href="./vistas/da_vinci.html">La Gioconda<a>',
                  img: '<a href="./vistas/da_vinci.html"><img src="./Fotos/Leonardo_da_Vinci_-_Mona_Lisa.jpg" style="width:510px" align="center"><a>'},
                  {nombre: 'Pablo Picasso - ',
                  titulo: '<a href="./vistas/picasso.html">Guernica<a>',
                  img: '<a href="./vistas/picasso.html"><img src="./Fotos/guernica-picasso-cke.jpg" style="width:510px" align="center"><a>'},
                  {nombre: 'Vincent Van Gogh - ',
                  titulo: '<a href="./vistas/van_gogh.html">Noche Estrellada<a>',
                  img: '<a href="./vistas/van_gogh.html"><img src="./Fotos/van_gogh_noche_estrellada.jpg" style="width:510px" align="center"><a>' },
                  {nombre: 'Xul Solar - ',
                  titulo: '<a href="./vistas/xul_solar.html">Vuel Villa<a>',
                  img:'<a href="./vistas/xul_solar.html"><img src="./Fotos/xul_solar_vuel_villa.jpg" style="width:510px" align="center"><a>' },
                  {nombre: 'Benito Quinquela Martin - ',
                  titulo: '<a href="./vistas/quinquela_martin.html">El Puente de la Boca<a>',
                  img: '<a href="./vistas/quinquela_martin.html"><img src="./Fotos/quinquela_martin_el_puente_de_la_boca.jpg" style="width:510px" align="center"><a>'},
                  {nombre: 'Antonio Berni - ',
                  titulo: '<a href="./vistas/berni.html">Desocupados<a>',
                  img: '<a href="./vistas/berni.html"><img src="./Fotos/berni_desocupados.jpg" style="width:510px" align="center"><a>'},
                  {nombre: 'Ernesto Sabato - ',
                  titulo: '<a href="./vistas/sabato.html">Por Que Gritara<a>',
                  img: '<a href="./vistas/sabato.html"><img src="./Fotos/sabato_por_que_gritara.jpg" style="width:510px" align="center"><a>'}];

function funcionCargar() {

  var secPrin = document.getElementById("seccionPrincipal");
  secPrin.innerHTML= '<ul>';
  for(i=0; i<=listaIndex.length; i++){
    secPrin.innerHTML += '<li>' + listaIndex[i].nombre + listaIndex[i].titulo + '<br>'
                                + listaIndex[i].img + '</li>';

  }
  secPrin.innerHTML+= '</ul>';
}

funcionCargar();
