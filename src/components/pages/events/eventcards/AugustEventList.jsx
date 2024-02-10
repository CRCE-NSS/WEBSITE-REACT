import React from 'react';
import EventCard from './EventCard';


const cardData = [
  {
    name: "NSS Orientation",
    date: "1st August 2023",
    imageSrc: "/images/events-2023-24/Orient23.jpg",
    instagramLink: "https://www.instagram.com/p/CvhoKb6t5gS/",
    reportLink: "https://drive.google.com/file/d/1zN3JGgWCQEaCCT0HchEfE2avBWY9myBF/view?usp=drive_link"
  },
  {
    name: "Tarang Aasha Ki",
    date: "10 August 2023",
    imageSrc: "/images/events-2023-24/tarang.jpg",
    instagramLink: "https://www.instagram.com/p/Cv1cuaiyb3O/?img_index=1",
    reportLink: "/Report-PDF/August_10_TARANG.pdf",
  },
  {
    name: "Tree Plantation",
    date: "16th August 2023",
    imageSrc: "/images/events-2023-24/Plant23.jpg",
    instagramLink: "https://www.instagram.com/p/CwPRy_VN1hi/",
    reportLink: "/Report-PDF/August_16_Tree_Plantation.pdf"
  },
  {
    name: "Blood Donation Camp",
    date: "17th August 2023",
    imageSrc: "/images/events-2023-24/BloodDonationCamp23.jpg",
    instagramLink: "https://www.instagram.com/p/CwPS1BFy7FZ/",
    reportLink: "/Report-PDF/August_17_Blood_Donation_Camp.pdf"
  },


  {
    name: "Mission Mangroves Webinar",
    date: "22nd August 2023",
    imageSrc: "/images/events-2023-24/Mangrove23.jpg",
    instagramLink: "https://www.instagram.com/p/CwPTK9GteK9/",
    reportLink: "/Report-PDF/August_22_Mission_Mangroves.pdf"
  },
  
  // Add more card data as needed
];

const AugustEventList = () => {
  return (
    <div className="card-list dynamic-grid">
      {cardData.map((card, index) => (
        <EventCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AugustEventList;
