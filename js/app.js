
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// Variables reutilizables
var maincontainer = document.getElementById('main_container');
var buttonCoders = document.getElementById('coders');
var buttonOverview = document.getElementById('overview');
var buttonTeachers = document.getElementById('teachers');

// Funciones para los botones del menú
var selectOption = function() {
  var option = event.target;
  console.log(option);
  if(option === buttonCoders){
    maincontainer.style.backgroundColor = "pink";
  }else if(option === buttonOverview){
    maincontainer.style.backgroundColor = "green";
  }else if(option === buttonTeachers){
    maincontainer.style.backgroundColor = "blue";
  }
}

buttonCoders.addEventListener('click', selectOption);
buttonOverview.addEventListener('click', selectOption);
buttonTeachers.addEventListener('click', selectOption);



   }
}

boton.addEventListener("click", showMenu);
