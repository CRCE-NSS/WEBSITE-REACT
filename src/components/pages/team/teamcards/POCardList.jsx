import React from 'react';
import MemberCard from './MemberCard';

const cardData = [
    {
        name: "Prof. Pradeep Singh",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2023-24/pradeep.jpg",
        // linkedinLink: "https://www.linkedin.com/in/johndoe",
        // instagramLink: "https://www.instagram.com/johndoe",
        // githubLink: "https://github.com/johndoe"
    },
    {
        name: "Prof. Prachi Dalvi",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2023-24/prachi.jpg",
        linkedinLink: "https://www.linkedin.com/in/janesmith",
    },
    {
        name: "Prof. Gauree Jagushte",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2023-24/po1.jpg",
        // linkedinLink: "https://www.linkedin.com/in/johndoe",
        // instagramLink: "https://www.instagram.com/johndoe",
        // githubLink: "https://github.com/johndoe"
    },
    {
        name: "Prof. Gajendra Singh<",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2023-24/gajendra.jpg",
        //linkedinLink: "https://www.linkedin.com/in/janesmith",
    },
    // {
    //     name: "John Doe",
    //     designation: "Front-End Developer",
    //     imageSrc: "url_to_image",
    //     linkedinLink: "https://www.linkedin.com/in/johndoe",
    //     instagramLink: "https://www.instagram.com/johndoe",
    //     githubLink: "https://github.com/johndoe"
    // },
    // {
    //     name: "Jane Smith",
    //     designation: "UX Designer",
    //     imageSrc: "url_to_image",
    //     linkedinLink: "https://www.linkedin.com/in/janesmith",
    // }, {
    //     name: "John Doe",
    //     designation: "Front-End Developer",
    //     imageSrc: "url_to_image",
    //     linkedinLink: "https://www.linkedin.com/in/johndoe",
    //     instagramLink: "https://www.instagram.com/johndoe",
    //     githubLink: "https://github.com/johndoe"
    // },
    // {
    //     name: "Jane Smith",
    //     designation: "UX Designer",
    //     imageSrc: "url_to_image",
    //     linkedinLink: "https://www.linkedin.com/in/janesmith",
    // }, {
    //     name: "John Doe",
    //     designation: "Front-End Developer",
    //     imageSrc: "url_to_image",
    //     linkedinLink: "https://www.linkedin.com/in/johndoe",
    //     instagramLink: "https://www.instagram.com/johndoe",
    //     githubLink: "https://github.com/johndoe"
    // },
    // {
    //     name: "Jane Smith",
    //     designation: "UX Designer",
    //     imageSrc: "url_to_image",
    //     linkedinLink: "https://www.linkedin.com/in/janesmith",
    // },
    // Add more card data as needed
];

const POCardList = () => {
    return (
        <div className="dynamic-grid">
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    );
};

export default POCardList;
