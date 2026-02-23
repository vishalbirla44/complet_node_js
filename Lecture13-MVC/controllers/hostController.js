const Home = require("../models/home");

const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', {pageTitle: 'Add Home to airbnb'});
}

exports.getHostHomes= (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => 
  res.render('host/host-home-list', 
    {registeredHomes: registeredHomes,
     pageTitle: 'Host Homes List', 
     currentPage: 'host-home'
    })
);
}

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body,);

  const {houseName, pricePerNight, location, rating, photoUrl} = req.body 
  const home = new Home (houseName, pricePerNight, location, rating, photoUrl);
  home.save()
  

  registeredHomes.push({houseName: req.body.houseName,
     pricePerNight: req.body.pricePerNight,
      location: req.body.location,
      rating: req.body.rating,
      photoUrl: req.body.photoUrl
      
    });
  res.render('host/home-added', {pageTitle: 'Home Added Successfully'});
}




