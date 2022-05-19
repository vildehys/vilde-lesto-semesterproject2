import { clearStorage } from "../data/localStorage.js";


export default function logoutButton() {

    const button = document.querySelector("#logout")

    if(button) {
        button.onclick = function() {
            const doLogout = confirm("are you sure you want to log out");


            if(doLogout) {
                clearStorage();
                location.href = "/";
            }
        }
    }

}