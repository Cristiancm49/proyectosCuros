var imagenes= [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinaurio"] = "cerdo.png";


var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman ("Pokacho", 80, 50);
var tocinaurio = new Pakiman("Tocinaurio", 120, 40);


var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman ("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinaurio", 120, 40));

for (var pakin of coleccion) {
  pakin.mostrar();

}
