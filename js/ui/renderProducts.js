export function renderProducts(productsToRender) {

    const productsContainer = document.querySelector(".container_products");

    productsContainer.innerHTML = "";
    
    productsToRender.forEach(function(product) {
      productsContainer.innerHTML += `<div class="products">

                                        <img src=${product.image_url}>  
                                        <h2>ENVIRON À PARIS</h2>
                                        <h3>${product.title}</h3>
                                        <div class="inline">      
                                        <p>${product.price} kr</p>
                                        <i class="fa fa-heart"></i>
                                        </div>
                                        <div class="button">
                                        <a class="button read-button" href="detail.html?id=${product.id}">Read More</a>
                                        </div
                                        </div>`;

    
    });
  
  }