const initModels = require("../models/initModels");
const Cars = require("../models/cars.model");
const db = require("../utils/database");
const Users = require("../models/users.model");
const userSeed = require("./users.seed");
const carSeed = require("./cars.seed");

initModels();

let users, sellerIds, cars;
userSeed().then((data) => {
  users = data;
  sellerIds = users.map((user) => user.id);
  cars = carSeed(sellerIds);
});

db.sync({ force: true }).then(() => {
  console.log("Seeding...");
  cars.forEach(async (car) => await Cars.create(car));
  console.log("Seed planted ;)");
  setTimeout(() => {
    users.forEach(async (user) => await Users.create(user));
  }, 100);
});
