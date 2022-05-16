import { getExistingProducts } from "../js/utils/products/favFunctions.js"

const products = getExistingProducts();


const productContainer = document.querySelector(".product-container");

if(products.length === 0) {
    productContainer.innerHTML = "Your cart is empty. Continue shopping!";
}

products.forEach((product) => {
    productContainer.innerHTML += `<div class="product">
                                    <img src="${product.image}">
                                    <h4>${product.title}</h4>
                                    <h4>${product.price}</h4>
                                    <p>${product.description}</p>
                                    <p>${product.id}</p>
                                    </div>`;

});

 