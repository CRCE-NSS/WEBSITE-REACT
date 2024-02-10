import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "National Road Safety Week",
        date: "11th January 2024",
        imageSrc: "/images/events-2023-24/Road safety post.svg",
        instagramLink: "https://www.instagram.com/p/C2ZO9RvyZfN/",
        reportLink: "/Report-PDF/January_11_National_Road_Safety_Week.pdf"
    },
    
    {
        name: "POCSO Seminar",
        date: "18th January 2024",
        imageSrc: "/images/events-2023-24/POCSO.jpg",
        instagramLink: "https://www.instagram.com/p/C2ZQ1zhta5D/",
        reportLink: "/Report-PDF/POCSO.pdf"
    },
    {
        name: "HIV/AIDS Awareness Webinar",
        date: "19th January 2024",
        imageSrc: "/images/events-2023-24/HIV AIDS WEBINAR.jpg",
        instagramLink: "https://www.instagram.com/p/C2ZRNxWto9g/",
        reportLink: "/Report-PDF/HIV_AIDS_AWARENESS.pdf"
    },
    {
      name: "Republic Day",
      date: "26th January 2024",
      imageSrc: "/images/events-2023-24/RepublicDay.jpg",
      // instagramLink: "",
      reportLink: "/Report-PDF/REPUBLIC_DAY.pdf"
    },
    {
      name: "Documentation and Court Awareness Skit",
      date: "29th January 2024",
      imageSrc: "/images/events-2023-24/DOCUMENTATION_SKIT.jpg",
      //instagramLink: "",
      reportLink: "/Report-PDF/COURT_AWARENESS_AND_DOCUMENTATION.pdf"
    },
    {
      name: "Tax Awareness Seminar",
      date: "30th January 2024",
      imageSrc: "/images/events-2023-24/TaxAwareness.jpg",
      //instagramLink: "",
      reportLink: "/Report-PDF/TAX_AWARENESS.pdf"
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
