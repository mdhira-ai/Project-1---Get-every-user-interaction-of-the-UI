'use client'
import VerticalTab from "@/components/VerticalTab";
import { useEffect } from "react";
import axios from "axios";
import { supabase } from "@/lib/supabase";

const page = () => {






  useEffect(() => {


    supabase
      .from('userinfo')
      .select('*').then((value) => {
        console.log(value.data)

      })



    // axios.get('/api/getip').then(res => {
    //   console.log(res.data);

    // })


    // fetch('https://checkip.amazonaws.com/')
    // .then(res => res.text())
    // .then(json => console.log(json))


  }, []);





  return (
    <>

      <VerticalTab />



    </>
  );
}

export default page;