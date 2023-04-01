'use strinct';


document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loading").style.visibility = "visible";

        let progress = document.getElementById("progress");
        let width = 1;
        let id = setInterval(frame, 25);

        // control speed of page loading
        function frame() {
            if(width >= 100) {
                clearInterval(id);
            } else {
                width++;
                progress.value = width;
            }
        }


        
        
    } else {
       
        //delay for 2500ms
        setTimeout(function() {
      
            document.querySelector(".loading").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
        }, 2500);
    }
};







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
 