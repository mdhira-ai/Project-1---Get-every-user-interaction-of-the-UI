'use client'

import { socket } from '@/lib/mySocket';
import React, { useEffect, useState } from 'react';




const page = () => {

    const [webapidata, setwebapidata] = useState(null)



    useEffect(() => {


        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
            });
        }

        else{
            console.log('Geolocation is not supported by this browser.');
        }



    },[]);
  
    
 // Event listener for 'connect'
// useEffect(() => {
//     const handleConnect = () => {
//         console.log('connected', socket.id);
//     };

//     // Event listener for 'disconnect'
//     const handleDisconnect = (reason) => {
//         console.log('disconnected', reason);
//     };

//     // Register event listeners
//     socket.on('connect', handleConnect);
//     socket.on('disconnect', handleDisconnect);

//     // Log socket.id on mount
//     if (socket.id){
//         console.log('connected', socket.id);
//     }

//     // Cleanup function
//     return () => {
//         // Remove event listeners
//         socket.off('connect', handleConnect);
//         socket.off('disconnect', handleDisconnect);
//     };
// }, []);


   


    return (
        <div>

            <input
                className=' bg-black'
                id='myinput'
                type="text"
            />


          

            {/* Your React component content */}
        </div>
    );
};

export default page;
