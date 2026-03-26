// core module
const path = require('path');
const fs = require('fs');

// local module
const rootDir = require('../utils/pathUtil');



// let registeredHomes = [];

 const favouriteDataPath = path.join(rootDir, 'data' , 'favourite.json');


module.exports = class Favourite {

    static addToFavourite(homeId,callback){
      Favourite.getfavourite((favourites)=> {
             registeredHomes.push(this);

             if(favourites.includes(homeId)){
                console.log("already in favourites");
             }

             else{
             favourites.push(homeId);
              fs.writeFile(favouriteDataPath,JSON.stringify(favourites),callback) 
             }
             })
    }



   static getfavourite(callback){
    fs.readFile(favouriteDataPath, (error, data) => {
               callback(!error ? JSON.parse(data) : []) ;
             })
   }
   

    }
