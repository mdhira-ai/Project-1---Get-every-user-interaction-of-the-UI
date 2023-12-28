'use client'

import Webapi from "@/lib/MyLib";
import { socket } from "@/lib/mysocket";
import { supabase } from "@/lib/supabase";
import axios from "axios";
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


        if (socket) [
            c.GetBatteryInfo().then((e) => {

                c.GetIP().then((res) => {

                    const ip = JSON.parse(res).ip

                    axios.get(`https://ipinfo.io/${ip}/json?token=d8017e21ede2b2`).then((res) => {

                        setdata(
                            {
                                "ip" : ip,
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
                                "socketid": socket?.id,
                                "City": res.data?.city,
                                "Region": res.data?.region,
                                "Country": res.data?.country,
                                "location": res.data?.loc,
                                "Postal": res.data?.postal,
                                "Timezone": res.data?.timezone,
                                "Org": res.data?.org,
                                "Hostname": res.data?.hostname,



                            }
                        )

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
                                    "ip": ip,
                                    "socketid": socket?.id,
                                    "Date": new Date().toLocaleDateString(),
                                    "startTime": new Date().toLocaleTimeString(),
                                    "city": res.data?.city,
                                    "region": res.data?.region,
                                    "country": res.data?.country,
                                    "location": res.data?.loc,
                                    "postal": res.data?.postal,
                                    "timezone": res.data?.timezone,
                                    "org": res.data?.org,
                                    "hostname": res.data?.hostname,


                                },
                            ])
                            .select()
                            .then(log => {
                                console.log(log)

                            })



                    })

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