const { v4: uuidv4 } = require("uuid");

const messages = [
  {
    id: uuidv4(),
    message: "Hello",
  },
];

module.exports = messages;
