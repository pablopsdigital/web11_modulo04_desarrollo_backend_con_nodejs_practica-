"use strict";

const express = require("express");
const router = express.Router();
const advertisementController = require("../../../controllers/advertisementController");

router.get("/list", advertisementController.list);
router.post("/add", advertisementController.add);
router.post("/query", advertisementController.query);
router.post("/update", advertisementController.update);
router.post("/remove", advertisementController.remove);

module.exports = router;
