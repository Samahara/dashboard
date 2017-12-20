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

var boton = document.getElementById('filter');

// Variables y funciones para pintar coders
var seleccionarOpcion = function(event){//Esta funcion indica que elemento detona el evento
    var indiceOpcion = event.target.selectedIndex;
    var sede = event.target[indiceOpcion].dataset.sede;
    var generacion = event.target[indiceOpcion].dataset.generacion;
    obtenerDatos(sede,generacion)
}
var obtenerDatos = function(sede,generacion){//esta función recorre la data para obtener la informacion
    var estudiantes = data[sede][generacion]["students"];
    document.getElementById("contenedor").innerHTML= "";
    for(var i = 0; i < estudiantes.length; i++){
        var nombre = estudiantes[i].name;
        var photo = estudiantes[i].photo;
        var sprint = estudiantes[i].sprints;

        generarCoders(nombre, photo, sprint)
    }
}
var generarCoders = function(nombre, photo, sprint){//Esta funcion crea elementos en el contenedor de coders. Es padre de estos elementos.
    var contenedorCoders = document.getElementById("contenedor");
    var imagen = document.createElement("img");
    var parrafoNombre = document.createElement("p");
    var parrafoSprint = document.createElement("p");
    var divCoder = document.createElement("div");
    var divInfo = document.createElement("div");

    imagen.src = photo;
    parrafoNombre.innerText = nombre;
    parrafoSprint.innerText = sprint; //se agrega texto con innerText

    divCoder.appendChild(imagen);//Se agregan los hijos al div
    divInfo.appendChild(parrafoNombre);
    divInfo.appendChild(parrafoSprint);
    divCoder.appendChild(divInfo);

    contenedorCoders.appendChild(divCoder);

}

boton.addEventListener('change', seleccionarOpcion);
