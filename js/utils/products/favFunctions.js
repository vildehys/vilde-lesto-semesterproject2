export function getExistingProducts() {
    const products = localStorage.getItem("favourites");

    if (!products) {
        return [];
    }
    else {
        return JSON.parse(products);


    }
    
}