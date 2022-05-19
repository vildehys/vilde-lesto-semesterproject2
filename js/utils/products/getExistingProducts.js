export function getExistingProducts() {
    
    const products = localStorage.getItem("products");

    if (!products) {
        return [];
    }
    else {
        return JSON.parse(products);


    }
    
}