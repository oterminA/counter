const botonAumentar = document.getElementById('btn-aumentar');
const botonDisminuir = document.getElementById('btn-disminuir');
const botonResetear = document.getElementById('btn-resetear');
const numero = document.getElementById('numero');
let cuenta = 0;

//funcion para aumentar el contador
function aumentar() {
    cuenta++;
    numero.innerHTML = cuenta;
}

//funcion para disminuir el contador
function disminuir() {
    cuenta--;
    numero.innerHTML = cuenta;
}

//funcion para borrar todo
function resetear() {
    cuenta = 0;
    numero.innerHTML = cuenta ;
}

botonAumentar.addEventListener('click', aumentar);
botonDisminuir.addEventListener('click', disminuir);
botonResetear.addEventListener('click', resetear);
