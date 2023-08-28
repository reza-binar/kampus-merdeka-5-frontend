/* Scope */
const diskon = 500; // Global variable
if (true) {
  const diskon = 300; // Local variable
  console.log("diskon: ", diskon);
}
console.log("diskon: ", diskon);

/* 
    Reassign and Redeclared
    const can not be reassigned and redeclared
*/
const earth = "bulat";
// earth = "datar"; error
// const earth = "data"; error

const object = { id: 1, name: "Reza" };
object.location = "Yogyakarta";
console.log("object: ", object);
// const object = {}; error

const array = [1, 2, 3, 4];
array.push(5);
console.log("array: ", array);
// const array = []; error
