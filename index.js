/*

hamburger menu

cuando cliclamos si esta cerrado lo abrimos y viceversa

*/

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click',()=>{
    const visibility = nav.getAttribute('data-visible');
    if (visibility==='false'){
        nav.setAttribute('data-visible','true');
        

    }else{
        nav.setAttribute('data-visible','false');
    }
    console.log(visibility)
})