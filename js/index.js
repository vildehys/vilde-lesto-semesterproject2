import { homeUrl } from "../js/data/api.js";
import { productsUrl } from "../js/data/api.js";




const containerBanner = document.querySelector(".background");

async function fetchBanner() {

    try {
        
    const response = await fetch(homeUrl);
    const specifics = await response.json();
    
    heroBanner(specifics);
}


catch(error) {
    console.log(error);
    containerBanner.innerHTML = message("error", error);
    }
}

fetchBanner()


function heroBanner(specifics) {

  containerBanner.innerHTML = `
  <div class="hero-banner">
  <img src=${specifics.hero_banner.url} class="hero-img">
  </div>

`;                           

}




async function featuredProducts() {

  try {

    const response = await fetch(productsUrl);
    const products = await response.json();
    const featuredContainer = document.querySelector(".featured-container");

    if(featuredProducts) {
      for (var i = 0; i < products.length; i++) {
          if(products[i].featured === true) {
              featuredContainer.innerHTML += `<div class="featured_products">
                                                  <div class="featured_product">
                                                    <img src=${products[i].image_url} class="product-image"/>
                                                    <div class="featured_text">
                                                    <h2>${products[i].title}<h2>
                                                    <p>${products[i].description}<p>
                                                    <h2>${products[i].price}kr<h2>
                                                    <div class="button">
                                                    <a class="button read-button" href="detail.html?id=${products[i].id}">Read</a>
                                                    </div>
                                                    </div>
                                                  </div>
                                              </div>`
          };
      };
  } 


  }

  catch(error) {
    console.log(error);
    containerBanner.innerHTML = message("error", error);
    }

  }

  featuredProducts();






