
// scrollbar navbar 
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll');
    }else{
        nav.classList.remove('scroll');
    }
}


// nav hide on click 
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(e){
    e.addEventListener('click', function(){
        navCollapse.classList.remove("show");
    })
})