let cartCount = 0;

const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert('Product added to cart!');
    });
});
