const navSelector = document.querySelector("#nav");
const footerSelector = document.querySelector("#footer");

const options = [
  {
    title: "Ofertas de la semana",
    linkTo: "./outlet.html",
    opts: ["Laptops", "Audio", "Auticulares"],
  },
  {
    title: "Cómo comprar",
    linkTo: "./how.html",
    opts: ["Formas de pago", "", ""],
  },
  {
    title: "Costos y tarifas",
    linkTo: "./taxs.html",
    opts: ["Impuestos", ""],
  },
  {
    title: "Mis pedidos",
    linkTo: "./orders.html",
    opts: ["", ""],
  },
  {
    title: "Garantía",
    linkTo: "./warranty.html",
    opts: [],
  },
];

//Nav
options.forEach((cadaElemento) => {
  const anchor = document.createElement("a");
  anchor.className = "nav-a";
  anchor.textContent = cadaElemento.title;
  anchor.href = cadaElemento.linkTo;
  navSelector.appendChild(anchor);
});

//Footer
options.forEach((cadaElemento) => {
  // Crear el elemento ul
  const ulFooter = document.createElement("ul");
  ulFooter.className = "footer-ul";
  ulFooter.id = "ulFooter";

  // Crear el elemento li
  const liFooter = document.createElement("li");
  liFooter.className = "footer-main-item";
  ulFooter.appendChild(liFooter);

  // Crear el elemento li
  const aFooter = document.createElement("a");
  aFooter.className = "footer-a";
  aFooter.textContent = cadaElemento.title;
  aFooter.href = cadaElemento.linkTo;
  liFooter.appendChild(aFooter);

  // Agregar el elemento li al footerSelector
  footerSelector.appendChild(ulFooter);

  // Iterar sobre las opciones y crear elementos li dentro del ul
  cadaElemento.opts.forEach((option) => {
    const liOption = document.createElement("li");
    liOption.className = "footer-li";
    ulFooter.appendChild(liOption);

    const asFooter = document.createElement("a");
    asFooter.className = "footer-a";
    asFooter.textContent = option;
    liOption.appendChild(asFooter);
  });
});