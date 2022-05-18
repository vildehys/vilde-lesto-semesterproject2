export function adminProducts(productsForAdmin) {

    const productsContainer = document.querySelector(".container_products");

    productsContainer.innerHTML = "";
    
    productsForAdmin.forEach(function(product) {
      productsContainer.innerHTML += `<div class="products">

                                        <img src=${product.image.url}>  
                                        <h2>ENVIRON À PARIS</h2>
                                        <h3>${product.title}</h3>
                                        <p>${product.price} kr</p>
                                        <a class="button read-button" href="edit-product.html?id=${product.id}">Edit Product</a>
                                        <a class="button read-button" href="detail.html?id=${product.id}">Delete Product</a>
                                        </div
                                        </div>`;

    
    });
  
  }