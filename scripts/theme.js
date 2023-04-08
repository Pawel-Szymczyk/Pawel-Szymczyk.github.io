// -------------------------------------------
// file: theme.js
// build: #230408
// version: 1.0.0
// author: Pawel Szymczyk
// PS 2023
// -------------------------------------------

'use strinct';

const psTheme = (function() {

    /**
     * Change theme based on hour.
     */
    function setTheme() {
        const hour = new Date().getHours();
        if(hour >= 5 && hour < 22) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }
    
    /**
     * Update content in dark mode.
     */
    function setDarkTheme() {
        const matches = document.querySelectorAll(".nes-container");
        matches.forEach((match) => {
            match.classList.add('is-dark');
        });

        const message = document.querySelector(".nes-balloon");
        message.classList.add('is-dark');

        const inputs = document.querySelectorAll(".nes-input");
        inputs.forEach((input) => {
            input.classList.add('is-dark');
        });

        const textarea = document.querySelector(".nes-textarea");
        textarea.classList.add('is-dark');
    }

    /**
     * Update content in light mode.
     */
    function setLightTheme() {
        const matches = document.querySelectorAll(".nes-container");
        matches.forEach((match) => {
            match.classList.add('is-light');
        });

        const message = document.querySelector(".nes-balloon");
        message.classList.add('is-light');
    }

    /**
     * set 1 of 12 backgrounds depends on actual hour.
     */
    function setBackground() {

        let idx = -1;
        const hour = new Date().getHours();
        const backgrounds = [
            "/images/01-Early-Morning.png",
            "/images/02-Mid-Morning.png",
            "/images/03-Late-Morning.png",
            "/images/04-Early-Afternoon.png",
            "/images/05-Mid-Afternoon.png",
            "/images/06-Late-Afternoon.png",
            "/images/07-Early-Evening.png",
            "/images/08-Mid-Evening.png",
            "/images/09-Late-Evening.png",
            "/images/10-Early-Night.png",
            "/images/11-Mid-Night.png",
            "/images/12-Late-Night.png"
        ];
    
        // morning - 5am - 12pm
        // afternoon - 12pm - 5pm
        // evening - 5pm - 9pm
        // night - 9pm - 4am
        if(hour >= 5 && hour < 8) {
            idx = 0;
        } else if (hour >= 8 && hour < 11) {
            idx = 1;
        } else if (hour >= 11 && hour < 12) {
            idx = 2;
        } else if (hour >= 12 && hour < 14) {
            idx = 3;
        } else if (hour >= 14 && hour < 16) {
            idx = 4;
        } else if (hour >= 16 && hour < 17) {
            idx = 5;
        } else if (hour >= 17 && hour < 18) {
            idx = 6;
        } else if (hour >= 18 && hour < 20) {
            idx = 7;
        } else if (hour >= 20 && hour < 22) {
            idx = 8;
        } else if (hour >= 22 && hour < 24) {
            idx = 9;
        } else if (hour >= 24 && hour < 2) {
            idx = 10;
        } else {
            idx = 11;
        }
    
        document.querySelector("body").setAttribute("style", `background-image: url(${backgrounds[idx]})`);
      }

  
    // Public API
    return {
        SetTheme: setTheme,
        SetBackground: setBackground
    };
  })();