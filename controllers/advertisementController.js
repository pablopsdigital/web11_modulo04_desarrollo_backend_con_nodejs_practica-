"use strict";

const Advertisement = require("../models/Advertisement");

//List advertisement
const list = async (req, res, next) => {
  try {
    const name = req.query.name;
    const sale = req.query.sale;
    const price = req.query.price;
    const tags = req.query.tags;

    const select = req.query.select;
    const sort = req.query.sort;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);

    const filter = {};

    if (name) {
      filter.name = new RegExp("^" + name.toLowerCase(), "i");
    }

    if (sale) {
      filter.sale = sale;
    }

    if (price) {
      const priceSplitted = price.split("-");

      //10-50  Price indluded between the two value
      if (priceSplitted[0] !== "" && priceSplitted[1] !== "") {
        // console.log(`Price between ${priceSplitted[0]} and ${priceSplitted[1]}`);

        filter.price = {
          $gte: priceSplitted[0],
          $lte: priceSplitted[1],
        };
      }

      //10- Price greater than value, excluding value
      if (priceSplitted[0] !== "" && priceSplitted[1] === "") {
        //console.log(`Price greater than ${priceSplitted[0]}`);

        filter.price = {
          $gt: priceSplitted[0],
        };
      }

      //-50 Price less than value, excluding value
      if (priceSplitted[0] === "" && priceSplitted[1] !== "") {
        //console.log(`Price less than ${priceSplitted[1]}`);

        filter.price = {
          $lte: priceSplitted[1],
        };
      }

      //50 Price equal to value
      if (priceSplitted[0] !== "" && priceSplitted[1] === undefined) {
        //console.log(`Price is equal to ${priceSplitted[1]}`);

        filter.price = {
          $eq: priceSplitted[0],
        };
      }
    }

    if (tags) {
      filter.tags = { $all: tags };
    }

    const advertisementList = await Advertisement.findList(
      filter,
      skip,
      limit,
      select,
      sort
    );
    res.status(200).json({ results: advertisementList });
  } catch (err) {
    res.status(500).send({
      message: "An error occurred while consulting the list of advertisements.",
    });
    next(err);
  }
};

//List tags all advertisement
const tagsList = async (req, res, next) => {
  try {
    // Return list attaking the enum of the Schema
    // const TempAdvertisement = await require("mongoose")
    //   .model("Advertisement")
    //   .schema.path("tags").enumValues;

    const advertisementList = await Advertisement.find();

    //Return only the tags from each object
    var listAllTags = advertisementList.flatMap(function (advertisement) {
      return advertisement.tags;
    });

    //Delete duplicates array tags
    let finalList = [...new Set(listAllTags)];
    res.status(200).json({ results: finalList });
  } catch (err) {
    res.status(500).send({
      message: "An error occurred while trying to display the list of tags.",
    });
    next(err);
  }
};

//Add a advertisement
const add = async (req, res, next) => {
  try {
    const advertisementData = req.body;
    const advertisementCreated = await new Advertisement(
      advertisementData
    ).save();

    res.status(201).json({ result: advertisementCreated });
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
    const _id = req.query._id;
    const resultQuery = await Advertisement.findOne({ _id });

    if (!resultQuery) {
      res.status(404).json({
        error: `The record with id: ${_id} does not exist`,
      });
      return;
    }
    res.status(200).json({ result: resultQuery });
  } catch (err) {
    res.status(500).send({
      message: "An error occurred while viewing the advertisement.",
    });
    next(err);
  }
};

//Update advertisement
const update = async (req, res, next) => {
  try {
    const _id = req.body._id;
    const advertisementData = req.body;
    const resultQuery = await Advertisement.findOneAndUpdate(
      { _id },
      advertisementData,
      { new: true }
    );

    if (!resultQuery) {
      res.status(404).json({
        error: `The record with id: ${_id} does not exist`,
      });
      return;
    }

    res.status(200).json({ result: resultQuery });
  } catch (err) {
    res.status(500).send({
      message: "An error occurred while updating the advertisement.",
    });
    next(err);
  }
};

//Remove advertisement
const remove = async (req, res, next) => {
  try {
    const _id = req.body._id;
    const resultQuery = await Advertisement.findByIdAndDelete({ _id });

    if (!resultQuery) {
      res.status(404).json({
        error: `The record with id: ${_id} does not exist`,
      });
      return;
    }
    res.status(200).json({ result: resultQuery });
  } catch (err) {
    res.status(500).send({
      message: "An error occurred while the advertisement was being removed.",
    });
    next(err);
  }
};

module.exports = {
  add,
  tagsList,
  query,
  list,
  update,
  remove,
};
