import { getExistingProducts } from "../js/utils/products/favFunctions.js"

const products = getExistingProducts();


const productContainer = document.querySelector(".product-container");

if(products.length === 0) {
    productContainer.innerHTML = "Your cart is empty. Continue shopping!";
}

products.forEach((product) => {
    productContainer.innerHTML += `<div class="cart-content">
                                    <div class="cart-header">
                                    <p>Products<p>
                                    <p>Qty<p>
                                    <p>Price<p>
                                    </div>
                                    <div class="cart-products">
                                    <img src="${product.image}" class="cart-image">
                                    <h4>${product.title}</h4>
                                    <h4>${product.price}kr</h4>
                                    </div>
                                    </div>`;

});

 