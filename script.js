// 'use strict';
//
// //modal variables
// const modal = document.querySelector('[data-modal]');
// const modalCloseBtn = document.querySelector('[data-modal-close]');
// const modalCloseOverlay = document.querySelector('[data-modal-overlay]');
// const btn = document.querySelector('btn-newsletter')
//
// //modal function
// const modalCloseFunc = function () { modal.classList.add('closed') }
// const press = function () {
//     console.log('Le button a ete parfaitement appuyer')
// }
//
// //modal eventListener
// modalCloseOverlay.addEventListener('click', function(){modal.classList.add('closed')});
// modalCloseBtn.addEventListener('click', modalCloseFunc);
// btn.addEventListener('click', press)
// // modal.addEventListener('click', modalCloseFunc)
//
// //notification toast variables
// const notificationToast= document.querySelector('[data-toast]');
// const toastCloseBtn = document.querySelector('[data-toast-close]');
//
// //notification toast eventListener
// toastCloseBtn.addEventListener('click', function(){
//     notificationToast.classList.add('closed');
// })
//
//
// // mobile menu variables
// const mobileMenuOpenBtn = document.querySelector('[data-mobile-menu-open-btn]')
// const mobileMenu = document.querySelector('[data-mobile-menu]')
// const mobileMenuCloseBtn = document.querySelector('[data-mobile-menu-close-btn]')
// const overlay = document.querySelector('[data-overlay]')
//
// for(let i = 0; i< mobileMenuOpenBtn.length; i++){
//     //mobile menu function
//     const mobileMenuCloseFunc = function (){
//         mobileMenu[i].classList.remove('active');
//         overlay.classList.remove('active');
//     }
//     mobileMenuOpenBtn[i].addEventListener('click', function (){
//         mobileMenu[i].classList.add('active');
//         overlay.classList.add('active');
//     });
//     mobileMenuCloseFunc[i].addEventListener('click', mobileMenuCloseFunc);
//     overlay.addEventListener('click', mobileMenuCloseFunc);
// }
//
//
// //accordion variables
// const accordionBtn = document.querySelector('[data-accordion-btn]');
// const accordion = document.querySelector('[data-accordion]');
//
// for (let i = 0; i< accordionBtn.length; i++) {
//     accordionBtn[i].addEventListener('click', function () {
//         const clickedBtn = this.nextElementSibling.classList.contains('active');
//         for (let i = 0; i < accordion.length; i++) {
//             if (clickedBtn) break;
//             if (accordion[i].classList.contains('active')) {
//                 accordion[i].classList.remove('active');
//                 accordionBtn[i].classList.remove('active');
//             }
//         }
//         this.nextElementSibling.classList.toggle('acitve');
//         this.classList.toggle('active')
//     })
// }

const nav_bottom = $('.mobile-bottom-navigation>button');
const drawer = $('.mobile-navigation-menu.has-scrollbar');
const btn_close = $('.menu-close-btn');

$('[data-mobile-menu-open-btn]').click(function(event){
    drawer.addClass('active');
});

$('[data-mobile-menu-open-btn-grid]').click(function (event){
    $('.sidebar').addClass('active')
})

$('.sidebar-close-btn').click(function(event){
    $('.sidebar').removeClass('active')
})

btn_close.click(function (event){
    drawer.removeClass('active');
});


const menu_category = $('.accordion-menu');
const sub_title = $('.submenu-category-list');

menu_category.click(function (event){
    sub_title.addClass('active')
    }
)

$('.sidebar-accordion-menu').click(function (event){
    $('.sidebar-submenu-category-list').addClass('active')
})

const modal = $('.modal-close-btn');
const modal1 = $('.modal-close-overlay');
const btnnewsletter = $('.btn-newsletter');

btnnewsletter.click(function (event){
     $('.modal').addClass('.closed');
})
modal1.click(function(event){
     $('.modal').addClass('.closed');
})
modal.click(function (event){
    modalf (modal);
 })


// $('[data-accordion-btn]').click(function() {
//     const clickedBtn = $(this).next().hasClass('active');
//     $('[data-accordion]').each(function() {
//         if (clickedBtn) return false;
//         if ($(this).hasClass('active')) {
//             $(this).removeClass('active');
//             $(this).prev().removeClass('active');
//         }
//     });
//     $(this).next().toggleClass('active');
//     $(this).toggleClass('active');
// });


$(document).ready(function(){
     $(".mobile-bottom-navigation>button").click(function(){
         $(".mobile-navigation-menu.has-scrollbar").toggleClass("active"); // Toggle de la classe "open" pour afficher ou masquer le drawer
     });
 });

