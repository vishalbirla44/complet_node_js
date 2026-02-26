// core module
const path = require('path');
const fs = require('fs');

// local module
const rootDir = require('../utils/pathUtil');



// let registeredHomes = [];

 const homeDataPath = path.join(rootDir, 'data' , 'homes.json');


module.exports = class Home {
    constructor(houseName, pricePerNight, location, rating, photoUrl) {
        this.houseName = houseName;
        this.pricePerNight =pricePerNight;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }
    save() {
        this.id = Math.random().toString();
       Home.fetchAll((registeredHomes)=> {
        registeredHomes.push(this);
        fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),(error) =>{
            console.log("file write concluded" , error) ;
        })
        })
    }

    static fetchAll(callback) {
         
          fs.readFile(homeDataPath, (error, data) => {

            callback(!error ? JSON.parse(data) : []) ;
          })
        
    }
   static findById( homeId, callback) {
      this.fetchAll(homes => {
        const homefound = homes.find(home => home.id ===homeId);
        callback(homefound);
      })
   }

    }
