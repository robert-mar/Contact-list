//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
//Crea una función para añadir un nuevo contacto a una lista
//Crea una función para borrar un contacto existente de la lista
//Crea una función para imprimir en consola los contactos presentes en la lista


//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
let listacontactos = [
    "Daniel Gomez", 
    "Doris Rosales", 
    "Arturo Licona"
];

//Creando función añadir un nuevo contacto
let agregarcontacto = (NombreApellido) => {
    listacontactos.push(NombreApellido);
};

//Creando función para borrar un contacto
const borrarContacto = (NombreApellido) => {
    let indice = listacontactos.indexOf(NombreApellido);
    console.log(indice)

    listacontactos.splice(indice, 1);
};

//Creando función para imprimir en consola los contactos
const imprimirLista = (listacontactos) => {
    for (let indice = 0;indice < listacontactos.lenght; indice++) {
        console.log(indice + 1, "", listacontactos[indice]);
        console.log("___________________");
    }
};

console.log(listacontactos);

agregarcontacto("Daniel Gomez");
console.log(listacontactos);
borrarContacto("Arturo Licona");
console.log(listacontactos);
imprimirLista(listacontactos);

