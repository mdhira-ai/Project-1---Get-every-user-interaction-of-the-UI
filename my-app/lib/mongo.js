import { MongoClient } from "mongodb";

class ConnectwithMongo {

  constructor() {
    this.client = null;
    this.url = process.env.MONGODB_URI

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


}



export default ConnectwithMongo;
