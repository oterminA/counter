
var cuenta = 0;
//funcion para aumentar el contador
function aumentar() {
    cuenta++;
    document.getElementById("numero").innerHTML = cuenta;
}




//funcion para disminuir el contador
function disminuir() {
    cuenta--;
    document.getElementById("numero").innerHTML = cuenta;
}



//funcion para borrar todo
function reset() {
    document.getElementById("numero").innerHTML = "0" ;
}