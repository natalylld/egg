const producto = {
  nombre: "celular",
  precio: 1000,
  stock: 15,
};

console.log(producto);

producto.id = "00122233abcde";
producto.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
producto["detalle"] = "Escribir el detalle del celular";
producto["color"] = "gris";

console.log(producto);

delete producto["id"];
delete producto.detalle;

console.log(producto);

console.log(producto.nombre);
console.log(producto["foto"]);