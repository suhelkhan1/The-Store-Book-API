
const mongoose = require('mongoose');

class Connection {

  constructor(options) {
    this.options = {
      dburl: 'mongodb+srv://store-book-db:StoreBook@123@store-book-db-mhjl2.mongodb.net/test?retryWrites=true&w=majority',
    };
    this.client = undefined;
  }

  createConnection() {
    return new Promise (async (resolve, reject) => {
      try {
        this.client = await mongoose.connect(this.options.dburl, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        resolve(this.client);
      } catch (err) {
        reject(err);
      }
    })
  }

  getDB() {
    return new Promise (async (resolve, reject) => {
      try {
        const db = await mongoose.connection;
        resolve(db);
      } catch (err) {
        reject(err);
      }
    })
  }
}

module.exports = new Connection();
