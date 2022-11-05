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

// Grab emelents
    const selectElement = selector => {
        const element = document.querySelector(selector)
        if(element) return element;
        throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly`);
    };

// Show menu on response
    function menuButton() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
        }
    }

// Theme change
    const bodyElement = document.body;
    const themeToggleBtn = selectElement('#theme-toggle-button');
    const currentTheme = localStorage.getItem('currentTheme');

    if(currentTheme){
        bodyElement.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-theme');

        if(bodyElement.classList.contains('dark-theme')){
            localStorage.setItem('currentTheme', 'themeActive');
        }else{
            localStorage.removeItem('currentTheme');
        }
    });

// 
