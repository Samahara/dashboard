// Variables reutilizables
var containerTeachers = document.getElementById('container_teachers');
var selectbutton = document.getElementById('buttonselect');

// Funcion de selección de opción
var select = function() {
  var eventSelection = event.target.selectedIndex;
  var sede = event.target.value;
  var year = event.target[eventSelection].dataset.generation;
  datInfo(sede, year)
}

var datInfo = function(sede, year) {
  var main = data[sede][year]['ratings'];
  containerTeachers.innerHTML = "";
  for (var i = 0; i < main.length; i++) {
    var teachers = main[i]['teacher'];
    var jedi = main[i]['jedi'];
    var sprint = main[i]['sprint'];
    var cumple = main[1]['student']['cumple'];
    var supera = main[1]['student']['supera'];

    // Suma para dar el porcentaje de satisfacción de estudiantes
    var averageStudents = (parseInt(cumple) + parseInt(supera));

    paintElements(sprint, teachers, jedi, averageStudents);

  }
}

var paintElements = function(sprint, teachers, jedi, averageStudents) {
  // Crear elementos
  var divContainer = document.createElement('div');
  var paragraphTeachers = document.createElement('p');
  var paragraphJedi = document.createElement('p');
  var paragraphSprint = document.createElement('p');
  var imageGraph = document.createElement('img');
  var divContainer2 = document.createElement('div');
  var imageStudents = document.createElement('img');
  var paragraphStudents = document.createElement('p');

  // Agregando atributos a los elementos creados
  imageGraph.src = "../assets/images/bar-graph.png";
  paragraphTeachers.innerText = "El promedio de los teachers es " + teachers;
  paragraphJedi.innerHTML = "El promedio de los jedi es " + jedi;
  paragraphSprint.innerHTML = sprint;
  imageStudents.src = "../assets/images/circle-graphic.png";
  paragraphStudents.innerHTML = "El porcentaje de estudiantes satisfechas en Laboratoria es del " + averageStudents + "%.";

  // Agregando elementos al div
  divContainer.appendChild(imageGraph);
  divContainer.appendChild(paragraphSprint);
  divContainer.appendChild(paragraphTeachers);
  divContainer.appendChild(paragraphJedi);
  divContainer2.appendChild(imageStudents);
  divContainer2.appendChild(paragraphStudents);

  // Agregando el div al HTML
  containerTeachers.appendChild(divContainer);
  containerTeachers.appendChild(divContainer2);
}

// Funciones para los botones del menú (No mover)
var maincontainer = document.getElementById('main_container');
var buttonCoders = document.getElementById('coders');
var buttonOverview = document.getElementById('overview');
var buttonTeachers = document.getElementById('teachers');

var selectOption = function() {
  var option = event.target;
  console.log(option);
  if (option === buttonCoders) {
    window.location = "../views/coders.html";
  } else if (option === buttonOverview) {
    window.location = "../views/sede.html";
  } else if (option === buttonTeachers) {
    window.location = "../index.html";
  }
}

buttonCoders.addEventListener('click', selectOption);
buttonOverview.addEventListener('click', selectOption);
buttonTeachers.addEventListener('click', selectOption);
selectbutton.addEventListener('change', select);
