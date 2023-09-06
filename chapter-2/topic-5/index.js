import chalk from "chalk"; // Thirt party module / library / package
import os from "os"; // Core module
import fs from "fs";

// Import local module
// import * as calculateTriangle from "./module/calculateTriangle.js";
// import calculateTriange from "./module/calculateTriangle";
// import { calculateTriangleArea, rizky } from "./module/calculateTriangle.js";
import calculateTriangle, {
  calculateTriangleAround,
  rizky,
} from "./module/calculateTriangle.js";

console.log(chalk.blue("I am Reza!"));
console.log(chalk.green("I am Putra!"));
console.log(chalk.white("I am White!"));

const freeMemory = os.freemem() / 1024 / 1024;
const totalMemory = os.totalmem() / 1024 / 1024;
console.log("Free memory (MB): ", freeMemory);
console.log("Total memory (MB): ", totalMemory);

const exampleFile = fs.readFileSync("./example.txt");
console.log("example file: ", exampleFile.toString());

const triangleArea = calculateTriangle(15, 20);
console.log("triangle area: ", triangleArea);

const triangleAround = calculateTriangleAround(10);
console.log("triangle around: ", triangleAround);

console.log(rizky);
