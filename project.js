AOS.init({
    easing: 'ease-in-out',
    duration: 900,
    //once: true,
    delay: 50,
});
const logo = document.getElementById("logo");
const navBack = document.getElementById("navback");
const contact = document.getElementById("contactUs");
const project = document.getElementById("body");

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

        if (logo.getBoundingClientRect().bottom > body.getBoundingClientRect().top){
            logo.src = "dark.png";
        } else {
            logo.src = "logo.png";
        }

        if (logo.getBoundingClientRect().bottom > contact.getBoundingClientRect().top){
            logo.src = "logo.png";
        }
    });
});