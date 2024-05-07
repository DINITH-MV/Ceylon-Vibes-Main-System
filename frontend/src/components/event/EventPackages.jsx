import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../Header/SearchBar";

const EventPack = () => {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5555/events");
        const filteredEvents = response.data.filter(
          (event) => event.Category === 'music'
        );
        setEvents(filteredEvents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to fetch events");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
  <div className="flex flex-col justify-center pt-[25px]">
    <SearchBar/>
    <div className="pt-[20px] flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center mb-4">
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Music Events
        </button>
        <Link to={"/Sport"}>
          <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
            Sports Events
          </button>
        </Link>
        <Link to={"/Festival"}>
          <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
            Festival Events
          </button>
        </Link>
        <Link to={"/Food"}>
          <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded">
            Food Events
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-96 h-[600px] p-4 m-4 border border-gray-300 rounded-md flex flex-col justify-between"
            style={{ maxWidth: "3000px", maxHeight: "900px" }}
          >
            <h2 className="text-lg font-bold mb-2">{event.EventName}</h2>
            <img
              src={event.imageUrl}
              alt={event.EventName}
              className="w-full h-[200px] object-cover mb-2"
            />
            <p className="text-sm mb-2">{event.Description}</p>
            <p className="text-sm mb-2 font-bold">Date: {event.Date}</p>
            <p className="text-sm mb-2 font-bold">Time: {event.Time}</p>
            <p className="text-sm mb-2 font-bold">Location: {event.Location}</p>
            <p className="text-sm mb-2 font-bold">Category: {event.Category}</p>
            <Link to={`/Payment/${event._id}`}>
              <button className="bg-[#879d62] text-Black font-bold py-2 px-4 rounded">
                Buy Ticket
              </button>
            </Link>
          </div>

        ))}

      </div>
  </div>
    </div>
  );
}

export default EventPack;
