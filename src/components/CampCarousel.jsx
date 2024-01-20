import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export const CampCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      imageURL: "/images/camp_carousel_img/camp1.svg",
    },
    {
      imageURL: "/images/camp_carousel_img/camp2.svg",
    },
    {
      imageURL: "/images/camp_carousel_img/camp3.svg",
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
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
    <div style={{ width: "80%", margin: "20px auto", position: "relative" }}>
      <div style={{ overflow: "hidden" }}>
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
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                className="carousel-img"
                src={item.imageURL}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure the image covers the entire container
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
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
              style={{ color: "#757575" }}
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
