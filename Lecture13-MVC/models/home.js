const registeredHomes = [];

module.exports = class Home {
    constructor(houseName, pricePerNight, location, rating, photoUrl) {
        this.houseName = houseName;
        this.pricePerNight =pricePerNight;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
    }
    save() {
        registeredHomes.push(this);
    }

    static fetchAll() {
        return registeredHomes
    }
}