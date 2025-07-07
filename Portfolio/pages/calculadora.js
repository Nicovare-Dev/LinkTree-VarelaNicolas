function agregarValor(valor) {
    document.getElementById('pantalla').value += valor;
}

function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}

function borrarUltimo() {
    let pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    let pantalla = document.getElementById('pantalla');
    try {
        pantalla.value = eval(pantalla.value);
    } catch {
        pantalla.value = 'Error';
    }
}
