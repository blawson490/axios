'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
// import './map.css';

export default function MyMap({ location, mapZoom }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const latLongLocation = { lng: location.long, lat: location.lat };
  const [zoom] = useState(mapZoom);
  maptilersdk.config.apiKey = '8hXtz0aVeDD9gkZhACWl';


  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [latLongLocation.lng, latLongLocation.lat],
      zoom: zoom,
    });

    const markerContainer = document.createElement('div');
    markerContainer.className = 'relative pr-2';
  
    const pingDiv = document.createElement('div');
    pingDiv.className =
      'w-16 h-16 bg-red-500 rounded-full animate-ping absolute -top-7 -left-7';
    markerContainer.appendChild(pingDiv);
  
    const markerDiv = document.createElement('div');
    markerDiv.className = 'w-2 h-2 bg-red-500 rounded-full';
    markerContainer.appendChild(markerDiv);

    new maptilersdk.Marker({ element: markerContainer, className: 'marker' })
      .setLngLat([latLongLocation.lng, latLongLocation.lat])
      .addTo(map.current);
  }, [latLongLocation.lng, latLongLocation.lat, zoom]);

  return (
    <div className="map-wrap h-full relative w-full rounded-lg">
      <div ref={mapContainer} className="absolute w-full h-full rounded-lg" />
    </div>
  );
}
