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

// Function to handle scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const maxScroll = 400; // The max scroll point where the navbar fully moves out of view

  // Calculate the horizontal translation based on scroll
  const translateX = Math.min(scrollTop * 0.5, maxScroll);

  // Apply the calculated transform to the navbar
  navbar.style.transform = `translateX(-${translateX}px)`;

  // Optionally, adjust the opacity for a fade effect (if needed)
  const opacity = Math.max(0, 1 - scrollTop / maxScroll);
  navbar.style.opacity = opacity;
});




function addToCart (itemName) {
  // Logic to add the item to the cart
  alert(itemName + ' has been added to the cart!')
  // You can replace the alert with actual cart functionality
}
