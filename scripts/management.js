// -------------------------------------------
// file: management.js
// build: #230408
// version: 1.0.0
// author: Pawel Szymczyk
// PS 2023
// -------------------------------------------

'use strinct';

/**
 * Run loading program when loading page, and load content after page is ready.
 */
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        // ---------------------------------------------------------------
        // start loading page...
        //
        psAnimation.InitializeLoadingPageAnimation();
    } else {

        addExperienceSection();
        addOvertimeProjectsSection();
        addNavigation();
        
        // ---------------------------------------------------------------
        // set theme...
        //
        psTheme.SetTheme();
    
        // ---------------------------------------------------------------
        // finish loading page and run welcome message...
        //
        psAnimation.FinishLoadingPageAnimation();
        psAnimation.RunWelcomeMessage();
    }
};


/**
 * Add navigation to page.
 */
function addNavigation() {
    let about = document.querySelector(".about-container");
    let experience = document.querySelector(".experience-container");
    let contact = document.querySelector(".contact-container");
    
    addAboutEventListener(about, contact, experience);
    addExperianceEventListener(about, contact, experience);
    addContactEventListener(about, contact, experience);
}


/**
 * Add "click" event listener to about section, toggle other sections depends on case
 * @param {object} about - about section
 * @param {object} contact - contact section
 * @param {object} experience - experience section 
 */
function addAboutEventListener(about, contact, experience) {
    // about
    document.getElementById("about-btn").addEventListener("click", () => {
            
        if(about.style.display === "none") {
            experience.style.display = "none";
            contact.style.display = "none";
            about.style.display = "block";
        } else {
            about.style.display = "none";
        }
    });
}


/**
 * Add "click" event listener to contact section, toggle other sections depends on case
 * @param {object} about - about section
 * @param {object} contact - contact section
 * @param {object} experience - experience section 
 */
function addContactEventListener(about, contact, experience) {
    // contact
    document.getElementById("contact-btn").addEventListener("click", () => {
            
        if(contact.style.display === "none") {
            experience.style.display = "none";
            about.style.display = "none";
            contact.style.display = "block";
        } else {
            contact.style.display = "none";
        }
    });
}


/**
 * Add "click" event listener to experience section, toggle other sections depends on case
 * @param {object} about - about section
 * @param {object} contact - contact section
 * @param {object} experience - experience section 
 */
function addExperianceEventListener(about, contact, experience) {
    // experiance
    document.getElementById("experience-btn").addEventListener("click", () => {
            
        if(experience.style.display === "none") {
            contact.style.display = "none";
            about.style.display = "none";
            experience.style.display = "flex";
        } else {
            experience.style.display = "none";
        }
    });
}


/**
 * Add Experience section to page, adds paging allowing to split content on multiple pages. 
 */
function addExperienceSection() {
    
    const pages = document.getElementsByClassName("experience-section");

    // pager
    let activePage = 1;
    let firstPage = 1;
    let lastPage = pages.length;

    const previousBtn = document.getElementById("experience-previous-btn");
    const nextBtn = document.getElementById("experience-next-btn");

    // initialize first page
    document.getElementById("experience-page-1").style.display = "flex";
    previousBtn.classList.add("is-disabled");

    // initialize pager
    let activePageElement = document.getElementById("experience-active-page");
    activePageElement.textContent = activePage;
    document.getElementById("experience-last-page").textContent = lastPage;


    previousBtn.addEventListener("click", ()=> {
        // check if this is first item in array
        nextBtn.classList.remove("is-disabled");
        
        if(activePage > firstPage) {
            activePage--;
            if(activePage == firstPage) {
                // disable btn
                previousBtn.classList.add("is-disabled");
            }

            // update each page, displaying active and hide rest
            Array.from(pages).forEach((item, index) => {
                item.style.display = "none";
                if(activePage === index+1) {
                    item.style.display = "flex";
                  } 
            });

            // update active page
            document.getElementById("experience-active-page").textContent = activePage;
        }
        
    });

    nextBtn.addEventListener("click", ()=> {
        previousBtn.classList.remove("is-disabled");

        if(activePage < lastPage) {
            activePage++;
            if(activePage == lastPage) {
                // disable btn
                nextBtn.classList.add("is-disabled");
            }

            // update each page, displaying active and hide rest
            Array.from(pages).forEach((item, index) => {
                item.style.display = "none";
                if(activePage === index+1) {
                    item.style.display = "flex";
                  } 
            });

            // update active page
            document.getElementById("experience-active-page").textContent = activePage;
        } 

    });


}


/**
 * Add overtime projects section to page, adds paging allowing to split cards on multiple pages. 
 */
function addOvertimeProjectsSection() {

    const pages = document.getElementsByClassName("overtime-projects-section");

    // pager
    let activePage = 1;
    let firstPage = 1;
    let lastPage = pages.length;

    const previousBtn = document.getElementById("overtime-projects-previous-btn");
    const nextBtn = document.getElementById("overtime-projects-next-btn");

    // initialize first page
    document.getElementById("overtime-projects-page-1").style.display = "flex";
    previousBtn.classList.add("is-disabled");

    // initialize pager
    document.getElementById("overtime-projects-active-page").textContent = activePage;
    document.getElementById("overtime-projects-last-page").textContent = lastPage;

    previousBtn.addEventListener("click", ()=> {
        // check if this is first item in array
        nextBtn.classList.remove("is-disabled");
        
        if(activePage > firstPage) {
            activePage--;
            if(activePage == firstPage) {
                // disable btn
                previousBtn.classList.add("is-disabled");
            }

            // update each page, displaying active and hide rest
            Array.from(pages).forEach((item, index) => {
                item.style.display = "none";
                if(activePage === index+1) {
                    item.style.display = "flex";
                  } 
            });

            // update active page
            document.getElementById("overtime-projects-active-page").textContent = activePage;
        }
        
    });

    nextBtn.addEventListener("click", ()=> {
        previousBtn.classList.remove("is-disabled");

        if(activePage < lastPage) {
            activePage++;
            if(activePage == lastPage) {
                // disable btn
                nextBtn.classList.add("is-disabled");
            }

            // update each page, displaying active and hide rest
            Array.from(pages).forEach((item, index) => {
                item.style.display = "none";
                if(activePage === index+1) {
                    item.style.display = "flex";
                  } 
            });

            // update active page
            document.getElementById("overtime-projects-active-page").textContent = activePage;
        } 
    });
}


