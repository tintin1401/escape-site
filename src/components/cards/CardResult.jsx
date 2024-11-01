import "../../index.css";
import location from "../../assets/imgs/location.svg";
import { useUser } from '../../context/UserContext.jsx';
import { useFetchTravelTime } from "../hooks/useFetchTravelTime.js";
import { useTranslation } from 'react-i18next';
import useFetchData from "../hooks/useFetchData";
import { useState, useEffect } from "react";

export function CardResult({ image, name, city, followers, description, phone_number, email, category_id, sub_category_id }) {

    /*const [travelMode, setTravelMode] = useState('pedestrian');
    const { t } = useTranslation();
     
    const url = `http://localhost/escape-desarrollo-backend/public/api/companies/` + user.id;
    const { data: companies, loading, error } = useFetchData(url);

    if (companies.name == name){

        placeData = companies;
        console.log(placeData);
    }
    

    const { travelTime } = useFetchTravelTime(placeData, travelMode);

    const handleTravelModeChange = (mode) => {
        console.log(mode);
        setTravelMode(mode);
    };*/

    return (
        <div className="lg:max-w-[800px] sm:max-w-[400px] w-full mx-auto grid lg:grid-cols-[1fr_2fr_1fr] gap-8 p-6 bg-white rounded-lg shadow dark:bg-[#404040]">
            <div className="flex justify-center">
                <img className="lg:rounded-full lg:w-40 lg:h-40 lg:object-cover rounded-lg w-full h-[15rem]" src={image} alt={name} />
            </div>

            <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between">
                    <h5 className="text-3xl font-semibold tracking-tight dark:text-white">{name}</h5>

                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-sky-500">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        <p className="text-[#9A9797] font-semibold text-base dark:text-[#BCBCBC]">{followers}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 my-3">
                    <img src={location} alt="location" />
                    <p className="text-[#9A9797] font-semibold text-lg dark:text-[#BCBCBC]">{city}</p>
                </div>

                

                
                <p className="text-lg tracking-tight dark:text-white my-3">{description}</p>
                <div className="grid">
                    <p className="text-lg tracking-tight dark:text-white my-3">{phone_number}</p>
                    <p className="text-lg tracking-tight dark:text-white my-3">{email}</p>
                </div>
                <p className="text-lg tracking-tight dark:text-white my-3">{category_id} - {sub_category_id}</p>

            </div>

            <div className="flex justify-center items-center lg:pb-[18rem]">
                <button className="w-full bg-sky-500 text-white font-bold py-2 rounded-lg text-lg">Seguir</button>
            </div>

        </div>
    );
}
