import { useEffect, useState } from "react";
import React from 'react';
import Modal from "./Modal";


const ShoppingSection = () => {
    const [items, setitems] = useState([])



    function GetItems() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setitems(json))
    }

    useEffect(() => {
        GetItems()

    }, [
        items
    ])

    function imgclick(id) {


        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = items[id - 1].image;
        captionText.innerHTML = items[id - 1].title;
    }




    return (
        <div>
            {
                items?.map((item) => (


                    <div
                        key={item.id}
                        onClick={() => imgclick(item.id)}
                        className="inline-block mr-6 mt-7 mb-6 overflow-hidden cursor-pointer"
                        style={{
                            width: "18rem",
                            height: "30rem",
                            // margin: "2rem",
                            padding: "2rem",
                            borderRadius: "1rem",
                            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                        }}

                    >

                        <img
                            src={item.image}
                            className="card-img-top"
                            alt="..."
                            style={{
                                width: "18rem",
                                height: "18rem",
                                objectFit: "cover",
                            }}
                        />

                        <div className="flex flex-col justify-center items-left   ">
                            <h5 className="whitespace-nowrap overflow-hidden text-ellipsis ">{item.title}</h5>
                            <h5 className="font-bold">$ {item.price}</h5>
                            {/* <p className=" whitespace-nowrap overflow-hidden text-ellipsis  ">
                                {item.description}
                            </p> */}
                            <button className="
                            bg-blue-500
                            hover:bg-blue-700
                            text-white
                            font-bold
                            py-2
                            px-4
                            mt-5
                            ">Add to Cart</button>
                        </div>



                    </div>

                ))

            }
            <Modal />



        </div>
    );
}

export default ShoppingSection;