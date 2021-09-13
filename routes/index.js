var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var advertisementList = [
    {
      name: "Titulo anuncio",
      sale: true,
      price: 230.53,
      photo: "bike.jpg",
      tags: ["Lifestyle", " Mobile"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: false,
      price: 230.53,
      photo: "iphone.png",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: true,
      price: 230.53,
      photo: "surf.webp",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: true,
      price: 230.53,
      photo: "bike.jpg",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: false,
      price: 230.53,
      photo: "iphone.png",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: true,
      price: 230.53,
      photo: "surf.webp",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: true,
      price: 230.53,
      photo: "bike.jpg",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: false,
      price: 230.53,
      photo: "iphone.png",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: true,
      price: 230.53,
      photo: "surf.webp",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: true,
      price: 230.53,
      photo: "bike.jpg",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: false,
      price: 230.53,
      photo: "iphone.png",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
    {
      name: "Titulo anuncio",
      sale: true,
      price: 230.53,
      photo: "bike.jpg",
      tags: ["tag1", " tag2"],
      createdAt: "2021-09-11",
    },
  ];
  res.render("pages/index", {
    title: "Express",
    advertisementList: advertisementList,
  });
});

module.exports = router;
