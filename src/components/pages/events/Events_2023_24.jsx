// src/pages/events/Events_2023_24.jsx
import React from 'react';
import AugustEventList from './eventcards/AugustEventList';
import SeptemberEventList from './eventcards/SeptemberEventList';
import OctoberEventList from './eventcards/OctoberEventList';
import DecemberEventList from './eventcards/DecemberEventList';
import JanuaryEventList from './eventcards/JanuaryEventList';
import FebruaryEventList from './eventcards/FebruaryEventList';
import MarchEventList from './eventcards/MarchEventList';

function Events_2023_24() {
  return (
    <div>
      <h1>August 2023</h1>
      {/* Home page content */}
      <br/>
      <AugustEventList />
      
      <br/>
      <h1>September 2023</h1>
      <br/>
      <SeptemberEventList/>
      <br/>
      <h1>October 2023</h1>
      <br/>
      <OctoberEventList/>
      <br/>
      <h1>December 2023</h1>
      <br/>
      <DecemberEventList/> 
      <br/>
      <h1>January 2024</h1>
      <br/>
      <JanuaryEventList/>
      <br/>
      <h1>February 2024</h1>
      <br/>
      <FebruaryEventList/>
      <br/>
      <h1>March 2024</h1>
      <br/>
      <MarchEventList/>
    </div>
  );
}

export default Events_2023_24;
