// Core Modules
const db = require("../utils/databaseUtil")


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl,discraption,id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.discraption= discraption;
    this.id = id
  }

  save() {
   return db.execute('INSERT INTO homes (houseName, price, location, rating, photoUrl,discraption) VALUES (?,?,?,?,?,?)',[this.houseName,this.price,this.location,this.rating,this.photoUrl,this.discraption]);
  }

  static fetchAll(callback) {
   return db.execute('SELECT * FROM homes')
  
  }




  static findById(homeId, callback) {

  }

  static deleteById(homeId, callback) {

  }
};