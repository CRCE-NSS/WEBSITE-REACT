import React from 'react';
import EventCard from './EventCard';

const cardData = [
  {
    name: "NSS Orientation",
    date: "1 August 2023",
    imageSrc: "url_to_image",
    instagramLink: "",
    reportLink: ""
  },
  {
    name: "Tarang Aasha Ki",
    date: "10 August 2023",
    imageSrc: "url_to_image",
    instagramLink: "",
  },
  // Add more card data as needed
];

const AugustEventList = () => {
  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <EventCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AugustEventList;
