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
 