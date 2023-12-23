
import ConnectwithMongo from "@/lib/mongo";


export default async function handler(req, res) {
    const db = new ConnectwithMongo()
    const client = await db.connectDatabase()

    const database = client.db('A_database');
    const collection = database.collection('products');
    switch (req.method) {
        case 'GET':
            const data = await collection.find({}).toArray();
            res.status(200).json(data);
            break;
        case 'POST':
            const product = req.body;
            const result = await collection.insertOne(product);
            res.status(201).json(result);
            break;
        default:
            res.status(400);
    }

    await db.disconnectDatabase()



}
