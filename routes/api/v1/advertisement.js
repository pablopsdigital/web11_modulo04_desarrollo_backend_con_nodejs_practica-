"use strict";

const express = require("express");
const router = express.Router();
const advertisementController = require("../../../controllers/advertisementController");

router.get("/", advertisementController.getAllAdvertisements);
router.get("/:advertisementId", advertisementController.getOneAdvertisement);
router.get("/tags/list", advertisementController.getAllTagsAdvertisements);
router.post("/add", advertisementController.createAdvertisement);
router.put("/update", advertisementController.updateAdvertisement);
router.delete("/delete", advertisementController.deleteAdvertisement);

module.exports = router;
