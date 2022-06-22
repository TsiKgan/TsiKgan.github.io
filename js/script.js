
window.addEventListener("load", ()=>{
    /*--preloader--*/
    document.querySelector(".js-preloader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".js-preloader").style.display= "none";
    },600)
})

/*------------ About Tabs -----------------*/
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
        if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
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


/*---- theme light dar -----  */
function themeLightDark(){

    const switcherBtn = document.querySelector(".js-swticher-btn");
    const icon = switcherBtn.querySelector("img")
}
themeLightDark();