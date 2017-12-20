
console.log(data);

/*Variables reutilizables */
var filters = document.getElementById("button_select");
/*Función que detona el evento al escojer sede */
var selectSede = function(event) {
  var selectedIndex = (event.target.selectedIndex);
  var sede =event.target[selectedIndex].dataset.sede;
  var generation = event.target[selectedIndex].dataset.generation;
  information(sede, generation);
}
/*Función que recorre la información de data hasta obtener los datos de NPS  */
var information = function(sede, generation) {
  var otherName = data[sede][generation]["ratings"];
  for (var i =0; i<otherName.length; i++){
      var promoter = otherName[i]["nps"]["promoters"];
      var passive =otherName[i]["nps"]["passive"];
      var detractors =otherName[i]["nps"]["detractors"];
      }
  }

  var addPromoters =function(promoter) {
    var promoters = [];
    for (var i=0; i>promoter.length; i++) {
      
    }
  }
 /* Creando funcion que pinte elementos*/
 var paintElements  = function (AddPromoter) {
   var numberPromoter = document.createElement(span);


 }

filters.addEventListener("change", selectSede);
