const fruits = ["Apple", "Orange", "Durian"];
fruits.push("Tomato"); // add more item in the end of array
console.log(fruits);

const students = [
  {
    name: "Fatwa",
    class: "FEJS-3",
  },
];
// Push is more recommended than manual
students.push({
  name: "Bintang",
  class: "FEJS-3",
});
students[students.length] = {
  name: "Nelan",
  class: "FEJS-3",
};
console.log(students);
