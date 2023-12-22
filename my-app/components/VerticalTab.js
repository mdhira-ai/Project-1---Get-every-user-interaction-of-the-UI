import React, { useEffect } from 'react';
import Tab1 from './Tab1';
import './VerticalTab.css'


const VerticalTab = () => {


    useEffect(() => {
        openCity(null, '1')
        let tablinks = document.getElementsByClassName("tablinks");

        tablinks[0].className += " active"

    }, [
        openCity
    ])





    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");

        }
        document.getElementById(cityName).style.display = "block";
        if (evt) evt.currentTarget.className += " active";

    }



    return (
        <>

            <div className="tab ">
                <button className="tablinks" onClick={(event) =>
                    openCity(event, '1')
                }>Home</button>
                <button className="tablinks" onClick={(event) =>
                    openCity(event, '2')

                }>Recommendation</button>
                <button className="tablinks" onClick={(event) =>
                    openCity(event, '3')

                }>Settings</button>
            </div>
            <div id="1" className="tabcontent">
                <Tab1 />
            </div><div id="2" className="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p>
            </div><div id="3" className="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>

        </>
    );
}

export default VerticalTab;