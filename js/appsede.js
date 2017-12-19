
console.log(data);

// Funciones para los botones del menú (No mover)
var selectbutton = document.getElementById('buttonselect');
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
    window.location = "../index.html";
  } else if (option === buttonTeachers) {
    window.location = "../views/teachers.html";
  }
}

buttonCoders.addEventListener('click', selectOption);
buttonOverview.addEventListener('click', selectOption);
buttonTeachers.addEventListener('click', selectOption);

/*
//Variables reutilizables
var filters = document.getElementById("button_select");
//Función que detona el evento al escojer sede
var selectSede = function(event) {
  var selectedIndex = (event.target.selectedIndex);
  var sede =event.target[selectedIndex].dataset.sede;
  var generation = event.target[selectedIndex].dataset.generation;
  information(sede, generation);
}
// Función que recorre la información de data hasta obtener los datos de NPS
var information = function(sede, generation) {
  var otherName = data[sede][generation]["ratings"];
  for (var i =0; i<otherName.length; i++){
      var promoter = otherName[i]["nps"]["promoters"];
      var passive =otherName[i]["nps"]["passive"];
      var detractors =otherName[i]["nps"]["detractors"];
      console.log(promoter);
      console.log(passive);
      console.log(detractors);
      }
  }

filters.addEventListener("change", selectSede);
*/
