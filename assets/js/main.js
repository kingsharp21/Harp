
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

 /**
   * Intro type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
})()

// window.addEventListener('scroll',function () {
//   const header = document.querySelector('.header');
//   header.classList.toggle('sticky' ,  window.scrollY = 0)
// })

// menubar
let menubar = document.querySelector('.menu-btn');
let menulist = document.querySelector('.menu-list');
let menuOpen = false;

menubar.addEventListener('click',()=> {
  if (!menuOpen) {
    menubar.classList.add('open');
    menulist.classList.remove('hidden')
    menuOpen=true;
  } else{
    menubar.classList.remove('open');
    menulist.classList.add('hidden')
    menuOpen = false;
  }
})