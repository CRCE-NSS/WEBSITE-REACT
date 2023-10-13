import React from 'react';
import MemberCard from './MemberCard';

const cardData = [
    {
        name: "Aarush Wasnik",
        designation: "Senior Webmaster",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/johndoe",
        instagramLink: "https://www.instagram.com/johndoe",
        githubLink: "https://github.com/johndoe"
    },
    {
        name: "Shreya Ghorpade",
        designation: "Junior Webmaster",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/janesmith",
    },
    // Add more card data as needed
];

const WebCardList = () => {
    return (
        <div className="dynamic-grid">
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    );
};

export default WebCardList;
