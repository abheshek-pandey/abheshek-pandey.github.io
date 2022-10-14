// JavaScript

// Automatically updates the Copyright Year in the page footer.
    const initialYear = 2022;
    let currentYear = new Date().getFullYear();
    if (initialYear == currentYear) {
        // sets copyright year in the following format: "(c) 20wx"
        document.getElementById("copyright-year").innerHTML = initialYear;
    } else{
        // sets copyright year in the following format: "(c) 20wx - 20yz"
        let doubleYear = initialYear.toString().concat(" - ", currentYear.toString());
        document.getElementById("copyright-year").innerHTML = doubleYear;
    }

//function myNavResponse() {
//    var x = document.getElementById("navRight");
//    if (x.className === "nav-right") {
//        x.className += " responsive";
//    }
//    else {
//        x.className = "nav-right";
//    }
//}
