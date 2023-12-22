'use client'
import VerticalTab from "@/components/VerticalTab";
import { useEffect } from "react";

const page = () => {



  
  
  
  useEffect(() => {
    fetch('https://checkip.amazonaws.com/')
    .then(res => res.text())
    .then(json => console.log(json))
  

  }, []);





  return (
    <>

      <VerticalTab />



    </>
  );
}

export default page;