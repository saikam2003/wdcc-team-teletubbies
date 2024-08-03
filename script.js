var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})


function addToCart (itemName) {
  // Logic to add the item to the cart
  alert(itemName + ' has been added to the cart!')
  // You can replace the alert with actual cart functionality
}
