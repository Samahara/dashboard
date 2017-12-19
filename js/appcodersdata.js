console.log(data);


// Funciones para los botones del menú (No mover)
var maincontainer = document.getElementById('main_container');
var buttonCoders = document.getElementById('coders');
var buttonOverview = document.getElementById('overview');
var buttonTeachers = document.getElementById('teachers');

var selectOption = function() {
  var option = event.target;
  console.log(option);
  if(option === buttonCoders){
    window.location="../index.html";
  }else if(option === buttonOverview){
    window.location="../views/sede.html";
  }else if(option === buttonTeachers){
    window.location="../views/teachers.html";
  }
}

buttonCoders.addEventListener('click', selectOption);
buttonOverview.addEventListener('click', selectOption);
buttonTeachers.addEventListener('click', selectOption);

//Variables y funciones para pintar coders
var seleccionarOpcion = function(event){
    var indiceOpcion = (event.target.selectedIndex);
    var sede = event.target[indiceOpcion].dataset.sede;
    var generacion = event.target[indiceOpcion].dataset.generacion;
    obtenerDatos(sede,generacion)
}
var obtenerDatos = function(sede,generacion){
    var estudiantes = data[sede]["generaciones_estudiantes"][generacion]["estudiantes"];
    document.getElementById("contenedor-coders").innerHTML= "";
    for(var i = 0; i < 3; i += 1){
        var nombre = estudiantes[i].nombre;
        var turno =  estudiantes[i].turno;
        var mail = estudiantes[i].mail;
        pintarCoders(nombre,turno, mail);
    }
}
var pintarCoders = function(nombre,turno,mail){
    //contenedor padre de las tarjetas de coders.
    var contenedorCoders = document.getElementById("contenedor-coders");
    var parrafoNombre = document.createElement("p");
    var parrafoTurno = document.createElement("span");
    var parrafoCorreo = document.createElement("p");
    var imagen = document.createElement("img");
    var divCoder = document.createElement("div");

    imagen.src = "http://lorempixel.com/200/200/people/";
    imagen.classList.add("foto-coder");
    divCoder.classList.add("coder");
    parrafoNombre.innerText = nombre;
    parrafoTurno.innerText = turno;
    parrafoCorreo.innerText = mail;

    divCoder.appendChild(imagen);
    divCoder.appendChild(parrafoNombre);
    divCoder.appendChild(parrafoTurno);
    divCoder.appendChild(parrafoCorreo);

    contenedorCoders.appendChild(divCoder);
