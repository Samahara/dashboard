//Hacer uso de los datos de la variable desatar
/*console.log(data); */
// Funciones para los botones del menú (No mover)
var maincontainer = document.getElementById("main_container");
var buttonCoders = document.getElementById("coders");
var buttonOverview = document.getElementById("overview");
var buttonTeachers = document.getElementById("teachers");

var selectOption = function() {
  var option = event.target;
  console.log(option);
  if(option === buttonCoders){
    window.location="../views/coders.html";
  }else if(option === buttonOverview){
    window.location="../index.html";
  }else if(option === buttonTeachers){
    window.location="../views/teachers.html";
  }
}

buttonCoders.addEventListener("click", selectOption);
buttonOverview.addEventListener("click", selectOption);
buttonTeachers.addEventListener("click", selectOption);
