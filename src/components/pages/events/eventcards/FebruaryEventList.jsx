import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "Vegan Outreach Programme Webinar",
        date: "3rd February 2024",
        imageSrc: "/images/events-2023-24/VeganOutreach.jpg",
        instagramLink: "https://www.instagram.com/p/C4SDNYmNQ9g/",
        reportLink: ""
    },
    {
      name: "Stem Cell Donation Drive",
      date: "12th February 2024",
      imageSrc: "/images/events-2023-24/StemCell.jpg",
      instagramLink: "https://www.instagram.com/p/C4fZ1Yny_zs/",
      reportLink: ""
    },
    {
      name: "Blood Donation Camp 2",
      date: "14th February 2024",
      imageSrc: "/images/events-2023-24/BloodDonation2.jpg",
      instagramLink: "https://www.instagram.com/p/C4faUf_SMnY/",
      reportLink: ""
    },
    {
      name: "Polio Awareness Webinar",
      date: "27th February 2024",
      imageSrc: "/images/events-2023-24/PolioWebinar.jpg",
      instagramLink: "https://www.instagram.com/p/C4faqxDyNpo/",
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
