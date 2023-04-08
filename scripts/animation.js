'use strinct';

const psAnimation = (function() {


    let index = 0;
    const text = "Hi, nice to meet you!\nMy name is Pawel Szymczyk.\nI'm a software engineer,\ncurrently I'm working at QWARE.";
            

    function runWelcomeMessage() {
        //delay for 2500ms
        setTimeout(() => {

            setTimeout(() => {
                // show avatar
                document.querySelector(".avatar").classList.add('show');

                setTimeout(() => {
                    // show message
                    document.querySelector("#message").classList.add('show');

                    // start typing
                    startTyping("message");

                    // hide message
                    setTimeout(() => {
                        document.getElementById("message").innerHTML = "";
                        document.querySelector("#message").classList.remove('show');

                        // move avatar to top of the screen
                        setTimeout(() => {
                            document.querySelector(".avatar").classList.add('move');
                        }, 1000);
                        
                    }, 8000);

                }, 1000);
             } , 500);
        }, 2500);
    }


    function startTyping (id) {
        setTimeout(() => {
        index++;
        updateText(id);
        if (index < text.length) {
            startTyping(id);
        }
        }, 50)
    }



    function updateText(id) {
        // Get the element with our id
        const typing = document.getElementById(id); 
        // Split our text into lines based on newline characters or <br> tags
        const lines = text.substring(0, index).split(/\n|<br>/); 
      
        // Check if our element exists before updating it  
        if(typing == null){  
          return  
        }
      
        // Update the element with our new lines  
        typing.innerHTML = lines.map((line, index) => {  
      
          // Check if this is the last line in our text  
          const isLastLine = index === lines.length - 1;  
      
          // Add a line break if this isn't the last line of text  
          const lineBreak = isLastLine ? "" : "<br>";  
      
          // Return our line of text with or without a line break  
          return `${line}${lineBreak}`;  
      
        }).join("");
      
        // If we're done animating, hide stale cursor and show blinking cursor  
        // if (index === text.length) {  
        //   // hide the stale cursor
        //   document.getElementById("cursor-stale").style.display = "none";  
      
        //   // Add a cursor at the end of our animation that blinks
        //   typing.insertAdjacentHTML("beforeend", '<span class="cursor"></span>');  
      
        // }  
    }
    
    function startLoaderAnimation() {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".content").style.display = "none";
        document.querySelector(".loading").style.visibility = "visible";

        let progress = document.getElementById("progress");
        let width = 1;
         // control speed of page loading
        let id = setInterval(() => {
            if(width >= 100) {
                clearInterval(id);
            } else {
                width++;
                progress.value = width;
            }
        }, 25);
    }

    function finishLoaderAnimation() {
        //delay for 2.5s and bring body back.
        setTimeout(() => {
            psTheme.SetBackground();

            document.querySelector(".loading").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
            document.querySelector(".content").style.display = "grid";

            
        }, 2500);
    }


    // Public API
    return {
        RunWelcomeMessage: runWelcomeMessage,
        InitializeLoadingPageAnimation: startLoaderAnimation,
        FinishLoadingPageAnimation: finishLoaderAnimation
    };
})();