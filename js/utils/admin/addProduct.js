import { displayMessage } from "../../ui/displayMessage.js";
import { getToken } from "../../data/localStorage.js";
import { baseUrl } from "../../data/api.js";
import { productsUrl } from "../../data/api.js";



const form = document.querySelector("form");
const title = document.querySelector("#title");
const titleError = document.querySelector("#titleError");
const price = document.querySelector("#price");
const priceError = document.querySelector("#priceError");
const description = document.querySelector("#description");
const descriptionError = document.querySelector("#descriptionError");
const messageContainer = document.querySelector(".message-container");


form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    messageContainer.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();

    console.log("priceValue", priceValue)

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }

    addProduct(titleValue, priceValue, descriptionValue);


}

async function addProduct(title, price, description) {
    const url = productsUrl;
    const data = JSON.stringify({ title: title, price: price, description: description });
    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };


    try {
        const response = await fetch (url, options);
        const json = await response.json();
        console.log(json)

        if(json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();


        }

        if(json.error) {
            displayMessage("error", json.message, ".message-container");


        }

    } catch {
        console.log(error);
        displayMessage("error", "An error has occured", ".message-container");

    }
}