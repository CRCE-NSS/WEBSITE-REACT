// src/pages/events/Events_2023_24.jsx
import React from 'react';
import AugustEventList from './eventcards/AugustEventList';
import SeptemberEventList from './eventcards/SeptemberEventList';
import OctoberEventList from './eventcards/OctoberEventList';
import DecemberEventList from './eventcards/DecemberEventList';
import JanuaryEventList from './eventcards/JanuaryEventList';
function Events_2023_24() {
  return (
    <div>
      <h1>August 2023</h1>
      {/* Home page content */}
      <AugustEventList />
      <h1>September 2023</h1>
      <SeptemberEventList/>
      <h1>October 2023</h1>
      <OctoberEventList/>
      <h1>December 2023</h1>
      <DecemberEventList/> 
      <h1>January 2024</h1>
      <JanuaryEventList/>
    </div>
  );
}

export default Events_2023_24;
