
/* TRABAJO PRACTICO FRONT END CURSO 2166 INTEGRANTES NATALIA VILLAGRAN, HERNAN CISNERO */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }