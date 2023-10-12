import React from 'react';
import MemberCard from './MemberCard';

const cardData = [
    {
        name: "John Doe",
        designation: "Front-End Developer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/johndoe",
        instagramLink: "https://www.instagram.com/johndoe",
        githubLink: "https://github.com/johndoe"
    },
    {
        name: "Jane Smith",
        designation: "UX Designer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/janesmith",
    },
    {
        name: "John Doe",
        designation: "Front-End Developer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/johndoe",
        instagramLink: "https://www.instagram.com/johndoe",
        githubLink: "https://github.com/johndoe"
    },
    {
        name: "Jane Smith",
        designation: "UX Designer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/janesmith",
    },
    {
        name: "John Doe",
        designation: "Front-End Developer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/johndoe",
        instagramLink: "https://www.instagram.com/johndoe",
        githubLink: "https://github.com/johndoe"
    },
    {
        name: "Jane Smith",
        designation: "UX Designer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/janesmith",
    }, {
        name: "John Doe",
        designation: "Front-End Developer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/johndoe",
        instagramLink: "https://www.instagram.com/johndoe",
        githubLink: "https://github.com/johndoe"
    },
    {
        name: "Jane Smith",
        designation: "UX Designer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/janesmith",
    }, {
        name: "John Doe",
        designation: "Front-End Developer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/johndoe",
        instagramLink: "https://www.instagram.com/johndoe",
        githubLink: "https://github.com/johndoe"
    },
    {
        name: "Jane Smith",
        designation: "UX Designer",
        imageSrc: "url_to_image",
        linkedinLink: "https://www.linkedin.com/in/janesmith",
    },
    // Add more card data as needed
];

const SCCardList = () => {
    return (
        <div className="dynamic-grid">
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    );
};

export default SCCardList;
