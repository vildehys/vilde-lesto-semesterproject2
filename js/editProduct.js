import { baseUrl } from "./data/api.js"
import displayMessage from "./utils/displayMessage.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "/products/" + id;

const form = document.querySelector("form");
const name = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");

(async function() {
    try {
        const response = await fetch(productUrl);
        const details = await  response.json();

        console.log(details)

    }
    catch(error) {
        console.log(error)

    }

})();