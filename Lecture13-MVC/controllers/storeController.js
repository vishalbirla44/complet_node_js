const Home = require("../models/home");

const registeredHomes = [];

exports.getIndex= (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => 
  res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'index'})
);
}
exports.getHomes= (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => 
  res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'Homes List', currentPage: 'home'})
);
}
  
exports.getBookings = (req, res, next) => { 
  res.render('store/bookings', { pageTitle: 'my bookings' , currentPage: 'bookings'})
}

exports.getFavourites= (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => 
  res.render('store/favourite-list', {registeredHomes: registeredHomes, pageTitle: 'My Favourittes', currentPage: 'favourites'})
);
}