document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    function displayCart() {
        if (cart.length === 0) {
            cartList.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            let totalPrice = 0;
            cartList.innerHTML = ''; // Clear the cart list
            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
                itemDiv.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <button data-id="${item.id}" class="remove-btn">Remove</button>
                `;
                cartList.appendChild(itemDiv);
                totalPrice += item.price;
            });
            totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
        }
    }

    function removeFromCart(id) {
        const updatedCart = cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        location.reload(); // Refresh the cart page
    }

    function confirmOrder(totalPrice) {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items before placing an order.');
            return;
        }

        const confirmMessage = `Your total is $${totalPrice.toFixed(2)}. Do you want to place the order?`;
        if (confirm(confirmMessage)) {
            confirmedOrder(cart, totalPrice);
            alert('Order placed successfully!');
            localStorage.removeItem('cart');
            location.reload();
        }
    }

    function confirmedOrder(cart, totalPrice) {
        console.log('Order confirmed:', {
            items: cart,
            total: totalPrice.toFixed(2)
        });
        // Add logic to send the order to a server if needed
    }

    // Attach event listeners
    cartList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const itemId = parseInt(event.target.getAttribute('data-id'), 10);
            removeFromCart(itemId);
        }
    });

    document.getElementById('place-order').addEventListener('click', () => {
        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        confirmOrder(totalPrice);
    });

   
    // Initial display of the cart
    displayCart();
});