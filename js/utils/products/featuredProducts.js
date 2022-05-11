
export async function featuredProducts() {

    try {
  
      const response = await fetch(productsUrl);
      const products = await response.json();
      const featuredContainer = document.querySelector(".featured-container");
  
      if(featuredProducts) {
        for (var i = 0; i < products.length; i++) {
            if(products[i].featured === true) {
                featuredContainer.innerHTML += `<div class="featured_products">
                                                    <div class="featured_product">
                                                      <img src=${products[i].image.url} class="product-image"/>
                                                      <div class="featured_text">
                                                      <h2>${products[i].title}<h2>
                                                      <p>${products[i].description}<p>
                                                      <p>kr. ${products[i].price}<p>
                                                      <div class="button">
                                                      <a class="button read-button" href="detail.html?id=${products[i].id}">Read more</a>
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