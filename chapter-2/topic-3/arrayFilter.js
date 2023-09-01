const students = [
  {
    name: "Putra",
    bornIn: 2003,
  },
  {
    name: "Andre",
    bornIn: 2002,
  },
  {
    name: "Ravel",
    bornIn: 2003,
  },
  {
    name: "Ilham",
    bornIn: 2004,
  },
];
const filteredStudent = students.filter((student) => {
  if (student.bornIn == 2003) {
    return true;
  }
  return false;
});
console.log(filteredStudent);
