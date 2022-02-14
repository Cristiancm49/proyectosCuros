var imagenes= [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinaurio"] = "cerdo.png";
imagenes["perrauro"] = "perro.png";
imagenes["lbomin"] = "lobo.png";


var cauchin = new Pakiman("Cauchin", 120, 50);
var pokacho = new Pakiman ("Pokacho", 140, 50);
var tocinaurio = new Pakiman("Tocinaurio", 140, 60);
var lbomin = new Pakiman("Lobomani", 190, 50);
var perrauro = new Pakiman("Perrauro", 100, 50);


var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman ("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinaurio", 120, 40));
coleccion.push(new Pakiman("Lobomani", 190, 50));
coleccion.push(new Pakiman("Perrauro", 100, 50));

for (var pakin of coleccion) {
  pakin.mostrar();

}
