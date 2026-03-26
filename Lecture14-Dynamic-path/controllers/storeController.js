const Favourite = require("../models/favourite");
const Home = require("../models/home");

const registeredHomes = [];

exports.getIndex = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render('store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currentPage: 'index',
    })
  );
}
exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render('store/home-list',
      {
        registeredHomes: registeredHomes,
        pageTitle: 'Homes List',
        currentPage: 'home'
      })
  );
}

exports.getBookings = (req, res, next) => {
  res.render('store/bookings', {
    pageTitle: 'my bookings',
    currentPage: 'bookings'
  })
}

exports.getFavourites = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) =>
    res.render('store/favourite-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'My Favourittes',
      currentPage: 'favourites'
    })
  );
}

exports.postAddFavourites = (req,res,next) => {
  console.log("come to add to favourites", req.body)

  Favourite.addToFavourite(req.body.id,error => {
   if(error){
    console.log("error in adding to favourites", error);
   }
   res.redirect("/favourites");
  });
  
}



exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  
  Home.findById(homeId, home => {
console.log("home finded", home);
    if(!home){
      res.redirect("/homes");
    }
    
    else{
     res.render('store/home-details',
    {
      home:home,
      pageTitle: 'Homes details',
      currentPage: 'home'
    })

    }

  })
 

}