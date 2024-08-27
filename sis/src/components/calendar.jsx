// src/components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';


const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h2>My Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
