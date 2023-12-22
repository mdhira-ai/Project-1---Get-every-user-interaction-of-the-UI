'use client'

import Webapi from "@/components/MyLib";
import { useEffect } from "react";


const page = () => {

    const c = new Webapi()


    useEffect(() => {
        console.log(c.GetOS())
        console.log(c.GetScreenResolution())
        console.log(c.GetBrowserVersion())
        console.log(c.GetBrowser())
        c.GetBatteryInfo().then((e) => {
            console.log(e)
        })
      
    }, [])
    



    return (
        <div>

        </div>
    );
}

export default page;