import { homeUrl } from "../js/data/api.js";

const containerBanner = document.querySelector(".background");

export async function fetchBanner() {

    try {
        
    const response = await fetch(homeUrl);
    const specifics = await response.json();
    
    heroBanner(specifics);
}


catch(error) {
    console.log(error);
    containerBanner.innerHTML = message("error", error);
    }
}

fetchBanner()


function heroBanner(specifics) {

  containerBanner.innerHTML = `
  <div class="hero-banner">
  <img src=${specifics.hero_banner.url} class="hero-img">
  </div>

`;                           

}