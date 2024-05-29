const comparar = (cadena1, cadena2) => {
  if (cadena1.includes(cadena2)) {
    return true;
  } else {
    return false;
  }
};

console.log(comparar("Hello", "he"));
console.log(comparar("hello world", "he"));

console.log("Hello".includes("he")); // debe imprimir false mientras que
console.log("hello world".includes("he")); //debe imprimir true.
