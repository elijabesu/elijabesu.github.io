function toggleMobileMenu() {
    document.getElementsByClassName("hamburger-icon")[0].classList.toggle("open");
    document.getElementsByClassName("menu")[0].classList.toggle("open");
}

$(function(){
    $(".hamburger-icon").on("click", toggleMobileMenu);
    $(".menu li").on("click", toggleMobileMenu);
});
