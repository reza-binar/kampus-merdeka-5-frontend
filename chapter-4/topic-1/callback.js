const fs = require("fs"); // This module is to CRUD file, the module is available in node.js without we installed it through npm

/* 
    The basic node.js application before ES6, the async process is only handled by callback.
    If we have some async process that needed to be sync process, the code will be look dirty.
    Thus, so many developer call it callback hell.
    After it, ES6 has been released, so the javascript is more fun after the ES6 release because they provide Promise instead of callback hell.
*/
console.log("Start.....");
fs.readFile("./data/students.json", "utf-8", (error, data) => {
  if (error) {
    throw error;
  }

  console.log(data);

  fs.readFile("./data/try.json", "utf-8", (error, data) => {
    if (error) {
      throw error;
    }

    console.log(data);
    console.log("End.....");
  });
});
