import ConnectwithMongo from "@/lib/mongo"

export default async function handler(req, res) {

    const data = req.body

    // console.log(data)

    const client = new ConnectwithMongo('A_database')
    const collection = await client.getCollection('userinfo')
    const d = await collection.insertOne(data)


    await client.disconnectDatabase()






    res.status(200).send(d.insertedId) 



}