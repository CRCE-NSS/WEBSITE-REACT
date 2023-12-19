import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "Pollution Control Day",
        date: "2nd December 2023",
        imageSrc: "/images/events-2023-24/pollution.svg",
        instagramLink: "https://www.instagram.com/p/C07Ogn6yRRV/",
        reportLink: "/Report-PDF/Pollution Control Day.pdf"
    },
    {
      name: "Human Rights Day",
      date: "10th December 2023",
      imageSrc: "/images/events-2023-24/Human rights post.svg",
      instagramLink: "https://www.instagram.com/p/C07O9-Qrf1-/",
      reportLink: ""
  },

];

const DecemberEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default DecemberEventList;
