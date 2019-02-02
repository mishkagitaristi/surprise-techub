const fs = require("fs");
const path = require("path");

const usersLocation = path.join(__dirname, "/db", "users.json");
const getUsers = () => JSON.parse(fs.readFileSync(usersLocation));
const saveUsers = (users) => fs.writeFileSync(usersLocation, JSON.stringify(users, null, 2));

module.exports = {usersLocation, getUsers, saveUsers};