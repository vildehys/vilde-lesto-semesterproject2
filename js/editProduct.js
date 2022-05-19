import { productsUrl } from "./data/api.js"
import displayMessage from "./utils/displayMessage.js";

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
        const response = await fetch(productsUrl);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;

        console.log(details)

        console.log(title.value);


    }
    catch(error) {
        console.log(error);

    }


})();


