import { getExistingFavs } from "../js/utils/products/favFunctions.js"

const favourites = getExistingFavs();


const productContainer = document.querySelector(".product-container");

if(favourites.length === 0) {
    productContainer.innerHTML = "Your cart is empty. Continue shopping!";
}

favourites.forEach((favourite) => {
    productContainer.innerHTML += `<div class="product">
                                    <h4>${favourite.title}</h4>
                                    <p>${favourite.id}</p>
                                    </div>`;

});

 