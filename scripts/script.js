// JavaScript

function myFunction() {
    var x = document.getElementById("Topnavlinks");
    if (x.className === "nav-links") {
        x.classname += " responsive";
    }
    else {
        x.className = "nav-links";
    }
}

