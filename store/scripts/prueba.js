/**
 * Captura el parámetro id
 */
//Variable que guarda la ubicación actual
const query = location.search;
//Variable que instancia la clase URLSearchParams
const params = new URLSearchParams(query);
//Variable que captura el id
const id = params.get('id');
console.log(id);

/**
 * Renderizar dinámicamente la vista de detalle
 */

//Definir funcion printDetail
function printDetails(id){
    const product = products.find(product => product.id == id);

    const detailsTemplate = `
        <section class="product-images-block">
            <div class="product-images">
            ${product.photo.map((photo) => `<img class="mini-img" src="${photo}" alt="${product.title}" onclick="changeMini(event)" />`).join('')}
            </div>
            <img
              class="big-img"
              id="big-img"
              src="${product.photo[2]}"
              alt="MacBook Pro 13'4"
            />
          </section>
          <div class="product-description-block">
            <h1 class="product-title">${product.title}</h1>
            <form class="product-selector">
              <fieldset class="product-fieldset">
                <label class="product-label" for="color">Color</label>
                <select
                  class="product-select"
                  type="text"
                  placeholder="Selecciona un color"
                  id="color"
                >
                ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                </select>
              </fieldset>
            </form>
            <div class="product-description">
              <span class="product-label">Descripción</span>
              <p>
                ${product.description}
              </p>
            </div>
          </div>
          <div class="product-checkout-block">
            <div class="checkout-container">
              <span class="checkout-total-label">Total:</span>
              <h2 id="price" class="checkout-total-price">$${product.price}</h2>
              <p class="checkout-description">
                ${product.taxPolicy}
              </p>
              <ul class="checkout-policy-list">
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/truck.png" alt="Truck"
                  /></span>
                  <span class="policy-desc"
                    >Agrega el producto al carrito para conocer los costos de
                    envío</span
                  >
                </li>
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/plane.png" alt="Plane"
                  /></span>
                  <span class="policy-desc"
                    >Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal</span
                  >
                </li>
              </ul>
              <div class="checkout-process">
                <div class="top">
                  <input type="number" min="1" value="1" onclick="changePrice(event)" />
                  <button type="button" class="cart-btn" onclick="saveProduct(${product.id})">
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
    `
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}

/**
 * Definir función para cambiar imagen
 */
function changeMini(event){
  //Traer el src de la imagen seleccionada
  const selectedSrc = event.target.src;
  //Traer el selector de la imagen grande
  const bigSelector = document.querySelector("#big-img");
  //Cambiar el src de la imagen grande
  bigSelector.src = selectedSrc;
}

/**
 * Definir funcion para cambiar precio
 */
function changePrice(event){
  //traer la cantidad del input de tipo number
  const quantity = event.target.value;
  //traer el producto
  const product = products.find(product => product.id == id);
  //traer el selector del precio
  const priceSelector = document.querySelector("#price");
  //cambiar el precio total
  priceSelector.innerHTML = `$${quantity * product.price}`;
}

/**
 * Definir función para añadir al carrito
 */
function saveProduct(id) {
  //traer el producto
  const product = products.find(product => product.id == id);
  //defina un objeto con las propiedades especificadas en la compra
  const objectProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    color: document.querySelector("#color").value,
    photo: product.photo[0],
    quantity: document.querySelector("input").value,
  };

  // Verificar si la clave 'cart' existe en localStorage
  if (localStorage.getItem('cart')) {
    // Si existe, obtener el contenido y convertirlo de nuevo en un array
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Agregar el nuevo producto al array
    cart.push(objectProduct);
    // Guardar el array actualizado en el storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // Si no existe, crear un nuevo array con el producto y guardarlo en el storage
    let cart = [objectProduct];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  
  
}

printDetails(id);








//////////////////////////////////////////////////////////////////////


/**
 * Captura el parámetro id
 */
