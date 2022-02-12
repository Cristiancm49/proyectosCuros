var texto = document.getElementById("texto_Lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujoPorClick(){

  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var y1i, x1f;
  var espacio = ancho / lineas;

  while (l < lineas) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibawdujarLinea("red",0 ,yi, xf, 300);
    console.log("Linea" + l);
    l = l + 1;
  }

  for (var i = 0; i < lineas ; i++)  {
    y1i = espacio * i;
    x1f = 300 - (espacio*(i+1));
    dibujarLinea("red",300 ,y1i, x1f, 300);
    console.log("Linea" + i);

  }




}
