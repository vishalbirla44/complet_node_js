const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
}



exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body,);
  registeredHomes.push({houseName: req.body.houseName,
     pricePerNight: req.body.pricePerNight,
      location: req.body.location,
      rating: req.body.rating,
      photoUrl: req.body.photoUrl
    });
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
}



exports.getHomes= (req, res, next) => {
  console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
}
