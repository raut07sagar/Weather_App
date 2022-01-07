import React, { useEffect, useState } from "react";
import './css/style.css';


const Tempapp = () => {

    const [city, Setcity] = useState(null);
    const [search, Setsearch] = useState('mumbai');



    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0eefe96e369255bdc3b1a997fe87d9ce`;
            const response = await fetch(url);
            const resJson = await response.json();

            Setcity(resJson.main);

        }



        fetchApi();
    }, [search])



    return (
        <>

            <div className="container">
                <div className="front side">
                    <div className="content2">



                        <h1>weather app</h1>
                        <h4>The Weather app includes a number of features that provide information about current and forecasted weather. Some features aren't currently available in every country or region.</h4>



                    </div>
                </div>
                <div className="back side">
                    <div className="content">

                        {/* 
                        <h1 className="head">Weather App</h1> */}

                        <div className="box">
                            <div className="inputDa">
                                <input type="search" placeholder="Search here" className="inputFeild" onChange={(event) => {
                                    Setsearch(event.target.value)

                                }}

                                />
                            </div>

                            <img height="50" src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="" />

                            {
                                !city ? (
                                    <h3 className="nodata" style={{fontSize:"2rem"}}>No data found</h3>
                                ) : (
                                    <div>
                                        <div className="info">
                                            <h2 className="location">
                                                <h1 className="cityname"><img className="" height='30'
                                                    src="https://cdn-icons.flaticon.com/png/512/2603/premium/2603724.png?token=exp=1637932459~hmac=63c9c2d3fe85787629d0b80de2a05e58"
                                                    alt="" /> {search}</h1>

                                            </h2>
                                            <h1 className="temp">
                                                {city.temp}<span> °C</span>
                                            </h1>
                                            <h3 className="tempmin_max">
                                                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                                            </h3>
                                        </div>
                                        <div className="wave-one"></div>
                                        <div className="wave-two"></div>
                                        <div className="wave-three"></div>
                                    </div>
                                )
                            }




                        </div>





                    </div>
                </div>

            </div>




        </>
    )
}

export default Tempapp;
