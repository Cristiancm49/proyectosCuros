var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
  url: "tile.png", cargaOK: false
}
var vaca = {
  url : "vaca.webp",  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src =fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();

}
function cargarVacas(){
  vaca.cargaOK = true;
  dibujar();
}

function dibujar(){
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);

  }
  if (vaca.cargaOK) {
    var cantidad = aleatorio(5,25);
    for (var i = 0; i < cantidad; i++) {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(vaca.objeto, x, y);

    }

  }

}


function aleatorio (min, max){
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
