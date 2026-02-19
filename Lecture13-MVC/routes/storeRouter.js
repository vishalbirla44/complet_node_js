// Core Modules
const path = require('path');

// External Module
const express = require('express');
const storeRouter = express.Router();

// Local Module
const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getHomes);
storeRouter.get("/bookings", homesController.getBookings);


module.exports = storeRouter;