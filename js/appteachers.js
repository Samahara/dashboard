// Variables reutilizables
var selectbutton = document.getElementById('buttonselect');
var containerTeachers = document.getElementById('container_teachers');

// Funcion de selección de opción
var select = function() {
  var eventselection = event.target;
  var option = eventselection.selectedIndex;

  if (option === 1) {
    var aqp20162 = data['AQP']['2016-2']['ratings'];
    var aqp20171 = data['AQP']['2017-1']['ratings'];
    for (var i = 0; i < aqp20162.length; i++) {
      console.log(aqp20162[i]['sprint']);
      console.log(aqp20162[i]['jedi']);
      console.log(aqp20162[i]['teacher']);
    }
    for (var i = 0; i < aqp20171.length; i++) {
      console.log(aqp20171[i]['sprint']);
      console.log(aqp20171[i]['jedi']);
      console.log(aqp20171[i]['teacher']);
    }
  } else if (option === 2) {
    var cdmx20171 = data['CDMX']['2017-1']['ratings'];
    var cdmx20172 = data['CDMX']['2017-2']['ratings'];
    for (var i = 0; i < cdmx20171.length; i++) {
      console.log(cdmx20171[i]['sprint']);
      console.log(cdmx20171[i]['jedi']);
      console.log(cdmx20171[i]['teacher']);
    }
    for (var i = 0; i < cdmx20172.length; i++) {
      console.log(cdmx20172[i]['sprint']);
      console.log(cdmx20172[i]['jedi']);
      console.log(cdmx20172[i]['teacher']);
    }
  } else if (option === 3) {
    var lim20162 = data['AQP']['2016-2']['ratings'];
    var lim20171 = data['AQP']['2017-1']['ratings'];
    var lim20172 = data['AQP']['2017-1']['ratings'];
    for (var i = 0; i < lim20162.length; i++) {
      console.log(lim20162[i]['sprint']);
      console.log(lim20162[i]['jedi']);
      console.log(lim20162[i]['teacher']);
    }
    for (var i = 0; i < lim20171.length; i++) {
      console.log(lim20171[i]['sprint']);
      console.log(lim20171[i]['jedi']);
      console.log(lim20171[i]['teacher']);
    }
    for (var i = 0; i < lim20172.length; i++) {
      console.log(lim20172[i]['sprint']);
      console.log(lim20172[i]['jedi']);
      console.log(lim20172[i]['teacher']);
    }
  } else if (option === 4) {
    var scl20162 = data['AQP']['2016-2']['ratings'];
    var scl20171 = data['AQP']['2017-1']['ratings'];
    var scl20172 = data['AQP']['2017-1']['ratings'];
    for (var i = 0; i < scl20162.length; i++) {
      console.log(scl20162[i]['sprint']);
      console.log(scl20162[i]['jedi']);
      console.log(scl20162[i]['teacher']);
    }
    for (var i = 0; i < scl20171.length; i++) {
      console.log(scl20171[i]['sprint']);
      console.log(scl20171[i]['jedi']);
      console.log(scl20171[i]['teacher']);
    }
    for (var i = 0; i < scl20172.length; i++) {
      console.log(scl20172[i]['sprint']);
      console.log(scl20172[i]['jedi']);
      console.log(scl20172[i]['teacher']);
    }
  } else {
    //containerTeachers.innerHTML("");
  }
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
