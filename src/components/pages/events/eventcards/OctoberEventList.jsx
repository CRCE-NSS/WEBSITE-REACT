import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "Swacchta Hi Seva Campaign",
        date: "1st October 2023",
        imageSrc: "/images/events-2023-24/SwacchtaHiSeva.jpg",
        instagramLink: "https://www.instagram.com/p/Cx-C-bdoNua/",
        reportLink: "/Report-PDF/October_1_SWACCHATA_HI_SEVA_CAMPAIGN.pdf"
      },
      {
        name: "Animal Welfare Day Webinar",
        date: "1st October 2023",
        imageSrc: "/images/events-2023-24/AnimalWelfareDay.jpg",
        instagramLink: "https://www.instagram.com/p/CyCtB0myGBj/",
        reportLink: "/Report-PDF/October_1_Animal_Welfare.pdf"
      },
      {
        name: "Bhajan Sandhya",
        date: "2nd October 2023",
        imageSrc: "/images/events-2023-24/Bhajan.svg",
        // instagramLink: "",
        reportLink: "/Report-PDF/October_2_Bhajan_Sandhya.pdf"
      },
      {
        name: "World Teacher's Day",
        date: "5th October 2023",
        imageSrc: "/images/events-2023-24/TeachersDayPost.svg",
        instagramLink: "https://www.instagram.com/p/CzQKK70o-tg/",
        reportLink: "/Report-PDF/October_5_World_Teacher_Day.pdf"
      },
      {
        name: "Bandra Fair Appreciation",
        date: "6th October 2023",
        imageSrc: "/images/events-2023-24/BandraFairAppr.svg",
        instagramLink: "https://www.instagram.com/p/CzQKnJ2SYvV/",
        //reportLink: "/Report-PDF/.pdf"
      },
      {
        name: "Nirmalya Mukhti",
        date: "13th October 2023",
        imageSrc: "/images/events-2023-24/Nirmalyapost.svg",
        instagramLink: "https://www.instagram.com/p/CzQLPOEIz70/",
        reportLink: "/Report-PDF/October_13_Nirmalya_Mukti.pdf"
      },
      {
        name: "MasterChef 2023",
        date: "16th October 2023",
        imageSrc: "/images/events-2023-24/Masterchefposter.svg",
        instagramLink: "https://www.instagram.com/p/CzdOYsyyBY1/",
        reportLink: "/Report-PDF/October_16_MASTERCHEF_COMPETITION.pdf"
      },
      {
        name: "FoodFest 2023",
        date: "18th October 2023",
        imageSrc: "/images/events-2023-24/Foodfest23.jpg",
        instagramLink: "https://www.instagram.com/p/Czn-uKiN_u6/",
        reportLink: "/Report-PDF/October_18_FOOD_FEST.pdf"
      },
      {
        name: "National Unity Day",
        date: "31st October 2023",
        imageSrc: "/images/events-2023-24/NationalUnityDay.svg",
        instagramLink: "https://www.instagram.com/p/C07N7NsyYU7/",
        reportLink: "/Report-PDF/October_31_National_Unity_Day.pdf"
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