//Variable que guarda la ubicación actual
const query = location.search;
//Variable que instancia la clase URLSearchParams
const params = new URLSearchParams(query);
//Variable que captura el id
const id = params.get("id");
console.log(id);

const productImageSection = document.getElementById("product-images");
const productDescriptionSection = document.getElementById("product-description");
const productCheckoutSection = document.getElementById("product-checkout");

/**
 * Renderizar dinámicamente la vista de detalle
 */
const printDetails = (productId) => {
  console.log(productId);
  const product = products.find((product) => product.id === productId);
  console.log(product);
  productImageSection.innerHTML = getProductImageTemplate(product);
  productDescriptionSection.innerHTML = getProductDescriptionTemplate(product);
  productCheckoutSection.innerHTML = getProductCheckoutTemplate(product);
};

const getProductImageTemplate = (product) => {
  let images = product.image.map(
    (x, index) =>
      `<div class="product-images">
      <img class="mini-img" src="${x}" alt="miniatura ${
        index + 1
      }" onclick="changeMini(event)"/>
      </div>`
  );
  return `
    ${images.join("")}
    <img class="big-img" id="big-img" src="${
      product.image[0]
    }" alt="MacBook Pro 13'4"/>
  `;
};

const getProductDescriptionTemplate = (product) => {
  let colors = product.colors.map((x) => `<option>${x}</option>`);
  return `
    <h1 class="product-title">${product.title}</h1>
    <form class="product-selector">
        <fieldset>
            <label class="product-label" for="color">Color</label>
            <select class="product-select" id="color">
                ${colors.join("")}
            </select>
        </fieldset>
    </form>
    <div class="product-description">
            <p class="description">${product.description}</p>
    </div>
  `;
};

const getProductCheckoutTemplate = (product) => {
  return `
    <div class="checkout-container">
      <span class="checkout-total-label">Total:</span>
      <h2 class="checkout-total-price">S/<span id="checkout-total-price">${product.price.toFixed(
        2
      )}</span]></h2>
      <p class="checkout-description">Incluye impuestos, pero si quieres los evadimos por ti.</p>
      <ul class="checkout-policy-list">
        <li>
            <span class="policy-icon"><img src="assets/truck.png" alt="" /></span>
            <span class="policy-desc">Agregar el producto al carrito para conocer los precios de envío.</span>
        </li>
        <li>
            <span class="policy-icon"><img src="assets/plane.png" alt="" /></span>
            <span class="policy-desc">Lo recibes al instante, ni cuenta te vas a dar.</span>
        </li>
      </ul>
      <div class="checkout-process">
        <div class="top">
          <input type="number" value="1" min="1" max="10" onchange="changeSubtotal(event)">
          <button class="btn-primary">Comprar</button>
        </div>
        <div class="bottom">
          <button class="btn-outline" onclick="saveProduct(${product.id})">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;
};

const changeMini = (event) => {
  console.log("changeMini" + event);
  const route = event.target.src;
  const mainImage = document.getElementById("main-image");
  mainImage.src = route;
};

const changeSubtotal = (event) => {
  const product = products.find((product) => product.id === id);
  const quantityProducts = event.target.value;
  const productPrice = product.price;
  const subtotal = quantityProducts * productPrice;
  const priceSelector = document.getElementById("checkout-total-price");
  priceSelector.innerHTML = subtotal.toFixed(2);
};

function saveProduct(id) {
  console.log("SaveProduct id: " + id);
  const found = products.find((each) => each.id === id);
  console.log("SaveProduct: " + found);
  const product = {
    id: id,
    title: found.title,
    price: found.price,
    image: found.image[0],
    colors: document.querySelector("#color-" + id).value,
    stock: document.querySelector("#quantity-" + id).value,
  };
  onsole.log("product: " + product);
  const stringifyProduct = JSON.stringify(product);
  localStorage.setItem("cart", stringifyProduct);
}

printDetails(id);
