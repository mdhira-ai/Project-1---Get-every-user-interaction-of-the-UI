'use client'

import Webapi from "@/lib/MyLib";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";


const page = () => {
    const [data, setdata] = useState([])

    const c = new Webapi()


    useEffect(() => {

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
                            "ip": JSON.parse(res).ip
                        },
                    ])
                    .select()
                    .then(log => {
                        console.log(log)
                    
                    })


                // setdata(
                //     {
                //         ...JSON.parse(res),
                //         "OS": c.GetOS(),
                //         "ScreenResolution": c.GetScreenResolution(),
                //         "BrowserVersion": c.GetBrowserVersion(),
                //         "Browser": c.GetBrowser(),
                //         "BatteryInfo": e,
                //         "Language": c.GetLanguage(),
                //         "Languages": c.GetLanguages(),
                //         "Online": c.GetOnline(),
                //         "Platform": c.GetPlatform(),
                //         "Product": c.GetProduct(),
                //         "UserAgent": c.GetUserAgent(),
                //         "Vendor": c.GetVendor(),
                //         "VendorSub": c.GetVendorSub(),
                //         "CookieEnabled": c.GetCookieEnabled(),
                //     }
                // )

            })
        })



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