/*const url = "https://semester-project-ii.herokuapp.com/home";
const productsContainer = document.querySelector(".container");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products)


    function createHTML(product) {

        productsContainer.innerHTML += 
        `
        <div class="products">
        <h2>${product.hero_banner}</h2>  
        </div>`;
     };

  } catch (err) {
      console.error(err);
  }

    
}

getProducts(url);

*/



/*const url = "https://semester-project-ii.herokuapp.com/home/";
const containerCards = document.querySelector(".container");

async function fetchDetails() {

    try {
        
    const response = await fetch(url);
    const specifics = await response.json();
    

    console.log(specifics);

    createHtml(specifics);


}

catch(error) {
    console.log(error);
    containerCards.innerHTML = message("error", error);
    }
}

fetchDetails()

function createHtml(specifics) {

  containerCards.innerHTML = `
  <div class="product-images">
  <img src=${specifics.id}/>

`;
                              

  
}



*/
