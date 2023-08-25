const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btnAgregartarea = document.querySelector('.b-t-n-agregar-tarea')

const listadoTareas = document.querySelector('.listado-tarea')

const db = window.localStorage

btnAgregartarea.onclick = () =>{
    let contacto = {
        id: Math.random(1,100)
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto)
}

cargarContactos(db)