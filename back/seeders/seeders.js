const initModels = require("../models/initModels");
const Cars = require("../models/cars.model");
const db = require("../utils/database");
const Users = require("../models/users.model");

initModels();

const cars = [
  {
    year: 2021,
    brand: "Toyota",
    model: "Supra",
    color: "black",
    transmission: "automatic",
    doors: "3",
    engine_capacity: "5.0 L",
    km: 50000,
    last_plate: 1,
    city: "Barranquilla",
    price: 200000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "coupe",
    fuel: "petrol",
    images:
      ["https://picolio.auto123.com/auto123-media/articles/2020/12/67715/Toyota-GR-Supra-30-2021%20(17)fr.jpg?crop=0,682,2998,999&amp;scaledown=1024"],
  },
  {
    year: 1974,
    brand: "Renault",
    model: "4",
    color: "yellow",
    transmission: "mechanic",
    doors: "3",
    engine_capacity: "1.0 L",
    km: 350000,
    last_plate: 6,
    city: "Ibagué",
    price: 30000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "sedan",
    fuel: "petrol",
    images:
      ["https://prod.pictures.autoscout24.net/listing-images/ffff4463-9f23-4666-8cdd-6174a19a441d_d7da58eb-d3c2-45cf-b532-b276071e7884.jpg/250x188.webp"],
  },
  {
    year: 2007,
    brand: "Peugeot",
    model: "206",
    color: "gray",
    transmission: "mechanic",
    doors: "3",
    engine_capacity: "1.4 L",
    km: 150000,
    last_plate: 4,
    city: "Cali",
    price: 18000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "hatchback",
    fuel: "petrol",
    images:
      ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Peugeot_206_Quicksilver_90.jpg/1200px-Peugeot_206_Quicksilver_90.jpg"],
  },
  {
    year: 2018,
    brand: "Nissan",
    model: "Versa",
    color: "red",
    transmission: "automatic",
    doors: "4",
    engine_capacity: "1.6 L",
    km: 80000,
    last_plate: 3,
    city: "Bogotá D. C.",
    price: 45000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "sedan",
    fuel: "petrol",
    images:
      ["https://http2.mlstatic.com/D_NQ_NP_832734-MCO53430939251_012023-W.jpg"],
  },
  {
    year: 2022,
    brand: "Kia",
    model: "Stinger",
    color: "white",
    transmission: "automatic",
    doors: "4",
    engine_capacity: "2.5 L",
    km: 8000,
    last_plate: 1,
    city: "Medellín",
    price: 222222222,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "sedan",
    fuel: "petrol",
    images:
      ["https://i.pinimg.com/originals/1c/05/80/1c0580c8abc3a133e5901961194bbf63.jpg"],
  },
  {
    year: 2022,
    brand: "Chevrolet",
    model: "Joy",
    color: "black",
    transmission: "mechanic",
    doors: "4",
    engine_capacity: "1.4 L",
    km: 17000,
    last_plate: 9,
    city: "Cartagena",
    price: 50000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "sedan",
    fuel: "petrol",
    images: ["https://i.ytimg.com/vi/jgovxK1f_0s/maxresdefault.jpg"],
  },
  {
    year: 2013,
    brand: "Renault",
    model: "Logan",
    color: "gray",
    transmission: "mechanic",
    doors: "4",
    engine_capacity: "1.6 L",
    km: 85000000,
    last_plate: 1,
    city: "Buenos Aires",
    price: 30000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "sedan",
    fuel: "petrol",
    images:
      ["https://img.clasf.co/2020/07/04/Renault-Logan-Expression-1-6-2013-Gris-Estrella-Sedan-Rines-20200704010100.9239270015.jpg"],
  },
  {
    year: 2020,
    brand: "Toyota",
    model: "Hilux",
    color: "white",
    transmission: "mechanic",
    doors: "4",
    engine_capacity: "2.4 L",
    km: 40000,
    last_plate: 7,
    city: "Lima",
    price: 148000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "pick_up",
    fuel: "diesel",
    images:
      ["https://www.elcarrocolombiano.com/wp-content/uploads/2019/04/20190423-TOYOTA-HILUX-SPECIAL-EDITION-2019-01.jpg"],
  },
  {
    year: 2017,
    brand: "Mitsubishi",
    model: "Lancer",
    color: "black",
    transmission: "automatic",
    doors: "4",
    engine_capacity: "1.8 L",
    km: 12000,
    last_plate: 5,
    city: "Caracas",
    price: 40000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "sedan",
    fuel: "petrol",
    images:
      ["https://img.remediosdigitales.com/bd4c67/mitsubishi-lancer-evo-x-final-edition/1366_2000.jpg"],
  },
  {
    year: 2004,
    brand: "Opel",
    model: "Corsa",
    color: "green",
    transmission: "mechanic",
    doors: "4",
    engine_capacity: "1.2 L",
    km: 245000,
    last_plate: 1,
    city: "Santiago",
    price: 16000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "hatchback",
    fuel: "petrol",
    images:
      ["https://fotos.estaticosmf.com/fotos_jato/E/400/OPEL/CORSA/2002/5HA.JPG"],
  },
  {
    year: 2002,
    brand: "Renault",
    model: "Twingo",
    color: "gray",
    transmission: "mechanic",
    doors: "3",
    engine_capacity: "1.2 L",
    km: 80000,
    last_plate: 2,
    city: "Montevideo",
    price: 27000000,
    seller_id: "28c39fba-2e3f-4efa-b36e-49bfe904d54c",
    type: "hatchback",
    fuel: "petrol",
    images:
      ["https://rodaticarros.com.co/images/listings/2022-09/0699d892-1662034945-957.jpg"],
  },
];

const users = [
  {
    firstName: "Anselmo",
    lastName: "Riquelme",
    email: "anselmoriquelme@gmail.com",
    phone: "1234567890",
    password: "1234",
  },
];

db.sync({ force: true }).then(() => {
  console.log("Seeding...");
  cars.forEach(async (car) => await Cars.create(car));
  console.log("Seed planted ;)");
  setTimeout(() => {
    users.forEach(async (user) => await Users.create(user));
  }, 100);
});
