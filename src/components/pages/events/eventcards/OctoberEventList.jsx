import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "Swacchta Hi Seva Campaign",
        date: "1st October 2023",
        imageSrc: "/images/events-2023-24/SwacchtaHiSeva.jpg",
        instagramLink: "https://www.instagram.com/p/Cx-C-bdoNua/",
        //reportLink: "/Report-PDF/.pdf"
      },
      {
        name: "Animal Welfare Day Webinar",
        date: "1st October 2023",
        imageSrc: "/images/events-2023-24/AnimalWelfareDay.jpg",
        instagramLink: "https://www.instagram.com/p/Cxqdc5kNsJB/",
        //reportLink: "/Report-PDF/.pdf"
      },
      {
        name: "Bhajan Sandhya",
        date: "2nd October 2023",
        imageSrc: "/images/events-2023-24/Bhajan.svg",
        // instagramLink: "",
        //reportLink: "/Report-PDF/.pdf"
      },
      {
        name: "Bandra Fair Appreciation",
        date: "6th October 2023",
        imageSrc: "/images/events-2023-24/Bandra-Fair-felicitation-post.svg",
        // instagramLink: "",
        //reportLink: "/Report-PDF/.pdf"
      },
      {
        name: "Nirmalya Mukhti",
        date: "13th October 2023",
        imageSrc: "/images/events-2023-24/NirmalyaMukhti.svg"
        // instagramLink: "",
        //reportLink: "/Report-PDF/.pdf"
      },
      {
        name: "MasterChef 2023",
        date: "16th October 2023",
        imageSrc: "/images/events-2023-24/MasterChef23.svg",
        // instagramLink: "",
        //reportLink: "/Report-PDF/.pdf"
      },
      {
        name: "FoodFest 2023",
        date: "18th October 2023",
        imageSrc: "/images/events-2023-24/FoodFest23.svg",
        // instagramLink: "",
        //reportLink: "/Report-PDF/.pdf"
      },


];

const OctoberEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default OctoberEventList;
