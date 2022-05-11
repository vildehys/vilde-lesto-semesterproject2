import { renderProducts } from "./renderProducts.js";


export function filterProducts(products) {
  const search = document.querySelector(".search");

search.onkeyup = function() {
  //console.log(event);

  const searchValue = event.target.value.trim().toLowerCase();

  const filteredProducts = products.filter(function(product) {
    if(product.title.toLowerCase().startsWith(searchValue)) {
      return true;
    }
  })



  renderProducts(filteredProducts);

};



}