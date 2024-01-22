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
      reportLink: "/Report-PDF/Human Rights Day(Poster).pdf"
    },
    {
      name: "National Conservation Day Power Plant Visit",
      date: "14th December 2023",
      imageSrc: "/images/events-2023-24/Energy conservation post.svg",
      instagramLink: "https://www.instagram.com/p/C2SzkyILErh/",
      reportLink: "/Report-PDF/PowerPlantVisit.docx.pdf"
    },
    { 
      name: "Mega Deep Cleaning Programme",
      date: "31st December 2023",
      imageSrc: "/images/events-2023-24/Mega Cleaning drive post.svg",
      instagramLink: "https://www.instagram.com/p/C2Sz-EWLqba/",
      reportLink: "/Report-PDF/mega deep cleaning.pdf"
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
