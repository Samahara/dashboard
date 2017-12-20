
console.log(data);
/*Función que detona el evento al escojer sede */

var filters = document.getElementById("button_select");

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
      console.log(promoter);
      console.log(passive);
      console.log(detractors);
      }
  }

filters.addEventListener("change", selectSede);



/*  var aqp20171 = document.getElementById("AQP 2016-2");
  var cdm20172= document.getElementById("CDMX 2017-2");
  var cdm20171= document.getElementById("CDMX 2017-1");
  var lim20172 = document.getElementById("LIM 2017-2");
  var lim20171 = document.getElementById("LIM 2017-1");
  var lim20162= document.getElementById("LIM 2016-2");
  var scl20172 = document.getElementById("SCL 2017-2");
  var scl20171 = document.getElementById("SCL 2017-1");
  var scl20162= document.getElementById("SCL 2016-2");

  if (sede=== "AQP 2017-1"){
    console.log("AQP 2017-1");
    //ocultar otras geraciones
    aqp20162.stye.display="none";
    cdm20172.style.display="none";
    cdm20171.stye.display="none";
    lim20172.style.display="none";
    lim20171.stye.display="none";
    lim20162.style.display="none";
    scl20172.style.display="none";
    scl20171.stye.display="none";
    scl20162.style.display="none";
    //mostrar sede AQP 2017-1
    aqp20171.style.display="block";
  } else if (sede === "AQP 2016-2") {
    console.log("AQP 2016-2");
    //ocultar otras sedes
    aqp20171.stye.display="none";
    cdm20172.style.display="none";
    cdm20171.stye.display="none";
    lim20172.style.display="none";
    lim20171.stye.display="none";
    lim20162.style.display="none";
    scl20172.style.display="none";
    scl20171.stye.display="none";
    scl20162.style.display="none";
    //mostrar AQP 2016-2
    .style.display="block";
  } else if (sede === "CDMX 2017-2") {
    console.log("CDMX");
    //Ocultar otras generaciones
    aqp20171.stye.display="none";
    aqp20162.style.display="none";
    cdm20171.stye.display="none";
    lim20172.style.display="none";
    lim20171.stye.display="none";
    lim20162.style.display="none";
    scl20172.style.display="none";
    scl20171.stye.display="none";
    scl20162.style.display="none";
    //Mostrar generación CDMX 2017-2
    cdm20172.style.display="block";
  }else if (sede === "CDMX 2017-1") {
    console.log("CDMX 2017-1");
    //Ocultar otras generaciónes
    aqp20171.stye.display="none";
    aqp20162.style.display="none";
    cdm20172.stye.display="none";
    lim20172.style.display="none";
    lim20171.stye.display="none";
    lim20162.style.display="none";
    scl20172.style.display="none";
    scl20171.stye.display="none";
    scl20162.style.display="none";
    //Mostrar generación CDM 2017-1
    cdm20171.style.display="block";
  }else if (sede === "LIM 2017-2") {
    console.log("LIM 2017-2");
    //Ocultar otras generaciónes
    aqp20171.stye.display="none";
    aqp20162.style.display="none";
    cdm20171.stye.display="none";
    cdm20172.style.display="none";
    lim20171.stye.display="none";
    lim20162.style.display="none";
    scl20172.style.display="none";
    scl20171.stye.display="none";
    scl20162.style.display="none";
    //Mostrar generación LIM 2017-2
    lim20172.style.display="block";
  }else if (sede === "LIM 2017-1") {
    console.log("2017-1");
    //Ocultar otras generaciónes
    aqp20171.stye.display="none";
    aqp20162.style.display="none";
    cdm20171.stye.display="none";
    lim20172.style.display="none";
    cdm20172.stye.display="none";
    lim20162.style.display="none";
    scl20172.style.display="none";
    scl20171.stye.display="none";
    scl20162.style.display="none";
    //Mostrar generación LIM 2017-1
    lim20171.style.display="block";
  }else if (sede === "LIM 2016-2") {
    console.log("LIM 2016-2");
    //Ocultar otras generaciónes
    aqp20171.stye.display="none";
    aqp20162.style.display="none";
    cdm20171.stye.display="none";
    lim20172.style.display="none";
    lim20171.stye.display="none";
    cdm20172.style.display="none";
    scl20172.style.display="none";
    scl20171.stye.display="none";
    scl20162.style.display="none";
    //Mostrar generación LIM 2016-2
    lim20162.style.display="block";
  }else if (sede === "SCL 2017-2") {
    console.log("SCL 2017-2");
    //Ocultar otras generaciónes
    aqp20171.stye.display="none";
    aqp20162.style.display="none";
    cdm20171.stye.display="none";
    lim20172.style.display="none";
    lim20171.stye.display="none";
    lim20162.style.display="none";
    cdm20172.style.display="none";
    scl20171.stye.display="none";
    scl20162.style.display="none";
    //Mostrar generación SCL 2017-2
    scl20172.style.display="block";
  }else if (sede === "SCL 2017-1") {
    console.log("SCL 2017-1");
    //Ocultar otras generaciónes
    aqp20171.stye.display="none";
    aqp20162.style.display="none";
    cdm20171.stye.display="none";
    lim20172.style.display="none";
    lim20171.stye.display="none";
    lim20162.style.display="none";
    cdm20172.style.display="none";
    scl20172.stye.display="none";
    scl20162.style.display="none";
    //Mostrar generación SCL 2017-1
    scl20171.style.display="block";
  }else if (sede === "SCL 2016-2") {
    console.log("SCL 2016-2");
    //Ocultar otras generaciónes
    aqp20171.stye.display="none";
    aqp20162.style.display="none";
    cdm20171.stye.display="none";
    lim20172.style.display="none";
    lim20171.stye.display="none";
    lim20162.style.display="none";
    cdm20172.style.display="none";
    scl20171.stye.display="none";
    scl20172.style.display="none";
    //Mostrar generación SCL 2016-2
    scl20162.style.display="block";
  }

} /*Cierre de la función*/
/*
var cargarPagina = function () {

  var filter =event.target[selectedIndex].dataset.filter;
  var aqp20162 = document.getElementById("AQP 2017-1");
  var aqp20171 = document.getElementById("AQP 2016-2");
  var cdm20172= document.getElementById("CDMX 2017-2");
  var cdm20171= document.getElementById("CDMX 2017-1");
  var lim20172 = document.getElementById("LIM 2017-2");
  var lim20171 = document.getElementById("LIM 2017-1");
  var lim20162= document.getElementById("LIM 2016-2");
  var scl20172 = document.getElementById("SCL 2017-2");
  var scl20171 = document.getElementById("SCL 2017-1");
  var scl20162= document.getElementById("SCL 2016-2");
  aqp20171.stye.display="none";
  aqp20162.style.display="none";
  cdm20171.stye.display="none";
  lim20172.style.display="none";
  lim20171.stye.display="none";
  lim20162.style.display="none";
  cdm20172.style.display="none";
  scl20171.stye.display="none";
  scl20162.style.display="none";
  scl20172.style.display="none";

  var filters= document.getElementsByClassName("option");
filters.addEventListener("change", selectOption2);

}

cargarPagina ();
*/
