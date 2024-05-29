/*const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};

producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(producto1);
console.log(producto1.nombre);*/

class Product {
  constructor(image, title, color, price, stock, description, discount, observation, id, colors) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.color = color;
    this.price = price;
    this.stock = stock;
    this.description = description;
    this.discount = discount;
    this.observation = observation;
    this.colors = colors;
  }
  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newName) {
    this._supplier = newName;
  }
  sellUnits(units) {
    if (this.stock > units) {
      this.stock = this.stock - units;
    } else {
      console.log("No hay stock suficiente");
    }
  }
}

/*const prod1 = new Product();
const prod2 = new Product("123avc", "Polo", 40);
const prod3 = new Product(
  "432frd",
  "Celular",
  900,
  4,
  [
    "./assets/mock1"
  ],
  true
);

const prod4 = new Product(
  "552frd",
  "Laptop",
  2500,
  1,
  [
    "https://i.laptop1.cc/Jn2C5W84/galaxy1.webp",
    "https://i.laptop2.cc/Jn2C5W84/galaxy1.webp",
  ],
  true,
  "LG"
);

const prod5 = new Product(
  "331pwd",
  "Pelota",
  80,
  12,
  [
    "https://i.pelota1.cc/Jn2C5W84/galaxy1.webp",
    "https://i.pelota2.cc/Jn2C5W84/galaxy1.webp",
  ],
  true,
  "Walon"
);

const prod6 = new Product(
  "421pdd",
  "Polera",
  54,
  11,
  [
    "https://i.polera1.cc/Jn2C5W84/galaxy1.webp",
    "https://i.polera2.cc/Jn2C5W84/galaxy1.webp",
  ],
  true,
  "levis"
);*/

const prod1 = new Product(['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 15\'4', 'Space Gray', 2800, 80, 'MacBook 16 X1605VA-MB165W M3Max 16GB 1TB SSD 16"',10, 'Incluye impuesto País y percepción AFIP','001',['Blue nigth', 'Black', 'Pink']);
const prod2 = new Product(['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 14\'4', 'Black', 2500, 60, 'MacBook Pro 14 MB165W M3Pro 16GB 512GB SSD 14"',20, 'Incluye impuesto País y percepción AFIP','002',['Green', 'Gray', 'Yellow']);
const prod3 = new Product(['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 13\'4', 'Blue Black', 3200, 55, 'MacBook Pro 16 MB165W M3Pro 16GB 1TB SSD 16"',50, 'Incluye impuesto País y percepción AFIP','003', ['Red', 'Black', 'Pink']);
const prod4 = new Product(['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 12\'4', 'Space Gray', 3800, 67, 'MacBook Pro 16 MB165W M3 16GB 1TB SSD 16"',60,'Incluye impuesto País y percepción AFIP','004', ['Gray space', 'Black', 'Camel']);
const prod5 = new Product(['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 11\'4', 'White', 2500, 69, 'MacBook Pro 16 X1605VA M3 16GB 1TB SSD 16"',25,'Incluye impuesto País y percepción AFIP','005', ['Baby blue', 'Fucsia', 'ROrangeosa']);
const prod6 = new Product(['assets/mock1.jpg', 'assets/mock2.jpg'], 'Macbook Pro 10\'4', 'Black Gray', 6999, 100, 'MacBook Pro 16 MB165W M3Pro 16GB 1TB SSD 16"',30,'Incluye impuesto País y percepción AFIP','006', ['Baby blue', 'Black', 'Rosa']);


/*prod4.setSupplier = "Samsung";

console.log("Producto 1: ");
console.log(prod1);
console.log("Producto 2: ");
console.log(prod2);
console.log("Producto 3: ");
console.log(prod3);
console.log("Getter producto 4: ");
console.log(prod4.getSupplier);

console.log("Producto 2 title: ");
console.log(prod2.title);
console.log("Producto 3 onsale: ");
console.log(prod3["onsale"]);

console.log("Producto 5: ");
console.log(prod5);
console.log("Producto 5 - 10 units: ");
prod5.sellUnits(10);
console.log(prod5);
console.log("Producto 5 - 5 units: ");
prod5.sellUnits(5);
console.log(prod5);
*/
const products = [prod1, prod2, prod3, prod4, prod5, prod6];

/*console.log("PRODUCTS: " + products);
console.log("PRODUCTS LENGTH-1: " + products[length - 1]);

products.unshift(prod5);
console.log("PRODUCTS 5: " + products);
products.push(prod6);

console.log("PRODUCTS 6: " + products);*/