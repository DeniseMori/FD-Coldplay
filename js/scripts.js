/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var deButton = document.querySelector("h4");
var formulier = document.querySelector("form");

function formulierZien() {
	formulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", formulierZien);



/* Weet niet zo goed hoe ik die radio buttons nou klikbaar maak dat ze filteren op classes en wil er niet nog meer tijd verspillen als ik er niet uit kom */

var chuteKlik = document.querySelector("#Parachutes");
var parachutes = document.querySelector('.Parachutes');

function showChutes () {
    
}

chuteKlik.addEventListener("click", showChutes);