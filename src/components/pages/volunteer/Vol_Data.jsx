import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const apiUrl = "/get-volunteer";

function Vol_Data() {
  const [srno, setSrno] = useState('');
  const [volunteerData, setVolunteerData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, { srno });
      setVolunteerData(response.data);
    } catch (error) {
      console.error('Error fetching volunteer data:', error);
    }
  };

  const getTablesByEventCategory = (events) => {
    // Group events by event category and calculate total hours allotted for each category
    const eventsByCategory = events.reduce((acc, event) => {
      const category = event.eventcategory;
      if (!acc[category]) {
        acc[category] = { events: [], totalHours: 0 };
      }
      acc[category].events.push(event);
      const hoursAllotted = parseInt(event.hoursalloted, 10);
      acc[category].totalHours += isNaN(hoursAllotted) ? 0 : hoursAllotted;
      return acc;
    }, {});

    // Sort the categories alphabetically
    const sortedCategories = Object.keys(eventsByCategory)
      .filter(category => category !== 'DEDUCTION*')
      .sort();

    // If 'DEDUCTION' exists, add it to the end
    if (eventsByCategory['DEDUCTION*']) {
      sortedCategories.push('DEDUCTION*');
    }

    // const grandTotal = sortedCategories.reduce((total, category) => {
    //   return total + eventsByCategory[category].totalHours;
    // }, 0);
    const grandTotal = sortedCategories.reduce((total, category) => {
      return total + eventsByCategory[category].totalHours;
    }, 0);

    return (
      <div>
        {sortedCategories.map(category => (
          <div key={category}>
            <h2 className='event-category'>{category}</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>Event Name</th>
                  <th>Date</th>
                  {category === 'DEDUCTION*' ? <th>Hours Deducted</th> : <th>Hours Allotted</th>}
                </tr>
              </thead>
              <tbody>
                {eventsByCategory[category].events
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((event) => (
                  <tr key={event._id}>
                    <td>{event.eventname}</td>
                    <td>{event.date ? new Date(event.date).toLocaleDateString("en-GB") : 'No Date Available'}</td>
                    <td>{event.hoursalloted}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="2">Total:</td>
                  <td>{eventsByCategory[category].totalHours}</td>
                </tr>
              </tbody>

            </table>

          </div>
        ))}
        <div>
          <table border="1" style={{ marginTop: "20px" }}>
            <tbody>
              {/* {volunteerData.volunteerData.deduction !== 0 && (
                <tr>
                  <th>Deduction</th>
                  <td>{volunteerData.volunteerData.deduction}</td>
                </tr>
              )} */}
              <tr>
                <th>Grand Total</th>
                <td>{grandTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className='vol' style={{ '@media (max-width:800px)': { marginTop: '50px' } }}>
      <h1 id="title">Volunteer Information</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="srno" id='srno'>Enter Serial Number:</label>
        <input
          type="text"
          id="srno"
          name="srno"
          required
          value={srno}
          onChange={(e) => setSrno(e.target.value)}
        />
        <button type="submit" id="btn">Submit</button>
      </form>

      {volunteerData && (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Name</th>
                <th>VEC Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{volunteerData.volunteerData.srno}</td>
                <td>{volunteerData.volunteerData.name}</td>
                <td>{volunteerData.volunteerData.vecno}</td>
              </tr>
            </tbody>
          </table>

          {volunteerData.volunteerData.eventsattained && volunteerData.volunteerData.eventsattained.length > 0 && (
            <div>
              {getTablesByEventCategory(volunteerData.volunteerData.eventsattained)}
            </div>
          )}
          
          <Typography variant="h8" align="center" color="black" paragraph className='para'
                        sx={{ margin: '20px' }}
                    >
                        *If you have any grievances related to volunteering hours, please contact Program Officers.
                    </Typography>
          
        </div>
      )}
      
    </div>
  );
}
export default Vol_Data;