import { supabase } from "@/lib/supabase";
import { Server } from "socket.io";

export default function SocketHandler(req, res) {

    const io = new Server(res.socket.server,{
        cors: {
            origin: "https://project-1-get-every-user-interaction-of-the-ui.vercel.app/",
            methods: ["GET", "POST"]
        }
    
    });
    res.socket.server.io = io;

    io.on("connection", (socket) => {

        console.log("Socket connected: ", socket.id);
        socket.on("send-message", (obj) => {
            io.emit("receive-message", obj);
        });

        socket.on('disconnect', () => {
            // for last modified
            const date = new Date();
            const lasttime = date.toLocaleTimeString();
            console.log('User disconnected', socket.id);
            // update disconnect user
            let id = socket.id;
    
            supabase.from('userinfo').update({
                lastModified: lasttime,
                Online: false
            }).eq(
                "socketid", id
            ).select().then((res) => {
                console.log(res.statusText);
            });
        });
    });

    console.log("Setting up socket");
    res.end();
}