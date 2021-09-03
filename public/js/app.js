
// Toggle Mobile menu 

const menuBtn = document.querySelector('.header__toggle__line');
let menuOpen =  false; 
let navigation = document.querySelector('.navigation');
let navigationMenu = document.querySelector('.navigation__menu');
let fixedNav = document.querySelector('.header__container');

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuOpen = true;
        menuBtn.classList.add('open'); 
        navigation.classList.add('open');
        setTimeout(() => {
            navigationMenu.classList.add('animateIn');
        }, 800);
    } else {
        menuOpen = false;
        menuBtn.classList.remove('open');
        navigation.classList.remove('open');
        navigationMenu.classList.remove('animateIn');
    }
});

// Transition fixed menu 

window.onscroll = function() {
    fixedNavAnimation();
}

function fixedNavAnimation() {
    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
        fixedNav.style.backgroundColor = '#fff';
    } else {
        fixedNav.style.backgroundColor = 'transparent';
        fixedNav.style.height = '65px';
        
    }
}




function showNewsletter() {
    const newsletter = document.querySelector('.newsletter');
    const overlay = document.querySelector('.newsletter__overlay');
    const closeNewsletter = document.querySelector('.close__newsletter');

    setTimeout(() => {
        newsletter.classList.add('show');
        overlay.classList.add('show');
    }, 6000)

    closeNewsletter.addEventListener('click',(e) => {
        newsletter.classList.add('close');
        overlay.classList.add('close');
    }, 5000);
};
showNewsletter();