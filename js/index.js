
const url = "https://semester-project-ii.herokuapp.com/home/";
const containerCards = document.querySelector(".background");

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
  <div class="hero-banner">
  <img src=${specifics.hero_banner.url} class="hero-img">
  <div class="hero-content">
  <p class="hero-text">Hello</p>
  </div>
  </div>

`;
                              


}



