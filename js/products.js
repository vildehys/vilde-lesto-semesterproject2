/*const url = "https://semester-project-ii.herokuapp.com/products";
const productsContainer = document.querySelector(".container_products");
const search = document.querySelector(".search");


*/

import { renderProducts } from "./ui/renderProducts.js";
import { filterProducts } from "./ui/filterProducts.js";
import { displayMessage } from "./ui/displayMessage.js";
import { productsUrl } from "../js/data/api.js";

async function getProducts(productsUrl) {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    renderProducts(products);
    filterProducts(products);

    
    


  } catch (err) {
    console.error(err);
    displayMessage("error", err, ".container_products");
}
  
}

getProducts(productsUrl);










    /*products.forEach(function(product) {
        productsContainer.innerHTML += 
        `
        <div class="products">
        <img src=${product.image.url}>  
        <h2>ENVIRON À PARIS</h2>
        <h3>${product.title}</h3>
        <div class="inline">      
        <p>${product.price}</p>
        <i class="fa fa-heart"></i>
        </div>
        <div class="button">
        <a class="button read-button" href="detail.html?id=${product.id}">Read More</a>
        </div
        </div>`;
     });*/











