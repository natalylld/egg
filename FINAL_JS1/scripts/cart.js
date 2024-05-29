// Paso 1: Definir el booleano isOnline en el localStorage
localStorage.setItem("isOnline", JSON.stringify(false));

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

let cartproducts = JSON.parse(localStorage.getItem("cart"));
if (!cartproducts) {
  cartproducts = [];
}
printCartCards(cartproducts, "productscart");
printCartTotal(cartproducts, "total");

// Paso 3: Configurar controladores de eventos
document.getElementById("iconSesion").addEventListener("click", function () {
  const isOnline = JSON.parse(localStorage.getItem("isOnline"));
  if(isOnline){
    localStorage.setItem("isOnline", JSON.stringify(false));
  }else{
    localStorage.setItem("isOnline", JSON.stringify(true));
  }
  renderizarIconos();
});