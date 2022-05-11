const url = "https://semester-project-ii.herokuapp.com/products";
const productsContainer = document.querySelector(".container_products");

export async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();

    products.forEach(function(product) {
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
     });


const cartButton = document.querySelectorAll(".product a");

console.log(cartButton);

  } catch (err) {
      console.error(err);
  }
    
}

getProducts(url);




