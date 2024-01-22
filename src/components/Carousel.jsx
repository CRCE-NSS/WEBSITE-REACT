import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "August: Tarang",

      imageURL: require("../carou_img/tarang.jpg"),
      month: "August",
    },
    {
      title: "August: Independence Day",

      imageURL: require("../carou_img/indclg.jpg"),
    },
    
    {
      title: "September: Bandra Fair 2023",

      imageURL: require("../carou_img/bandrafairclg.jpg"),
    },
    {
      title: "September: NSS CRCE X FSAI Ganesh Mandal Audit",

      imageURL: require("../carou_img/fsaiclg.jpg"),
    },
    {
      title: "October: MasterChef 2023",
      imageURL: require("../carou_img/masterchefclg23.jpg"),
    },
    {
      title: "October: FoodFest 2023",
      imageURL: require("../carou_img/Foodfestclg.jpg"),
    },
    {
      title: "December : Human Rights Day (Poster Making)",
      imageURL: require("../carou_img/posterclg.jpg"),
    },
    {
      title: "January : POCSO Seminar",
      imageURL: require("../carou_img/pocsoclg.jpg"),
    },

  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  // Function to auto-scroll to the next slide
  const autoScroll = () => {
    const newIndex = (activeIndex + 1) % items.length;
    updateIndex(newIndex);
  };

  useEffect(() => {
    // Set up auto-scrolling interval (adjust the duration as needed)
    const intervalId = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [activeIndex]); // Run the effect whenever activeIndex changes

  return (
    <div
      style={{
        position: "relative",
        margin: "20px auto",
        width: "80%", // Adjust this width as needed
        overflow: "hidden",
      }}
    >
      <div
        className="carousel"
        style={{
          display: "flex",
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "transform 0.5s",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <img
              className="carousel-img"
              src={item.imageURL}
              alt={item.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <div
              className="carousel-item-text"
              style={{
                marginTop: "10px",
                fontWeight: "bolder",
                fontSize: "30px",
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
          '@media (max-width: 535px)': {
                        
            
          },
          
        }}
      >
        <IconButton
          className="button-arrow"
          onClick={() => updateIndex(activeIndex - 1)}
          style={{
            color: "#fff",
            backgroundColor: "#2196f3",
            borderRadius: "50%",
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </IconButton>

        <div className="indicators" style={{ display: "flex" }}>
          {items.map((_, index) => (
            <IconButton
              key={index}
              className={`indicator-buttons ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => updateIndex(index)}
              style={{
                color: "#757575",
              }}
            >
              {index === activeIndex ? (
                <RadioButtonCheckedIcon className="indicator-symbol" />
              ) : (
                <RadioButtonUncheckedIcon className="indicator-symbol" />
              )}
            </IconButton>
          ))}
        </div>

        <IconButton
          className="button-arrow"
          onClick={() => updateIndex(activeIndex + 1)}
          style={{
            color: "#fff",
            backgroundColor: "#2196f3",
            borderRadius: "50%",
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </IconButton>
      </div>
    </div>
  );
};
