'use client'

import Webapi from "@/lib/MyLib";
import { useEffect, useState } from "react";


const page = () => {
    const [data, setdata] = useState([])

    const c = new Webapi()


    useEffect(() => {
        console.log(c.GetOS())
        console.log(c.GetScreenResolution())
        console.log(c.GetBrowserVersion())
        console.log(c.GetBrowser())
        console.log(c.GetIP())
        
        c.GetBatteryInfo().then((e) => {

            c.GetIP().then((res) => {
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
                    }
                )

            } )
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