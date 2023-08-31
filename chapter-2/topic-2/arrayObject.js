const students = [
  {
    name: "Putra",
    address: [
      {
        city: "Samarinda",
        province: "East Borneo",
      },
    ],
  },
  {
    name: "Barizi",
    address: [
      {
        city: "Bangkalan",
        province: "East Java",
      },
    ],
  },
  {
    name: "Nelan",
    address: [
      {
        city: "Bogor",
        province: "West Java",
      },
      {
        city: "Depok",
        province: "West Java",
      },
    ],
  },
];
console.log(`${students[2].name} is from ${students[2].address[1].city}`);

/* Result */
// Putra is from Samarinda, East Borneo
// Barizi is from Bangkalan, East Java
// Nelan is from Bogor, West Java & Depok, West Java
