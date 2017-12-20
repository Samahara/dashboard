// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Variables reutilizables
var maincontainer = document.getElementById('main_container');
var buttonCoders = document.getElementById('coders');
var buttonOverview = document.getElementById('overview');
var buttonTeachers = document.getElementById('teachers');
var homeButton = document.getElementById('home');
var banner = document.getElementById('banner');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

// Funciones para los botones del menú
var selectOption = function() {
  var option = event.target;
  console.log(option);
  if (option === buttonCoders) {
    window.location="views/coders.html";
  } else if (option === buttonOverview) {
    window.location="views/sede.html";
  } else if (option === buttonTeachers) {
    window.location="views/teachers.html";
  }
}

// Funcion para el boton de Home
var selectHome = function() {
  window.location="../index.html"
}

var backgroundPhoto = function() {
  var election = event.target;

  if (election === button1) {
    banner.style.backgroundImage = "url(assets/images/photo1.jpg)";
    button1.style.background = "#FFC107";
    button2.style.background = "#DCDCDC";
    button3.style.background = "#DCDCDC";
  } else if (election === button2) {
    banner.style.backgroundImage = "url(assets/images/photo2.jpg)";
    button2.style.background = "#FFC107";
    button1.style.background = "#DCDCDC";
    button3.style.background = "#DCDCDC";
  } else if (election === button3) {
    banner.style.backgroundImage = "url(assets/images/photo3.jpg)";
    button3.style.background = "#FFC107";
    button1.style.background = "#DCDCDC";
    button2.style.background = "#DCDCDC";
  }
}

button1.addEventListener('click', backgroundPhoto);
button2.addEventListener('click', backgroundPhoto);
button3.addEventListener('click', backgroundPhoto);
buttonCoders.addEventListener('click', selectOption);
buttonOverview.addEventListener('click', selectOption);
buttonTeachers.addEventListener('click', selectOption);
homeButton.addEventListener('click', selectHome);
