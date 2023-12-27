const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const ConnectwithMongo = require('./mongo');

const app = express();

const server = http.createServer(app);
const io = socketIO(server);
app.use(cors({
    origin: 'http://localhost:3000/'
}));



// database
let db = new ConnectwithMongo('A_database')

async function Database() {
    const collection = await db.getCollection('userinfo')

    return collection

}



io.on('connection', (socket) => {
    console.log('A user connected', socket.id);

    // Handle events from the client
    socket.on('webapi', (data) => {
        console.log('Message from client:', data);
        // Broadcast the message to all connected clients
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        // for last modified
        const date = new Date()
        const lasttime = date.toLocaleTimeString()
        console.log('User disconnected', socket.id);
        // update disconnect user
        let id = socket.id;
        let query = { socketid: id };
        let newvalues = { $set: { Online: false, lastModified: lasttime } };

        Database().then((collection) => {
            collection.updateOne(query, newvalues).then(() => {
                db.disconnectDatabase().then(() => {
                    console.log('Database disconnected');
                })
            }).catch((err) => console.error(err))
            
        }
        )






    });
});


// Close the database connection when the server is stopped
process.on('SIGINT', async () => {
    await db.disconnectDatabase();
    process.exit();
});


const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
