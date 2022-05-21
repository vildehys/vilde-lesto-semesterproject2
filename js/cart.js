import { getExistingProducts } from "./utils/products/getExistingProducts.js";

const productsInCart = getExistingProducts();
const productContainer = document.querySelector(".product-container");
const totalContainer = document.querySelector(".price-container");

let totalPrice = 0;

if(productsInCart.length === 0) {
    productContainer.innerHTML = "Your cart is empty. Continue shopping!";
}

productsInCart.forEach((product) => {

    productContainer.innerHTML += ` <div class="container">
                                            <div class="cart-content">
                                            <div class="cart-products">
                                            <img src="${product.image}" class="cart-image">
                                            <h4>${product.title}</h4>
                                            <h4>${product.price}kr</h4>
                                            </div> 
                                        </div>
                                    </div>  
                                   `;
    
    totalPrice += parseInt(product.price); 
    totalContainer.innerHTML = `<div class="total-content"></div>
                                <h3>Shipping</h3>
                                <h3>Delivery fee</h3>
                                <h3>Discount</h3>
                                <div class="total-price"></div>

                                <h3>Total price</h3>
                                <p>${totalPrice}kr</p>`
    ;
                                   

});



    


