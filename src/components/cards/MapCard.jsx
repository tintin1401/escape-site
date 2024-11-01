// components/MapCard.jsx
import React from 'react';
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
//<h1 className='dark:text-white mt-2'>Buscar Ruta</h1>
//<img className="rounded-lg object-cover h-[50vh]  md:w-full" src={d.image} alt="" />
export const MapCard = ({ inputValue, handleDestinationInput, filteredPlaces, handlePlaceSelect, travelTime, EstimatedHour, handleTravelModeChange, placeId }) => {

  const { isMobile } = useFetchMenubar();
  const { t } = useTranslation();

  const [placeInformation, setPlaceInformation] = useState({
    name: '',
    description: '',
    image: ''
  });

  // Efecto para buscar automáticamente el lugar cuando placeId está presente
  useEffect(() => {
    if (placeId != null) {
      const selectedPlace = filteredPlaces.find(place => place.id === placeId);
      if (selectedPlace) {
        setPlaceInformation({
          name: selectedPlace.name,
          description: selectedPlace.description || 'Descripción no disponible',
          image: selectedPlace.image || ''
        });
      }
    }
  }, [placeId, filteredPlaces]); // Actualizar si cambia el placeId o filteredPlaces

  return (

    <div className='absolute right-0 bg-white p-4 rounded shadow-lg z-10 dark:bg-[#2a2a2a] md:w-[25vw] w-full h-[100vh]'>

      <h1 className="font-black flex justify-center dark:text-white text-3xl lg:text-4xl mt-2">ESCAPE</h1>

      <div className="grid">
        <div className="flex gap-2 justify-center m-4">
          <button
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
      </div>

      <div>
        <label htmlFor="destination" className='dark:text-white'>{t('Destination')} </label>
        <input
          type="text"
          id="destination"
          value={inputValue}
          placeholder={t('search')}
          onChange={handleDestinationInput}
          className="border p-2 rounded w-full"
        />

        {filteredPlaces.length > 0 && (
          <ul className="mt-2 border p-2 rounded bg-gray-100 max-h-48 overflow-auto">
            {filteredPlaces.map((place) => (
              <li
                key={place.id}
                onClick={() => {
                  handlePlaceSelect(place);
                  setPlaceInformation({
                    name: place.name,
                    description: place.description || 'Descripción no disponible',
                    image: place.image || ''
                  });
                }}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {/* Mostrar solo el nombre en la lista */}
                <p>{place.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mostrar la imagen y descripción fuera de la lista */}
      {placeInformation.image && (
        <div className="flex justify-center mt-4">
          <img
            className="lg:object-cover rounded-lg w-full h-[15rem]"
            src={placeInformation.image}
            alt={placeInformation.name}
          />
        </div>
      )}

      <p className='dark:text-white mt-2'>
        {t('Description')} {placeInformation.description}
      </p>

      <p className='dark:text-white'>{t('Duration')} {travelTime}</p>
      <p className='dark:text-white'>{t('arrivalTime')} {EstimatedHour}</p>
    </div>
  );
};