const primaryHeader = document.querySelector('.primary-header')
const navToggle = document.querySelector('.mobile-nav-toggle')

const primaryNav = document.querySelector('.primary-navigation')


navToggle.addEventListener('click', () => {

    primaryNav.hasAttribute('data-visiable')
     ? primaryNav.setAttribute("aria-expanded", false)
     : primaryNav.setAttribute("aria-expanded", true)
       primaryNav.toggleAttribute('data-visiable')
       primaryHeader.toggleAttribute('data-overlay')
})

