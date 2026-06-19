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
   if(this.id){
    return db.execute('UPDATE homes SET houseName=?, price=?, location=?, rating=?, photoUrl=?,discraption=? WHERE id=?',[this.houseName,this.price,this.location,this.rating,this.photoUrl,this.discraption , this.id]);
   }
   else{
    return db.execute('INSERT INTO homes (houseName, price, location, rating, photoUrl,discraption) VALUES (?,?,?,?,?,?)',[this.houseName,this.price,this.location,this.rating,this.photoUrl,this.discraption]);

   }
  }

  static fetchAll(callback) {
   return db.execute('SELECT * FROM homes')
  
  }




  static findById(homeId) {
    return db.execute('SELECT * FROM homes WHERE id=?',[homeId]);
  }

  static deleteById(homeId) {
    return db.execute(' DELETE FROM homes WHERE id=?',[homeId]);
  }
};