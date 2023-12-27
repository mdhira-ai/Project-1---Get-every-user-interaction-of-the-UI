class Crud {
    constructor(collection) {
        this.collection = collection;
    }

    async create(data) {
        const result = await this.collection.insertOne(data);
        return result;
    }

    async read(query) {
        const result = await this.collection.find(query).toArray();
        return result;
    }

    async update(query, data) {
        const result = await this.collection.updateOne(query, { $set: data });
        return result;
    }

    async delete(query) {
        const result = await this.collection.deleteOne(query);
        return result;
    }

}

export default Crud;