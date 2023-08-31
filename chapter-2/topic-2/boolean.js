let trueBool = true;
let falseBool = false;

let apakahLebihDariDua = 1 > 2;
console.log(apakahLebihDariDua);

/* AND logic is to find the first false value */
/* If there are all true, it will get the last value */
let a = 1;
let b = 2;
const c = a && b && true && "berhasil" && 9;
console.log("c:", c);

/* OR logic is to find the first true value */
let d = 2;
const e = false || false || false || "" || true || 8;
console.log("e:", e);

/* Ternary Operator */
// Normal if
let newBool;
if (trueBool) {
  newBool = 1;
} else {
  newBool = 0;
}
console.log("new bool:", newBool);

// Ternary
newBool = trueBool ? 1 : 0;
console.log("new bool ternary:", newBool);
