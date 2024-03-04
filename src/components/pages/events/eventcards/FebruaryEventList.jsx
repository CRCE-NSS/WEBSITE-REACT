import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "Vegan Outreach Programme Webinar",
        date: "3rd February 2024",
        imageSrc: "/images/events-2023-24/VeganOutreach.jpg",
        instagramLink: "",
        reportLink: ""
    },
    {
      name: "Stem Cell Donation Drive",
      date: "12th February 2024",
      imageSrc: "/images/events-2023-24/StemCell.jpg",
      instagramLink: "",
      reportLink: ""
    },
    {
      name: "Blood Donation Campaign",
      date: "14th February 2024",
      imageSrc: "/images/events-2023-24/BloodDonation2.jpg",
      instagramLink: "",
      reportLink: ""
    },
    


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
