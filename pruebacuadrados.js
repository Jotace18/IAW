
/*jslint plusplus: true */
var funcion1 = $("#for");
funcion1.html();

function filaFor() {
 "use strict";
    var fila1="";
    // FOR para la primera linea
    for (num = 1; num < 11; num++) {
        fila1 += "<td>" + num + "</td>";
    }
    funcion1.html(fila1);

}



var funcion1 = document.getElementById("for"),
    funcion2 = document.getElementById("while"),
    funcion3 = document.getElementById("dowhile"),
    num = 1;

function filaFor() {
 "use strict";
    // FOR para la primera linea
    for (num = 1; num < 11; num++) {
        funcion1.innerHTML += "<td>" + num + "</td>";
    }
}

function filaWhile() {
    "use strict";
    
    // Se declara otra vez a uno, ya que al terminar el FOR la variable num equivale a 10
    num = 1;
    // WHILE para la segunda linea
    while (num >= 1 && num <= 10) {
        funcion2.innerHTML += "<td>" + num * num + "</td>";
        num++;
    }
}

function filaDowhile() {
    "use strict";
    // Se declara otra vez a una, ya que al terminar el WHILE la variable num equivale a 10
    num = 1;
    // DO WHILE para la tercera linea
    do {
       funcion3.innerHTML += "<td>" + num * num * num + "</td>";
        num++;
    } while (num >= 1 && num <= 10);
}

function Tabla() {
   
    filaFor();
    filaWhile();
   filaDowhile();
}