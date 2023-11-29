'use strict'

// Importo la clase desde su carpeta del directorio MCV
// import {Socios} from '..model/objects.js'
console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

// TODO: array para añadir los socios
const arraySocios = []


// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = './model/datosSocios.json'

  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
      console.log('Datos', data)
    })
  })
}

/* 
TODO:  metodo para añadir socios al array 
    cuando arranca la pagina web
*/
function aniadirSociosInicialesArray () {
  //  TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
  fs.readFileSync('../model/datosSocios.json')
  var fichero = JSON.parse(data)
  //Con un bucle FOR recorro el JSON parseado para crear nuevos objetos
  for (let i = 0; i < fichero.length; i++) {
    //Creo un nuevo objeto de la clase Socios
    let socio = new Socio(fichero[i].id, fichero[i].nombre, fichero[i].apellido)
    //Añado el objeto a la última posición disponible del array
    arraySocios.push(socio)
  }
}

/*
    TODO: Meotodo para capturar los datos del socio introducidor en el formulario

*/
function capturarDatosSocio () {
  // TODO: recoger el nombre y apellido del HTML
  let id = crearID()
  let nombre = document.getElementById("fnombre").value
  let apellido = document.getElementById("fapellido").value
  // TODO: crear el socio y añadirlo al array 
  let socioNuevo = new Socio(id, nombre, apellido)
  arraySocios.push(socioNuevo)
  
  console.log('socio ' + nombre + ' ' + apellido + ' añadido')
}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */
function crearSocio (nombre, apellido) {
  // TODO: crear objeto socio
  let id = crearID()
  let socioNuevo = new Socio(id, nombre, apellido)
  // TODO: añadir el objeto al array
  arraySocios.push(socioNuevo)
}

/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno
  //Al coincidir el último ID con la longitud del array, se suma 1 a la longitud
  return arraySocios.length + 1
   
}

// EJERCICIO 2

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  //borramos todo lo que hay en el div 
  document.getElementById('contenedorPintarSocios').innerHTML = ''
  for (let i=0;i<arraySocios.length;i++) {
    //creamos una etiqueta <li> por cada socio y a continuación escribimos los datos del socio
    let li = document.createElement('LI')
    let id = arraySocios[i].id 
    let nombre = arraySocios[i].nombre 
    let apellido = arraySocios[i].apellido
    li.textContent = 'Socio número ' + id + ': ' + nombre + ' ' + apellido
    //agregamos el elemento li al contenedor
    document.getElementById('contenedorPintarSocios').appendChild(li)
    }
  //TODO: debemos añadir los socios a la pagina web

}

// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa
cargarSociosJSON()
pintarListaSocios()

console.log('Acaba el programa')
