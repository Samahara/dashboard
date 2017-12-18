// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

/*Funciones de la sección teachers*/

/*Funciones de la sección coders*/
var boton = document.getElementById("btn");/*variable que sirve para llamar al elemento html por su id*/

function showMenu() {
   var menu = document.getElementById("opcs-menu");/*En esta variable se guarda el nav que tiene el id opcs-menu*/

   if(menu.classList.contains("disable-menu")){/*Si vrificamos que este elemento contiene esta clase entonces quitamos la clase que provoca que los elementos se oculten y agregamos la clase que muestra*/

     menu.classList.remove("disable-menu");
     menu.classList.add("enabled-menu");
   }
   else{
     menu.classList.remove("enabled-menu")
     menu.classList.add("disable-menu")

   }
}

boton.addEventListener("click", showMenu);
