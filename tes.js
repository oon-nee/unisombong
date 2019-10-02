
function hitung(){
  var avg; 
  var mid ;
  var hi ;
  var lo;
  var in1 = parseInt(document.getElementById("forma").value);
  var in2 = parseInt(document.getElementById("formb").value);
  var in3 = parseInt(document.getElementById("formc").value);

  avg = parseFloat((in1 + in2 + in3)/3);
  if (in1 > in2 && in2 > in3) {
    lo = in1;
    mid = in2;
    hi = in3;
  }

 else if (in1 > in3 && in3 > in2) {
    lo = in1;
    mid = in3;
    hi = in2;
  }

  else  if (in2 > in1 && in1 > in3) {
    lo = in2;
    mid = in1;
    hi = in3;
  }

  else  if (in2 > in3 && in3 > in1) {
    lo = in2;
    mid = in3;
    hi = in1;
  }

  else  if (in3 > in1 && in1 > in2) {
    lo = in3;
    mid = in1;
    hi = in2;
  }

  else if (in3 > in2 && in2 > in1) {
    lo = in3;
    mid = in2;
    hi = in1;
  }
  document.getElementById("hio").innerHTML=hi;
  document.getElementById("avgo").innerHTML=avg;
  document.getElementById("loo").innerHTML=lo;
  document.getElementById("mio").innerHTML=mid;
  
}

function clear(){
  var avg = 0; 
  var mid = 0;
  var hi = 0;
  var lo = 0;

  document.getElementById("hio").innerHTML=hi;
  document.getElementById("avgo").innerHTML=avg;
  document.getElementById("loo").innerHTML=lo;
  document.getElementById("mio").innerHTML=mid;
}


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

