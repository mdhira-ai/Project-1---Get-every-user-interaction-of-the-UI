const { MongoClient } = require('mongodb')

class ConnectwithMongo {

  constructor(db) {
    this.client = null;
    this.url = 'mongodb://127.0.0.1:27017/'
    this.db = db

  }

  async connectDatabase() {
    if (this.client) return this.client;
    this.client = await MongoClient.connect(this.url);
    return this.client
  }

  async disconnectDatabase() {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  }

  async getCollection(collectionName) {
    const client = await this.connectDatabase();
    const database = client.db(this.db);
    const collection = database.collection(collectionName);
    return collection;
  }


}

module.exports = ConnectwithMongo;





