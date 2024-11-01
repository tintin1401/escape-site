import { useState, useEffect } from "react";
import "../../index.css";
//import a from "../../assets/imgs/Place1.jpg";
import start from "../../assets/imgs/start.svg";
import location from "../../assets/imgs/location.svg";
import money from "../../assets/imgs/money.svg";
import guide from "../../assets/imgs/guide.svg";
import heart from "../../assets/imgs/heart.svg";
import fav from "../../assets/imgs/favorite.svg";
import { NavLink, useNavigate } from "react-router-dom";

import back from "../../assets/imgs/back.svg";
import { useUser } from '../../context/UserContext.jsx';
import { useTranslation } from 'react-i18next';

import propTypes from "prop-types";

export function CardInformation({ onClose, favorite, hearts, setHearts, placeData }) {

  const { user } = useUser();
  const { t } = useTranslation();
  const [travelTime, setTravelTime] = useState(null);
  const [travelMode, setTravelMode] = useState('pedestrian');
  const navigate = useNavigate();
  const url = `http://localhost/escape-desarrollo-backend/public/api/companies/` + user.id;



  useEffect(() => {
    if (!placeData || !placeData[0] || !user) return;

    const place = placeData[0];

    if (place.longitude && place.latitude && user.longitude && user.latitude) {

      /* 
      const origin = [user.longitude, user.latitude];
      const destination = [place.longitude, place.latitude];
  
      const routeUrl = `https://api.tomtom.com/routing/1/calculateRoute/${origin[1]},${origin[0]}:${destination[1]},${destination[0]}/json?key=dd8qO1N1bSR7yu4ShWlBi4HDup4MKSwi&traffic=true&travelMode=${travelMode}`;
  
      fetch(routeUrl)
        .then(response => response.json())
        .then(data => {
          const travelTimeInSeconds = data.routes[0].summary.travelTimeInSeconds;
          const travelTimeInMinutes = Math.round(travelTimeInSeconds / 60);
          const travelTimeFormatted = convertirMinutosAHoras(travelTimeInMinutes);
          setTravelTime(travelTimeFormatted);
        })
        .catch(error => console.error('Error al calcular la ruta:', error));*/

      setTravelTime(t('Calculating'));
    } else {
      setTravelTime(t('Calculating'));
    }
  }, [placeData, user, travelMode]);


  function convertirMinutosAHoras(minutos) {
    const horas = Math.floor(minutos / 60);
    const mins = minutos % 60;
    return horas >= 1 ? `${horas}h ${mins}min` : `${mins}min`;
  }



  if (!placeData || !placeData[0]) {
    return <p>No data found</p>;
  }

  const place = placeData[0];

  const close = () => {
    setHearts(false);
    onClose();
  }



  const handleTravelModeChange = (mode) => {
    console.log(mode);
    setTravelMode(mode);
  };

  const goToMapCard = () => {
    navigate('/mapWithRoute', { state: { placeId: place.id } })
  };

  return (
    <div>
      <div className="relative">
        <img className="rounded-lg object-cover h-[50vh]  md:w-full" src={place.image} alt="" />
        <img onClick={favorite} className="absolute top-4 right-4 p-2 rounded-lg bg-white dark:bg-[#404040]" src={hearts == false ? heart : fav} alt="" />
        <img onClick={close} className="absolute top-2 left-2 p-2 rounded-full" src={back} alt="" />
      </div>
      <div className="flex justify-between mt-4">
        <h3 className="text-black font-semibold text-3xl dark:text-white">{place.name}</h3>
        <div className="flex items-center gap-1">
          <img src={start} alt="start" />
          <p className="text-[#9A9797] font-semibold text-xl dark:text-[#BCBCBC]">
            2.5
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 my-3">

        <NavLink to="/InformationCompany" state={place.id} >
        <img src={place.image} alt="profile" className="w-10 h-10 rounded-full" />
        </NavLink>
      

        <div className="flex items-center gap-2" >
          <img src={location} alt="location" />
          <p className="text-[#9A9797] font-semibold text-xl dark:text-[#BCBCBC]">
            {place.canton_id}, {place.district_id}
          </p>
        </div>

      </div>

      <div className="flex gap-2 my-4">
        <button r
          className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300"
          onClick={() => handleTravelModeChange('pedestrian')} // Modo caminar
        >
          {t('Walking')}
        </button>
        <button
          className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300"
          onClick={() => handleTravelModeChange('bicycle')} // Modo bicicleta
        >
          {t('bicycle')}
        </button>
        <button
          className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300"
          onClick={() => handleTravelModeChange('car')} // Modo carro
        >
          Auto
        </button>
      </div>

      <div className="flex items-center justify-between bg-white dark:bg-[#404040] dark:border-gray-600 border border-gray-200 rounded-lg shadow  ">
        <div className="flex items-center gap-4 my-3 mx-8">
          <img src={money} alt="location" />
          <p className="text-black font-semibold text-xl md:text-2xl dark:text-[#BCBCBC] grid">
            ₡2500
            <span className="text-[#9A9797] font-semibold text-base dark:text-[#BCBCBC]">
              {t('pPerson')}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-4 my-3 mx-8">
          <img src={guide} alt="location" />
          <p className="text-black font-semibold text-xl md:text-2xl dark:text-[#BCBCBC]">
            {travelTime ? travelTime : 'Calculando...'}
          </p>
        </div>
      </div>
      <p className="mt-4 dark:text-white">{place.description}</p>
      <div className="flex align-bottom gap-2 ">
        <a href={place.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center  bg-green-500 text-white font-bold p-2 rounded-lg mt-4 text-lg transition duration-300 hover:bg-green-600">
          <svg className="w-8 h-8 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
          </svg>
        </a>
        <button onClick={goToMapCard} className="w-full bg-sky-500 text-white font-bold py-2 rounded-lg mt-4 text-lg">{t('Go')}</button>
      </div>

    </div>
  );
}

CardInformation.propTypes = {
  id: propTypes.number,
  onClose: propTypes.func,
  favorite: propTypes.func,
  placeData: propTypes.array,
  hearts: propTypes.bool,
  setHearts: propTypes.func
};
