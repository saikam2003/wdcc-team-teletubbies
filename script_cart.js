function increaseQuantity(button) {
    let quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotal();
}

function decreaseQuantity(button) {
    let quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
        updateTotal();
    }
}

function updateTotal() {
    let cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
    cartItems.forEach(item => {
        let price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
        let quantity = parseInt(item.querySelector('.quantity').textContent);
        totalPrice += price * quantity;
    });
    document.querySelector('.total-price').textContent = '$' + totalPrice.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("button").addEventListener('click', function() {
        window.location.href = 'payment.html';
    });
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment successful!');
});




