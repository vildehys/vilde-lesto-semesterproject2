import { getExistingProducts } from "./utils/products/getExistingProducts.js";

const productsInCart = getExistingProducts();
const productContainer = document.querySelector(".product-container");
const totalContainer = document.querySelector(".price-container");

let totalPrice = 0;

if(productsInCart.length === 0) {
    productContainer.innerHTML = "Your cart is empty. Continue shopping!";
}

productsInCart.forEach((product) => {

    productContainer.innerHTML += ` 
                                    <div class="container h-100">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col">
                                <div class="card mb-4">
                                <div class="card-body p-4">
                                  <div class="row align-items-center">
                                  <div class="col-md-2">
                                  <img src="${product.image}"
                                    class="img-fluid" alt="Generic placeholder image">
                                </div>
                                <div class="col-md-2 d-flex justify-content-center">
                                <div>
                                <p class="small text-muted mb-4 pb-2">Title</p>
                                <p class="lead fw-normal mb-0">${product.title}</p>                               
                                 </div>
                              </div>
                              <div class="col-md-2 d-flex justify-content-center">
                              <div>
                                <p class="small text-muted mb-4 pb-2">Quantity</p>
                                <p class="lead fw-normal mb-0">1</p>
                              </div>
                            </div>
                            <div class="col-md-2 d-flex justify-content-center">
                            <div>
                              <p class="small text-muted mb-4 pb-2">Price</p>
                              <p class="lead fw-normal mb-0">${product.price}kr</p>
                            </div>
                          </div>
                          <div class="col-md-2 d-flex justify-content-center">
                          <div>
                            <p class="small text-muted mb-4 pb-2">Product</p>
                            <a href="detail.html?id=${product.id} class="lead fw-normal mb-0">Click to view product</a>
                          </div>
                        </div>
                                   `;
    
    totalPrice += parseInt(product.price); 
    totalContainer.innerHTML = `        <div class="card mb-5">
                                            <div class="card-body p-4">

                                        <div class="float-end">
                                            <p class="mb-0 me-5 d-flex align-items-center">
                                        <span class="small text-muted me-2">Order total:</span> 
                                        <span class="lead fw-normal">${totalPrice}kr</span>
                                            </p>
                                            </div>

                                        </div>
                                    </div>`
    ;
                                   

});




    


