//Hacer uso de los datos de la variable desatar
console.log(data);
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Friends', 2],
  ['Eat', 2],
  ['TV', 3],
  ['Gym', 2],
  ['Sleep', 7]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':400, 'height':300};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

/*//Variables reutilizables
var selectbutton = document.getElementByTag("option");

//Función de eleccion de opción
var select = function () {
  var eventselection = event.target;
  var option = eventselection.selectedIndex;

  if (option ===1){
    var ratings = data["AQP"]["2016-2"]["ratings"];
    for(var i=0; i<ratigs.length; i++)
    console.log(ratings[i]["jedi"]);
  } else if (option==2){
    console.log("escogiendo la opcion 2")
  }
}

selectbutton.addEventListener("change", select);
*/
