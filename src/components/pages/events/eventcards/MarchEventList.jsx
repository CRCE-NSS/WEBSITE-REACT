import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "NSS CRCE X Connect For Beach Cleanup",
        date: "3rd March 2024",
        imageSrc: "/images/events-2023-24/BeachCleanup.png",
        instagramLink: "",
        reportLink: ""
    },
    {
      name: "RUR Waste Management Webinar",
      date: "14th March 2024",
      imageSrc: "/images/events-2023-24/RURWebinar.jpg",
      instagramLink: "",
      reportLink: ""
    },
    
   

];

const MarchEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default MarchEventList;
