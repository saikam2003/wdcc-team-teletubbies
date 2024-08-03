// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   }
// })

var swiper = new Swiper('.mySwiper', {
  effect: 'cards',
    grabCursor: true,
    loop: true,
  
})

let lastScrollTop = 0 // Variable to track last scroll position
const navbar = document.querySelector('.navbar') // Get the navbar element

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hidden') // Add the hidden class to the navbar
  } else {
    // Scrolling up
    navbar.classList.remove('hidden') // Remove the hidden class from the navbar
  }
  lastScrollTop = scrollTop // Update the last scroll position
})



function addToCart (itemName) {
  // Logic to add the item to the cart
  alert(itemName + ' has been added to the cart!')
  // You can replace the alert with actual cart functionality
}
