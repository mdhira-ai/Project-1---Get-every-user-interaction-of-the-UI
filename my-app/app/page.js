"use client";
import VerticalTab from "@/components/VerticalTab";
import { socket } from "@/lib/mySocket";
import Webapi from "@/lib/webApiLib";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {


  const c = new Webapi();
  const date = new Date();



  useEffect(() => {
    const handleConnect = () => {
      console.log('connected', socket.id);
    };

    // Event listener for 'disconnect'
    const handleDisconnect = (reason) => {
      console.log('disconnected', reason);
    };

    // Register event listeners
    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);

    // Log socket.id on mount
    if (socket.id) {
      c.GetBatteryInfo().then((e) => {
        c.GetIP().then((myip) => {

          let ip = JSON.parse(myip)?.ip

          axios.get(`https://ipinfo.io/${ip}/json?token=d8017e21ede2b2`).then((res) => {
            console.log(res.data?.city)

            axios
              .post("/api/inituser", {


                ...JSON.parse(res),
                city:res.data?.city,
                region:res.data?.region,
                country:res.data?.country,
                postal:res.data?.postal,
                timezone:res.data?.timezone,
                latitude:res.data?.loc?.split(',')[0],
                longitude:res.data?.loc?.split(',')[1],
                org:res.data?.org,
                Date: date.toLocaleDateString(),
                startTime: date.toLocaleTimeString(),
                OS: c.GetOS(),
                ScreenResolution: c.GetScreenResolution(),
                BrowserVersion: c.GetBrowserVersion(),
                Browser: c.GetBrowser(),
                BatteryInfo: e,
                Language: c.GetLanguage(),
                Languages: c.GetLanguages(),
                Online: c.GetOnline(),
                Platform: c.GetPlatform(),
                Product: c.GetProduct(),
                UserAgent: c.GetUserAgent(),
                Vendor: c.GetVendor(),
                VendorSub: c.GetVendorSub(),
                CookieEnabled: c.GetCookieEnabled(),
                socketid: socket.id,
              })
              .then((res) => {
                if (res.data) {
                  console.log(res.data);
                  sessionStorage.setItem('id', res.data)





                }
              }).catch((err) => {
                console.log(err);
              });
          })
        });
      });
    }

    // Cleanup function
    return () => {
      // Remove event listeners
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
    };
  }, []);



  return (
    <>
      <VerticalTab />
    </>
  );
};

export default page;
