// Variables reutilizables
var selectbutton = document.getElementById('buttonselect');

// Funcion de selección de opción
var select = function() {
  var eventselection = event.target;
  var option = eventselection.selectedIndex;

  if (option === 1) {
    var ratings = data['AQP']['2016-2']['ratings'];
    for (var i = 0; i < ratings.length; i++) {
      console.log(ratings[i]['jedi']);
      console.log(ratings[i]['teacher']);
    }
  } else if (option === 2) {
    console.log("escogieron la opción 2");
  }else if(option === 3){
    console.log("escogieron la opción 3");
  }else if(option === 4){
    console.log("escogieron la opción 4");
  }else{
    console.log("escogieron la opción 0");
  }
}

var maincontainer = document.getElementById('main_container');
var buttonCoders = document.getElementById('coders');
var buttonOverview = document.getElementById('overview');
var buttonTeachers = document.getElementById('teachers');

// Funciones para los botones del menú
var selectOption = function() {
  var option = event.target;
  console.log(option);
  if(option === buttonCoders){
    window.location="../views/coders.html";
  }else if(option === buttonOverview){
    window.location="../views/sede.html";
  }else if(option === buttonTeachers){
    window.location="../views/teachers.html";
  }
}

buttonCoders.addEventListener('click', selectOption);
buttonOverview.addEventListener('click', selectOption);
buttonTeachers.addEventListener('click', selectOption);
selectbutton.addEventListener('change', select);
