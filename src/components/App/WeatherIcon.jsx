import React from 'react';

const WeatherIcon = ({ icon, style, alt = 'weather icon' }) => {
  if (!icon) return null;

  const baseUrl =
    'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/';
  const iconUrl = `${baseUrl}${icon}.svg`;

  return (
    <img
     className={`${style}`}
      src={iconUrl}
      alt={alt}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default WeatherIcon;
