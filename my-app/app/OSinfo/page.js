'use client'

import Webapi from "@/lib/MyLib";
import { socket } from "@/lib/mysocket";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";


const page = () => {
    const [data, setdata] = useState([])

    const c = new Webapi()


    useEffect(() => {

        
        
        function connect() {
            console.log('connect')
            
        }
        
        function disconnect() {
            console.log('disconnect')
            
        }
        
        socket.on('connect', connect)
        
        
        socket.on('disconnect', disconnect)
        
        
        if(socket) [
            c.GetBatteryInfo().then((e) => {
    
                c.GetIP().then((res) => {
                    console.log(JSON.parse(res).ip)
    
                    supabase
                        .from('userinfo')
                        .insert([
                            { 
                                "OS": c.GetOS(),
                                "ScreenResolution": c.GetScreenResolution(),
                                "BrowserVersion": c.GetBrowserVersion(),
                                "Browser": c.GetBrowser(),
                                "BatteryInfo": e,
                                "Language": c.GetLanguage(),
                                "Languages": c.GetLanguages(),
                                "Online": c.GetOnline(),
                                "Platform": c.GetPlatform(),
                                "Product": c.GetProduct(),
                                "UserAgent": c.GetUserAgent(),
                                "Vendor": c.GetVendor(),
                                "VendorSub": c.GetVendorSub(),
                                "CookieEnabled": c.GetCookieEnabled(),
                                "ip": JSON.parse(res).ip,
                                "socketid":socket?.id,
                                "Date": new Date().toLocaleDateString(),
                                "startTime": new Date().toLocaleTimeString(),
                            },
                        ])
                        .select()
                        .then(log => {
                            console.log(log)
    
                        })
    
    
                    setdata(
                        {
                            ...JSON.parse(res),
                            "OS": c.GetOS(),
                            "ScreenResolution": c.GetScreenResolution(),
                            "BrowserVersion": c.GetBrowserVersion(),
                            "Browser": c.GetBrowser(),
                            "BatteryInfo": e,
                            "Language": c.GetLanguage(),
                            "Languages": c.GetLanguages(),
                            "Online": c.GetOnline(),
                            "Platform": c.GetPlatform(),
                            "Product": c.GetProduct(),
                            "UserAgent": c.GetUserAgent(),
                            "Vendor": c.GetVendor(),
                            "VendorSub": c.GetVendorSub(),
                            "CookieEnabled": c.GetCookieEnabled(),
                            "Date": new Date().toLocaleDateString(),
                            "startTime": new Date().toLocaleTimeString(),
                            "socketid":socket?.id,



                        }
                    )
    
                })
            })

        ]


        return () => {
            socket.off('connect', connect)
            socket.off('disconnect', disconnect)

        }

    }, [])




    return (
        <div>

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>


        </div>
    );
}

export default page;