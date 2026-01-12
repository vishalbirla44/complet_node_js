
// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const {getAddHome} = require("../controllers/homes");

hostRouter.get("/add-home", getAddHome);

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log('Home Registration successful for:', req.body,);
  registeredHomes.push({houseName: req.body.houseName,
     pricePerNight: req.body.pricePerNight,
      location: req.body.location,
      rating: req.body.rating,
      photoUrl: req.body.photoUrl
    });
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
