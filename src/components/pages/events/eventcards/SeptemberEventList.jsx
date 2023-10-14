import React from 'react';
import EventCard from './EventCard';


const cardData = [
  
  {
    name: "International Day of Clean Air for Blue Skies",
    date: "7th September 2023",
    imageSrc: "/images/events-2023-24/CleanAirWeb23.jpg",
    instagramLink: "https://www.instagram.com/p/CxEL2iao2rI/",
    reportLink: "/Report-PDF/CleanAirWebinar2023.pdf"
  },
  {
    name: "MDACS X NSS Red Run Marathon",
    date: "10th September 2023",
    imageSrc: "/images/events-2023-24/MDACSXNSSMarathon23.jpg",
    instagramLink: "https://www.instagram.com/p/CxEMmMGI_1M/",
    reportLink: "/Report-PDF/Marathon.pdf"
  },
  {
    name: "FSAI Training Session",
    date: "11th September 2023",
    imageSrc: "/images/events-2023-24/FSAI Training.jpg",
    instagramLink: "https://www.instagram.com/p/CxEN1-pIhf0/",
    //reportLink: ""
  },
  {
    name: "Bandra Fair Volunteering",
    date: "12th-15th September 2023",
    imageSrc: "/images/events-2023-24/Bandra Fair 23.jpg",
    instagramLink: "https://www.instagram.com/p/CxfUP-CNy9F/",
    reportLink: "/Report-PDF/BandraFair_compressed.pdf"
  },
  {
    name: "NSS CRCE X FSAI Ganesh Mandal Audit",
    date: "17th-19th September 2023",
    imageSrc: "/images/events-2023-24/FSAI2023.jpg",
    instagramLink: "https://www.instagram.com/p/CxkYLl9oIQZ/",
    reportLink: "/Report-PDF/fsai day1 new_merged.pdf"
  },
  {
    name: "World Peace Day Webinar",
    date: "21st September 2023",
    imageSrc: "/images/events-2023-24/WorldPeaceDay23.jpg",
    instagramLink: "https://www.instagram.com/p/Cxqdc5kNsJB/",
    reportLink: "/Report-PDF/World PeaceDayReport.pdf"
  },
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
  // Add more card data as needed
];

const SeptemberEventList = () => {
  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <EventCard key={index} {...card} />
      ))}
    </div>
  );
};

export default SeptemberEventList;
