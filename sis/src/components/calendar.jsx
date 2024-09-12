import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Define the specific dates you want to mark with light yellow
const specificDates = [
  new Date(2024, 8, 10), // Example: September 10, 2024
  new Date(2024, 8, 15), // Example: September 15, 2024
];

const Calendars = () => {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  const onChange = (newDate) => {
    setDate(newDate);
    // Handle date selection logic here
  };

  const isSpecificDate = (date) => {
    return specificDates.some(d => d.toDateString() === date.toDateString());
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toDateString();
      const todayStr = today.toDateString();
      const selectedDateStr = date.toDateString();
      
      let className = '';

      if (dateStr === todayStr) {
        className += 'highlight-blue ';
      }
      if (dateStr === selectedDateStr) {
        className += 'highlight-green ';
      }
      if (isSpecificDate(date)) {
        className += 'highlight-yellow';
      }

      return className.trim() || null;
    }
    return null;
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '100px' }}>
      <Calendar 
        onChange={onChange} 
        value={date} 
        className="cool-calendar"
        tileClassName={tileClassName}
        // tileDisabled={({ date }) => date <= new Date()}
      />
      
      <p style={{ textAlign: 'center' }}>
        Today: {today.toDateString()} <br />
        Selected date: {date.toDateString()}
      </p>
      {/* Add other watering control functionalities here */}
    </div>
  );
};

export default Calendars;
