// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Vol_Data from "./components/pages/volunteer/Vol_Data";
import Events_2023_24 from "./components/pages/events/Events_2023_24";
import Team_2023_24 from "./components/pages/team/Team_2023_24";
import WebCardList from "./components/pages/team/teamcards/WebCardList";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ContactUs from "./components/pages/ContactUs";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, replace with your actual loading logic
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vol_data" element={<Vol_Data />} />
              <Route path="/events_2023_24" element={<Events_2023_24 />} />
              <Route path="/team_2023_24" element={<Team_2023_24 />} />
              <Route path="/web_card_list" element={<WebCardList />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
            <ScrollToTopButton />{" "}
            {/* Add this component to reset scroll position */}
            <Footer />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
