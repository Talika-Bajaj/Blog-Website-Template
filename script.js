const initApp = () => {
    let ham = document.getElementById("ham");
    let optList = document.getElementById("opt-list");
   
   const toggleMenu = () => {
        
        ham.classList.toggle("toggle-btn");
        optList.classList.toggle("hidden");
        // opt.classList.toggle("opt");
    }

    ham.addEventListener("click", toggleMenu);
    opt.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", initApp);