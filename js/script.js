//toggle class active

const navbarNav = document.querySelector ('.navbar-nav');

//ketika menugaris3 di klik

document.querySelector ('#menugaris3').onclick = () => {
 navbarNav.classList.toggle('active');
};

//Klik diluar sidebar untuk menghilangkan navigasi

const menugaris3 = document.querySelector ('#menugaris3');

document.addEventListener('click', function(e){
    if(!menugaris3.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
