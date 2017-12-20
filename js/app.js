// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Variables reutilizables
var buttonCoders = document.getElementById('coders');
var buttonOverview = document.getElementById('overview');
var buttonTeachers = document.getElementById('teachers');
var banner = document.getElementById('banner');
var homeButton = document.getElementById('home');
var maincontainer = document.getElementById('main_container');

// Funciones para los botones del menú
var selectOption = function() {
  var option = event.target;
  console.log(option);
  if (option === buttonCoders) {
    window.location = "views/coders.html";
  } else if (option === buttonOverview) {
    window.location = "views/sede.html";
  } else if (option === buttonTeachers) {
    window.location = "views/teachers.html";
  }
}

buttonCoders.addEventListener('click', selectOption);
buttonOverview.addEventListener('click', selectOption);
buttonTeachers.addEventListener('click', selectOption);


// Funcion para el boton de Home
var selectHome = function() {
  window.location = "../index.html";
}

homeButton.addEventListener('click', selectHome);
