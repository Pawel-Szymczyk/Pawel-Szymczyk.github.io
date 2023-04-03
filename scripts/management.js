'use strinct';


document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        // on load...
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


    } else {


       
       
        //delay for 2500ms
        setTimeout(() => {
      
            document.querySelector(".loading").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
            document.querySelector(".content").style.display = "grid";

            setBackground();

            setTimeout(() => {
                // show avatar
                document.querySelector(".avatar").classList.add('show');

                setTimeout(() => {
                    // show bubble message
                    document.querySelector("#message").classList.add('show');

                    // start typing
                    typingAnimation( "message");

                }, 1000);
             } , 500);

        }, 2500);

        


        // rest code here 
        
       
    }
};

let index = 0;
const text = "Hi, nice to meet you!\nMy name is Pawel Szymczyk.\nI am a software engineer,\ncurrently I am working at QWARE.";
        
function typingAnimation (id) {
    setTimeout(() => {
      index++;
      updateText(id);
      if (index < text.length) {
        typingAnimation(id);
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













// const loader = document.querySelector(".loading");


// window.addEventListener('load', () => {
//     const loader = document.querySelector(".loader");
//     setTimeout(function() {
//         //loader.style.right = "0";
//         document.body.classList.remove("loading");
//       }, 5000);
// });


// function startLoader() {
//     const loader = document.querySelector(".loader");
  
//     setTimeout(function() {
//       //loader.style.right = "0";
      
//     }, 1000);
  
//     window.addEventListener("DOMContentLoaded", function(event) {
//       setTimeout(function() {
//         //loader.style.left = "100%";
//         document.body.classList.remove("loading");
//       }, 1500);
//     });
//   }
  
//   startLoader();




// function myfunction() {   
//     alert("how are you");  
//  }  


//  const aboutBtn = document.getElementById("about-btn");
//  if(aboutBtn) {
//     aboutBtn.addEventListener("click", function () {
//         alert("Ouch! Stop poking me!");
//       });
//  }
 