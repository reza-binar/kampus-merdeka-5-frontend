// Calculate age of every student
const yearNow = new Date().getFullYear();
const students = [
  {
    name: "Putra",
    bornIn: 2003,
    getAge: function () {
      return yearNow - this.bornIn;
    },
  },
  {
    name: "Nelan",
    bornIn: 2002,
    getAge: function () {
      return yearNow - this.bornIn;
    },
  },
];
const studentsWithAge = students.map((student) => {
  const age = student.getAge();
  return Object.assign(student, { age });
});
console.log(studentsWithAge);
