/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


/* style sheet veranderen / darkmodus */
/* Vraagt het plaatje/knopje van de halve maan op */
var maan = document.querySelector("#sunset");

    function darkModus () {
        /* Veranderd het pad van de href in het link elementje, in de html staat hier de css gelinkt */
        document.querySelector('link').setAttribute('href', 'styles/style-dark.css');
    }

/* Wanneer er geklikt wordt op de halve maan wordt de functie uitgevoerd */
maan.addEventListener("click", darkModus);

/* style sheet terugveranderen naar lightmodus */
/* Vraagt het plaatje/knopje van de zon op */
var zon = document.querySelector("#sunrise");

    function lightModus () {
        /* Veranderd het pad van de href in het link elementje, in de html staat hier de css gelinkt */
        document.querySelector('link').setAttribute('href', 'styles/style.css');
    }

/* Wanneer er geklikt wordt op de zon wordt de functie uitgevoerd */
zon.addEventListener("click", lightModus);

/* Variablen die de h4 opvragen, wat het knopje wordt, en het formulier, wat tevoorschijn moet komen */
var deButton = document.querySelector("h4");
var formulier = document.querySelector("form");

function formulierZien() {
    /* Hier wordt de class van het formulier veranderd zodat deze tevoorschijn komt */
	formulier.classList.toggle("toonForm");
}

/* Wanneer er op de h4 wordt geklikt komt het formulier tevoorschijn */
deButton.addEventListener("click", formulierZien);



/* Mooie code, mede mogelijk gemaakt door Sanne 't Hooft omdat ik het zelf niet voor elkaar kreeg :) */

/* Functie die de actie van het filteren uitvoert */
function filterenMaar (event) {
    /* Variable die de main opvraagt */
    var deLijst = document.querySelector("main");
    /* Geeft de main een blanco class name */
    deLijst.className = "";
    /* Hier wordt er een class toegevoegd als er een radio button wordt aangeklikt */
    deLijst.classList.add(event.target.value);
}
/* Wanneer er een radio button wordt aangeklikt wordt de functie uitgevoerd */
formulier.addEventListener("change", filterenMaar);
