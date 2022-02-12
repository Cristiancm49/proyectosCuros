class Billete {
  constructor(v, c){
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero(){
  var dineroCaja = 0;
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (var vi of caja) {
    dineroCaja+=(vi.valor*vi.cantidad);
    }
    console.log(dineroCaja);
  if (dinero<=dineroCaja) {
    for (var bi of caja) {

      if(dinero=>10){
        div = Math.floor(dinero/bi.valor);

        if(div>bi.cantidad){
          papeles = bi.cantidad;
           }else {
          papeles = div;
         }
        entregado.push(new Billete(bi.valor, papeles));
        dinero = dinero - (bi.valor * papeles);
      }

   }
   for(var e of entregado){
     if (e.cantidad>0) {
       resultado.innerHTML += e.cantidad + " Billetes de $ " + e.valor + "<br />";
     }
   }
   console.log(entregado);
 }else {
   resultado.innerHTML = "No hay dinero suficiente en el cajero";

 }


}
function saldoEnCajero(){




  console.log(dineroCaja);
}

var caja = [];
var entregado = [];
caja.push(new Billete(100,3));
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));
caja.push(new Billete(5,2));
caja.push(new Billete(2,2));
caja.push(new Billete(1,2));
var dinero=0;

var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
