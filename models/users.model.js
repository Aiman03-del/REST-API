const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Aiman uddin",
    email: "lalalal@yahoo.com",
  },
  {
    id: uuidv4(),
    username: "Al arman",
    email: "lalalal@yahoo.com",
  },
  {
    id: uuidv4(),
    username: "Azhar uddin",
    email: "lalalal@yahoo.com",
  },
];
module.exports = users;
