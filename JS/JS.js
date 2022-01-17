
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

window.onscroll = function() {myFunctions()};
var search = document.getElementById("search");
var sticky = search.offsetTop;

function myFunctions() {
  if (window.pageYOffset >= sticky) {
    search.classList.add("sticky")
  } else {
    search.classList.remove("sticky");
  }
}



window.onscroll = function() {myFunction()};
var table = document.getElementById("table");
var sticky = table.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    table.classList.add("sticky")
  } else {
    table.classList.remove("sticky");
  }
}