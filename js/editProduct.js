import { productsUrl } from "./data/api.js"
import { getToken } from "./data/localStorage.js";
import { displayMessage } from "./ui/displayMessage.js";
import deleteProduct from "./utils/admin/deleteProduct.js";
import logoutButton from "./ui/logoutButton.js";


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = productsUrl + id;

const form = document.querySelector("form");
const name = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");


(async function() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;

        deleteProduct(details.id);
        
        console.log(details)


    }
    catch(error) {
        console.log(error);

    }




})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue = idInput.value;

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        console.log("validation");

        return displayMessage("warning", "Please supply proper values", ".message-container");

    }

    updateProduct (titleValue, priceValue, descriptionValue, idValue);

}

async function updateProduct(title, price, description, id) {

    const url = productsUrl + id;
    const data = JSON.stringify({ title: title, price: price, description: description });

    const token = getToken();


    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {

        const response = await fetch(url, options);
        const json = await response.json();

        if(json.updated_at) {
            displayMessage("success", "Product updated", ".message-container");

        }
        if(json.error) {
            displayMessage("error", json.message, ".message-container");


        }


    }
    catch(error) {
        console.log(error);

    }



}






