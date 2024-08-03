document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.getElementById('orderForm')

  orderForm.addEventListener('submit', e => {
    e.preventDefault()

    const item = document.getElementById('item').value
    const address = document.getElementById('address').value

    const order = {
      item,
      address
    }

    console.log(order)
    alert('Order placed successfully!')

    // Clear the form
    orderForm.reset()
  })
})
