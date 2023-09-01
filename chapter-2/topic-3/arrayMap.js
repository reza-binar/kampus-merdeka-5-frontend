const numbers = [1, 2, 3, 4, 5];
const mutatedItems = numbers.map((i) => {
  return i + 1;
});
console.log(mutatedItems);

const students = [
  {
    name: "Putra",
    bornIn: 2003,
  },
  {
    name: "Andre",
    bornIn: 2002,
  },
];
// Calculate age of every student
const yearNow = new Date().getFullYear();
const studentsWithAge = students.map((student) => {
  const age = yearNow - student.bornIn;
  return {
    ...student,
    age,
  };
});
console.log(studentsWithAge);

let student = {
  name: "Alvan",
  bornIn: 2002,
};
student = {
  ...student,
  age: 21,
};
console.log(student);
