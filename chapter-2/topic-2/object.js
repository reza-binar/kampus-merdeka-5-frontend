const azka = {
  name: "Azka",
  address: {
    city: "Bandung",
    province: "West Java",
  },
};
console.log(azka);

// Add object
azka.job = "Student";
console.log(azka);

const azkaDetails = `${azka.name} is from ${azka.address.city}, ${azka.address.province}.`;
console.log(azkaDetails);
