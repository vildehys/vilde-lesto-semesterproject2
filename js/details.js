const containerCards = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://semester-project-ii.herokuapp.com/products/";


async function fetchDetails() {

    try {
        

    const response = await fetch(url + id);

    const specifics = await response.json();
    

    console.log(specifics);

    createHtml(specifics);

}

catch(error) {
    console.log(error);
    }
}

fetchDetails()

function createHtml(specifics) {

    containerCards.innerHTML = `
        <div class="product">
        <img src="${specifics.image.url}" class="product-image"/>
        <div class="text">
        <h2>${specifics.title}</h2>
        <h3>${specifics.price}</h3>
        <p>${specifics.description}</p>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <div class="button">
        <a class="button cart-button" href="cart.html">Add to cart</a>
        </div>
        </div>


    </div>
`;
                                

    
}
