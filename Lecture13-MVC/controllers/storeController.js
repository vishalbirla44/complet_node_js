const Home = require("../models/home");

const registeredHomes = [];

exports.getHomes= (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => 
  res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'home'})
);
}

  
exports.getBookings = (req, res, next) => { 
  res.render('store/bookings', { pageTitle: 'my bookings' , currentPage: 'bookings'})
}

exports.getfavourite = (req, res, next) => { 
  res.render('store/favourite', { pageTitle: 'my Favourite ' , currentPage: 'favourite'})
}