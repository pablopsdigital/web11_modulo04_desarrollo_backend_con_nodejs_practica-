"use strict";

const Advertisement = require("../models/Advertisement");

//List advertisement
const list = async (req, res, next) => {
  console.log("Hola");
  try {
    //res.json({ message: "list" });
    const advertisementList = await Advertisement.find();
    res.status(200).json({ results: advertisementList });
  } catch (err) {
    res.status(500).send({
      message: "An error occurred",
    });
    next(err);
  }
};

//Add a advertisement
const add = async (req, res, next) => {
  try {
    res.json({ message: "POST new tea" });
    // const reg = await Advertisement.create(reg.body);
    // res.status(200).json(reg);
  } catch (err) {
    res.status(500).send({
      message: "An error occurred while creating the advertisement.",
    });
    next(err);
  }
};

//Query a advertisement
const query = async (req, res, next) => {
  try {
    res.json({ message: "query" });
  } catch (err) {
    res.status(500).send({
      message: "An error occurred",
    });
    next(err);
  }
};

//Update advertisement
const update = async (req, res, next) => {
  try {
    res.json({ message: "update" });
  } catch (err) {
    res.status(500).send({
      message: "An error occurred",
    });
    next(err);
  }
};

//Remove advertisement
const remove = async (req, res, next) => {
  try {
    res.json({ message: "remove" });
  } catch (err) {
    res.status(500).send({
      message: "An error occurred",
    });
    next(err);
  }
};

module.exports = {
  add,
  query,
  list,
  update,
  remove,
};
