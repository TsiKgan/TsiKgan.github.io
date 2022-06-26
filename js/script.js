
// window.addEventListener("load", ()=>{
//     /*--preloader--*/
//     document.querySelector(".js-preloader").classList.add("fade-out");
//     setTimeout(()=>{
//         document.querySelector(".js-preloader").style.display= "none";
//     },600)
// })

/*------------ About Tabs -----------------*/
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");
// aboutImage = document.querySelector(".abtrow");
// aboutText = document.querySelector(".tab-content");

tabsContainer.addEventListener("click", (e) =>{
        if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute("data-target");
        console.log(target);

        
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");

        
        // aboutSection.querySelector(target).classList.add("active");
        // 
        // aboutSection.querySelector(target).classList.add("active");
        
        
    }
});


/*----------------Nav ---------------------------- */
const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navToggle(){
    nav.classList.toggle("active")
    navToggler.classList.toggle("active")
}

navToggler.addEventListener("click", navToggle)

// hide nav when clicking outside
document.addEventListener("click", (e) =>{
    const isClickInsideNav = nav.contains(e.target);
    const isClickInsideNavToggler = navToggler.contains(e.target);
    if(!(isClickInsideNav || isClickInsideNavToggler)&&nav.classList.contains("active")){
        navToggle();
    }
})


/*---- theme light dark -----  */
function themeLightDark(){
    const switcherBtn = document.querySelector(".js-switcher-btn");
    const icon = switcherBtn.querySelector("i");

    function changeIcon(){
        if(document.body.classList.contains("dark")){
            icon.classList.remove("fa-moon-o");
            icon.classList.add("fa-sun-o");
        }
        else{
            icon.classList.remove("fa-sun-o");
            icon.classList.add("fa-moon-o");
        }   
    }
switcherBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    changeIcon()
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
})
    // check for saved user preference, if any, on load of the website
// if(localStorage.getItem("theme")!== null){
//     if(localStorage.getItem("theme")== "light"){
//         document.body.classList.remove("dark");
//     }
//     else{
//         document.body.classList.add("dark");
//     }
// }
    changeIcon();
}
themeLightDark();