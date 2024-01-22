import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "Traffic Training Programme",
        date: "11th January 2023",
        imageSrc: "/images/events-2023-24/Road safety post.svg",
        instagramLink: "https://www.instagram.com/p/C2ZO9RvyZfN/",
        reportLink: "/Report-PDF/National Road Safety Week-1.pdf"
    },
    
    {
        name: "POCSO Seminar",
        date: "18th January 2023",
        imageSrc: "/images/events-2023-24/POCSO.jpg",
        instagramLink: "https://www.instagram.com/p/C2ZQ1zhta5D/",
        reportLink: "/Report-PDF/POCSO.pdf"
    },
    {
        name: "HIV/AIDS Awareness Webinar",
        date: "19th January 2023",
        imageSrc: "/images/events-2023-24/HIV AIDS WEBINAR.jpg",
        instagramLink: "https://www.instagram.com/p/C2ZRNxWto9g/",
        // reportLink: ""
    },

];

const JanuaryEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default JanuaryEventList;
