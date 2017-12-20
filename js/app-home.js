var banner = document.getElementById('banner');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

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
