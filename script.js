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
  loop: true
})

let lastScrollTop = 0 // Variable to track last scroll position
const navbar = document.querySelector('.navbar') // Get the navbar element

// Function to handle scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar')
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const maxScroll = 400 // The max scroll point where the navbar fully moves out of view

  // Calculate the horizontal translation based on scroll
  const translateX = Math.min(scrollTop * 0.5, maxScroll)

  // Apply the calculated transform to the navbar
  navbar.style.transform = `translateX(-${translateX}px)`

  // Optionally, adjust the opacity for a fade effect (if needed)
  const opacity = Math.max(0, 1 - scrollTop / maxScroll)
  navbar.style.opacity = opacity
})

function addToCart (itemName) {
  // Get existing cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

  // Add the new item to the cart
  cartItems.push(itemName)

  // Save the updated cart items back to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems))

  // alert(itemName + ' has been added to the cart!')
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card')
  let currentCardIndex = 0
  let startX = 0
  let currentX = 0
  let isTouching = false
  const cart = [] // Array to hold cart items

  function showCard (index) {
    if (index >= 0 && index < cards.length) {
      cards.forEach((card, i) => {
        card.classList.remove('show')
        if (i === index) {
          card.classList.add('show')
        } else {
          card.style.display = 'none'
        }
      })
      cards[index].style.display = 'block'
    }
  }

  function startDrag (e) {
    isTouching = true
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX
  }

  function dragCard (e) {
    if (!isTouching) return

    currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX
    const moveX = currentX - startX

    // Calculate swipe direction and color change
    const swipeDirection = moveX > 0 ? 'right' : 'left'
    const swipeDistance = Math.min(Math.abs(moveX), 100) // Limit the distance to 100px for smoother transition

    if (swipeDirection === 'right') {
      cards[currentCardIndex].style.backgroundColor = `rgba(0, 255, 0, ${
        swipeDistance / 100
      })` // Green
    } else {
      cards[currentCardIndex].style.backgroundColor = `rgba(255, 0, 0, ${
        swipeDistance / 100
      })` // Red
    }

    cards[currentCardIndex].style.transform = `translateX(${moveX}px) rotate(${
      moveX * 0.05
    }deg)`
  }

  function endDrag (e) {
    if (!isTouching) return
    isTouching = false

    const moveX = currentX - startX
    const swipeThreshold = 100 // Minimum distance for a valid swipe

    console.log('Drag ended, moveX:', moveX)

    if (Math.abs(moveX) > swipeThreshold) {
      if (moveX > 0) {
        // Swipe right
        const itemName = cards[currentCardIndex].getAttribute('data-name') // Get the item name from data-name
        addToCart(itemName) // Add to cart function
        document.querySelector('.swipe-direction').innerText =
          'You swiped right! ' + itemName + ' has been added to your cart!'
        console.log('Swiped right')
        cards[currentCardIndex].style.transform =
          'translateX(100%) rotate(20deg)'
        cards[currentCardIndex].style.background = 'rgba(0, 255, 0, 1)' // Solid green
      } else {
        // Swipe left
        document.querySelector('.swipe-direction').innerText =
          "You swiped left! Let's try something else!"
        console.log('Swiped left')
        cards[currentCardIndex].style.transform =
          'translateX(-100%) rotate(-20deg)'
        cards[currentCardIndex].style.background = 'rgba(255, 0, 0, 1)' // Solid red
      }

      setTimeout(() => {
        cards[currentCardIndex].style.display = 'none'
        currentCardIndex++
        if (currentCardIndex < cards.length) {
          showCard(currentCardIndex)
        } else {
          document.querySelector('.swipe-direction').innerText =
            "You've run out of items!"
        }
      }, 300)
    } else {
      // If swipe is not significant, reset card position and color
      cards[currentCardIndex].style.transform = 'translateX(0) rotate(0)'
      cards[currentCardIndex].style.backgroundColor = 'rgba(128, 0, 128)' // Reset color
    }
  }

  cards.forEach(card => {
    card.addEventListener('touchstart', startDrag)
    card.addEventListener('touchmove', dragCard)
    card.addEventListener('touchend', endDrag)

    card.addEventListener('mousedown', startDrag)
    card.addEventListener('mousemove', dragCard)
    card.addEventListener('mouseup', endDrag)
    card.addEventListener('mouseleave', endDrag) // In case mouse leaves the card during drag
  })

  showCard(currentCardIndex)
})
