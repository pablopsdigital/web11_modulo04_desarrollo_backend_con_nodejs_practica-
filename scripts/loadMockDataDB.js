"use strict";

// conexion a la base de datos
const dbConnection = require("../services/connectionBD_Mongo");

// modelo de agentes
const Advertisement = require("../models/Advertisement");
const inicitalData = require("./mockData.json");

main().catch((err) => console.log("There was an error", err));

async function main() {
  await initinitAdvertisements();
  dbConnection.close();
}

async function initinitAdvertisements() {
  // Delete possible documents
  const deleted = await Advertisement.deleteMany();
  console.log(`Deleted ${deleted.deletedCount} advertisements.`);

  // Create mockData advertisement
  const advertisements = await Advertisement.insertMany(
    inicitalData.advertisement
  );
  console.log(`Create ${advertisements.length} advertisements.`);
}
