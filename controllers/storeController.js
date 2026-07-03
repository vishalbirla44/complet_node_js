const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.find().then(registeredHomes =>{
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  })
};

exports.getHomes = (req, res, next) => {
  Home.find().then(registeredHomes =>{
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
});
};


exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.find()
  .populate('houseID')
  .then((favourites) => {
    const favouriteHomes = favourites
      .map((fav) => fav.houseID)
      .filter((home) => home != null);

    const orphanedFavourites = favourites.filter((fav) => fav.houseID == null);
    if (orphanedFavourites.length) {
      Favourite.deleteMany({
        _id: { $in: orphanedFavourites.map((fav) => fav._id) },
      });
    }

    res.render("store/favourite-list", {
      favouriteHomes: favouriteHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  const homeID =req.body.id
  Favourite.findOne({houseID: homeID}).then((fav) => {
    if(fav){
      console.log("alredy marked as favourite");
      res.redirect("/favourites");
    }else{
      fav = new Favourite({houseID: homeID});
      fav.save().then(result =>{
        console.log('fav added :',result);
      });
    }
    res.redirect("/favourites");
  }).catch(err =>{
    console.log('error to add favourites',err)
  })
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({houseID: homeId}).then(result =>{
    console.log('fav removed :',result);
  }).catch(err =>{
    console.log('error to remove favourites',err)
  }).finally(()=>{
    res.redirect("/favourites");
  })
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
Home.findById(homeId).then(home => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  })
};