import { productsUrl } from "../js/data/api.js";
import { getExistingProducts } from "../js/utils/products/favFunctions.js"


const singleProduct = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = productsUrl + id;


const favourites = getExistingProducts();


async function fetchDetails() {

    try {
        
    const response = await fetch(url);
    const specifics = await response.json();




    productDetails(specifics);

}

    catch(error) {
        console.log(error);
        }
}


fetchDetails()


function productDetails(specifics) {
    let cssClass = "cta-cart";
    let btnText = "Add to cart";

    //check through favourites array
    // does the product id exist in the favourites array?

    const doesObjectExist = favourites.find(function (fav) {
        console.log(fav);

        return parseInt(fav.id) === specifics.id;
    });

    console.log(doesObjectExist);


    // if id is in the array, change style of button

    if(doesObjectExist) {
        cssClass = "delete";
        btnText = "Remove from cart";

    }



    singleProduct.innerHTML = `
        <div class="product">
        <img src="${specifics.image.url}" class="product-image"/>
        <div class="text">
        <h2>${specifics.title}</h2>
        <h3>${specifics.price} kr</h3>
        <p>${specifics.description}</p>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <div class="button">
        <button class="button cta-cart ${cssClass}" data-id="${specifics.id}" data-title="${specifics.title}" data-price="${specifics.price}" data-description="${specifics.description}">${btnText}</button>
        </div>
        </div>
    </div>
`;


console.log(specifics.image.url);


const favButtons = document.querySelectorAll(".product button");

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);

});

function handleClick() {

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const description = this.dataset.description;
    const image = this.dataset.image;



    const currentProducts = getExistingProducts();


    const productExists = currentProducts.find(function(fav) {
        return fav.id === id;

    });

    if (!productExists) {

        const product = {id: id, title: title, price: price, description: description, image: image};
        currentProducts.push(product);
        saveFavs(currentProducts);
    }
    else {

        const newProducts = currentProducts.filter(fav => fav.id !== id);
        saveFavs(newProducts);

    }
  

}

}



function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}




