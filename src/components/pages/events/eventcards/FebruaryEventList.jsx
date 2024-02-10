import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "Vegan Outreach Programme Webinar",
        date: "3rd February 2024",
        imageSrc: "/images/events-2023-24/VeganOutreach.jpg",
        instagramLink: "",
        reportLink: ""
    }
    


];

const FebruaryEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default FebruaryEventList;
