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

    paintElements(sprint, teachers, jedi)
  }
}

var paintElements = function(sprint, teachers, jedi) {
  // Crear elementos
  var divContainer = document.createElement('div');
  var paragraphTeachers = document.createElement('p');
  var paragraphJedi = document.createElement('p');
  var paragraphSprint = document.createElement('p');
  var imageGraph = document.createElement('img');

  // Agregando atributos a los elementos creados
  imageGraph.src = "../assets/images/bar-graph.png";
  paragraphTeachers.innerText = "El promedio de los teachers es " + teachers;
  paragraphJedi.innerHTML = "El promedio de los jedi es " + jedi;
  paragraphSprint.innerHTML = sprint;

  // Agregando elementos al div
  divContainer.appendChild(imageGraph);
  divContainer.appendChild(paragraphSprint);
  divContainer.appendChild(paragraphTeachers);
  divContainer.appendChild(paragraphJedi);

  // Agregando el div al HTML
  containerTeachers.appendChild(divContainer);

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
    window.location="../views/coders.html";
  } else if (option === buttonOverview) {
    window.location="../views/sede.html";
  } else if (option === buttonTeachers) {
    window.location="../index.html";
  }
}

buttonCoders.addEventListener('click', selectOption);
buttonOverview.addEventListener('click', selectOption);
buttonTeachers.addEventListener('click', selectOption);
selectbutton.addEventListener('change', select);
