AOS.init({
    easing: 'ease-in-out',
    duration: 900,
    //once: true,
    delay: 50,
});
const logo = document.getElementById("logo");
const slogan = document.getElementById("slogan");
const scrollDown = document.getElementById("scrollDown");
const navBack = document.getElementById("navback");
const about = document.getElementById("about");
const contact = document.getElementById("contactUs");

document.getElementById("navAbout").addEventListener("click", () => {
    window.scroll({
        top: window.pageYOffset + about.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
    });
    logo.src = "dark.png";
    navBack.style.top = "0px";
})


scrollDown.addEventListener("click", () => {
    window.scroll({
        top: window.pageYOffset + about.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth'
    });
    logo.src = "dark.png";
    navBack.style.top = "0px";
});

document.addEventListener('aos:in:nav', ({ detail }) => {
    setTimeout(()=>{
        if (logo.getBoundingClientRect().bottom + 50 > slogan.getBoundingClientRect().top){
            slogan.style.opacity = "0";
            slogan.style.transitionDelay = "0s";
            scrollDown.style.opacity = "0";
        } else {
            slogan.style.opacity = "1";
            slogan.style.transitionDelay = "0s";
            scrollDown.style.opacity = "1";
        }

        if (logo.getBoundingClientRect().bottom > about.getBoundingClientRect().top){
            logo.src = "dark.png";
        } else {
            logo.src = "logo.png";
        }

        if (logo.getBoundingClientRect().bottom > contact.getBoundingClientRect().top){
            logo.src = "logo.png";
        }
    }, 900);
});


$(function() {
    $(window).bind('mousewheel', function(event, delta) {
        //console.log(prevScrollpos, event.offsetY);
        if (event.originalEvent.deltaY < 0) {
            document.getElementById("navbar").style.top = "27px";
            navBack.style.top = "0px";
        } else {
            document.getElementById("navbar").style.top = "-50px";
            navBack.style.top = "-100px";
        }
        
        if (logo.getBoundingClientRect().bottom + 50 > slogan.getBoundingClientRect().top){
            slogan.style.opacity = "0";
            slogan.style.transitionDelay = "0s";
            scrollDown.style.opacity = "0";
        } else {
            slogan.style.opacity = "1";
            slogan.style.transitionDelay = "0s";
            scrollDown.style.opacity = "1";
        }

        if (logo.getBoundingClientRect().bottom > about.getBoundingClientRect().top){
            logo.src = "dark.png";
        } else {
            logo.src = "logo.png";
        }

        if (logo.getBoundingClientRect().bottom > contact.getBoundingClientRect().top){
            logo.src = "logo.png";
        }
    });
});