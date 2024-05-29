//const searchSelector = document.getElementById('search');
const searchSelector = document.querySelector('#search');

searchSelector.addEventListener("keyup", event=>captureText(event));

function captureText(event){  
    let searchText = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchText));
    printCards(filteredProducts, 'products');
}
