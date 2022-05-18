import { productsUrl } from "../js/data/api.js";
import { getExistingProducts } from "../js/utils/products/favFunctions.js"


const singleProduct = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = productsUrl + id;


const products = getExistingProducts();
const detailsContainer = document.querySelector(".container-other");


async function fetchDetails() {

    try {
        
    const response = await fetch(url);
    const specifics = await response.json();

    let cssClass = "add-to-cart"; 
    let btnText = "Add to cart";

    const doesObjectExist = products.find(function (fav) {
        console.log(fav);
        return parseInt(fav.id) === specifics.id;
    });

    if(doesObjectExist) {
        cssClass = "delete";
        btnText = "Remove from cart";

    }

    detailsContainer.innerHTML = `
                                <div class="product">
                                    <img src="${specifics.image.url}" class="product-image"/>
                                <div class="text">
                                    <h2>${specifics.title}</h2>
                                    <h3>${specifics.price} kr</h3>
                                    <p>${specifics.description}</p>
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                                <div class="button">
                                    <button class="button cta-cart ${cssClass}" data-id="${specifics.id}" data-title="${specifics.title}" data-price="${specifics.price}" data-description="${specifics.description}" data-image="${specifics.image.url}">${btnText}</button>
                                        </div>
                                    </div>
                                </div>
                            `;

    const cartButton = document.querySelectorAll(".product button");

        cartButton.forEach((button) => {
        button.addEventListener("click", handleClick);
                            
        });


}

    catch(error) {
        console.log(error);
        }
}


fetchDetails()





function handleClick() {

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
        saveProducts(currentProducts);

        event.target.innerHTML = "Remove from cart";
    }
    else {

        const newProducts = currentProducts.filter(fav => fav.id !== id);
        saveProducts(newProducts);

        event.target.innerHTML = "Add to cart";

    }
  

}


function saveProducts(product) {
    localStorage.setItem("products", JSON.stringify(product));
}




