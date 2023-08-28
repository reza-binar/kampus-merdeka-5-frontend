var price;
price = 1000;
console.log("price: ", price);

var price = 2000;
console.log("price:", price);

/* Scope */
var diskon = 500; // Global variable
if (true) {
  var diskon = 300;
}
console.log("diskon: ", diskon);

function localDiskon() {
  var diskon = 200; // Local varible
  console.log("diskon: ", diskon);
}
localDiskon();

console.log("diskon: ", diskon);
