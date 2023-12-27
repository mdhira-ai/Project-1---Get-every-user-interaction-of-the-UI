

import ConnectwithMongo from "@/lib/mongo";

export default async function handler(req, res) {
    // Check if the request method is GET
    if (req.method === 'GET') {

        const client = new ConnectwithMongo('A_database')

        try {

            const collection = await client.getCollection('products')
            const data = await collection.find({}).toArray()


            res.status(200).send(data)



        } catch (error) {
            // Handle errors
            res.status(500).send({ error: 'Internal Server Error' });
        } finally {
            // Disconnect from the database
            await client.disconnectDatabase()
        }
    } else {
        // If the request method is not GET, return a 405 Method Not Allowed status
        res.status(405).send({ error: 'Method Not Allowed' });

    }
}



