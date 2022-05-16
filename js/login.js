import displayMessage from "../js/utils/displayMessage.js";
import { homeUrl } from "../js/data/api.js";



const form = document.querySelector("form");
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const message = document.querySelector("#message-container")



form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML === "";

    const usernameValue = username.value.trim();
    const passwordValue = username.value.trim();


    if (usernameValue.length === 0 || passwordValue.length === 0) {
        displayMessage("warning", "Invalid values", ".message-container")
    }

    doLogin(usernameValue, passwordValue);
}

async function doLogIn (username, password);








