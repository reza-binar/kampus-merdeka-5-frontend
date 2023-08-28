/* Scope */
let diskon = 500; // Global variable
if (true) {
  let diskon = 300; // Local variable
  console.log("diskon: ", diskon);
}
console.log("diskon: ", diskon);

/* Reassign & Redeclared */
let name;
console.log("name: ", name);
name = "Bot";
console.log("name: ", name);
// let name = "Mentor";
// console.log("name: ", name);
