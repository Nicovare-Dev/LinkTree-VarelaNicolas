function agregarTarea() {
    const entrada = document.getElementById('entrada-tarea');
    const texto = entrada.value.trim();

    if (texto === '') return;

    const lista = document.getElementById('lista-tareas');

    const nuevoItem = document.createElement('li');

    nuevoItem.innerHTML = `
        <span onclick="marcarHecha(this)">${texto}</span>
        <button onclick="eliminarTarea(this)">Eliminar</button>
    `;

    lista.appendChild(nuevoItem);
    entrada.value = '';
}

function marcarHecha(elemento) {
    elemento.parentElement.classList.toggle('hecha');
}

function eliminarTarea(boton) {
    const item = boton.parentElement;
    item.remove();
}
