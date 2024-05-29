const productsSelector = document.getElementById("products");

/*let productsTemplate = `
<a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>-->
      </div>
    </main>
    <footer>
      <div id="footer" class="footer-container">
       <!-- <ul class="footer-ul" id="footr">
          <li class="footer-main-item" id="footr">
            <a class="footer-a" href="./index.html">Ofertas</a>
          </li>
        </ul>-->
          <!--<li class="footer-li">
            <a class="footer-a" href="./index.html">Laptops</a>
          </li>
          <li class="footer-li">
            <a class="footer-a" href="./index.html">Audio</a>
          </li>
          <li class="footer-li">
            <a class="footer-a" href="./index.html">Auriculares</a>
          </li>
        </ul>
        <ul class="footer-ul">
          <li class="footer-main-item">
            <a class="footer-a" href="./index.html">Cómo comprar</a>
          </li>
          <li class="footer-li">
            <a class="footer-a" href="./index.html">Formas de pago</a>
          </li>
          <li class="footer-li">
            <a class="footer-a" href="./index.html">Envios</a>
          </li>
          <li class="footer-li">
            <a class="footer-a" href="./index.html">Devoluciones</a>
          </li>
        </ul>
        <ul class="footer-ul">
          <li class="footer-main-item">
            <a class="footer-a" href="./index.html">Costos y tarifas</a>
          </li>
          <li class="footer-li">
            <a class="footer-a" href="./index.html">Impuestos</a>
          </li>
          <li class="footer-li">
            <a class="footer-a" href="./index.html">Facturación</a>
          </li>
        </ul>
        <ul class="footer-ul">
          <li class="footer-main-item">
            <a class="footer-a" href="./index.html">Mis pedidos</a>
          </li>
          <li class="footer-li">
            <a class="footer-a" href="./index.html">Pedir nuevamente</a>
          </li>
          <li class="footer-li">
            <a class="footer-a" href="./index.html">Lista de deseos</a>
          </li>
        </ul>
        <ul class="footer-ul">
          <li class="footer-main-item">
            <a class="footer-a" href="./index.html">Garantía</a>
          </li>
        </ul>
`;*/

const createCard = (product) => {
  return `
    <article class="product-card">
        <a class="product-link" href="./details.html?id=${product.id}">
            <img class="product-img" src="${product.image[0]}" alt="Macbook Pro" />
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                    <span class="price">S/${product.price}</span>
                    <span class="discount">${product.discount}% Off</span>
                </div>
                <div class="product-tax-policy">${product.observation}</div>
            </div>
        </a>
    </article>
  `;
}

//productsSelector.innerHTML = productsTemplate;

/*function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}*/

const printCards = (arrayOfProducts, idSelector) => {
  let productsTemplate = "";

  for (let product of arrayOfProducts) {
    productsTemplate += createCard(product);
  }

  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate
}

printCards(products, "products");
