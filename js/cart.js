import { getExistingProducts } from "./utils/products/getExistingProducts";

const productsInCart = getExistingProducts();
console.log(productsInCart);

const productContainer = document.querySelector(".product-container");

if(productsInCart.length === 0) {
    productContainer.innerHTML = "Your cart is empty. Continue shopping!";
}

productsInCart.forEach((product) => {

    productContainer.innerHTML += `<div class="cart-content">
                                    <div class="cart-header">
                                    <p>ProductsInCart<p>
                                    <p>Qty<p>
                                    <p>Price<p>
                                    </div>
                                    <div class="cart-productsInCart">
                                    <img src="${product.image}" class="cart-image">
                                    <h4>${product.title}</h4>
                                    <h4>${product.price}kr</h4>
                                    </div>
                                    </div>`;

});

 