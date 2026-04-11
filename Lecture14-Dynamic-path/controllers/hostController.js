const Home = require("../models/home");

const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render('host/edite-home', {
    pageTitle: 'Add Home to airbnb', 
    currentPage:'addHome',
     editing : false, 
  });
}

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true' ;
  
  Home.findById(homeId, (home) => {
    if(!home){
      console.log("home not found for editing");  
     return res.redirect('/host/host-home-list');
    }
      console.log('homeId:', homeId, 'editing:', editing); 
     res.render('host/edite-home', {
    pageTitle: 'edit home to airbnb', 
    currentPage:'host-home',
    editing : editing ,
    
  });
  })
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
  res.render('host/home-added', {pageTitle: 'Home Added Successfully', currentPage: "homeAdded"});
}




