"use strict";

const express = require("express");
const router = express.Router();
const advertisementController = require("../../../controllers/advertisementController");

router.get("/", advertisementController.list);
router.get("/tags-list", advertisementController.tagsList);
router.post("/add", advertisementController.add);
router.post("/query", advertisementController.query);
router.put("/update", advertisementController.update);
router.delete("/remove", advertisementController.remove);

module.exports = router;
