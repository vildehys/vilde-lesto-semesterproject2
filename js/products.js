import { renderProducts } from "./ui/renderProducts.js";
import { filterProducts } from "./ui/filterProducts.js"
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













