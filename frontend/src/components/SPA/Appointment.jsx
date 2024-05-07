import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointment = () => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [services, setServices] = useState([]);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');

  // Fetch services from the backend upon component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5555/ayurvedicSPA');
        const { data } = response.data;
        setServices(data); // Assuming 'data' is an array of services from the backend
      } catch (error) {
        console.error('Error fetching services:', error.message);
      }
    };

    fetchServices();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      service: selectedService,
      time,
      date,
      phoneNo,
      email,
    };

    try {
      const response = await axios.post('http://localhost:5555/appointmentSPA', data);
      const newAppointment = response.data; // This contains the newly created appointment object with its ID

      // Redirect to the Service Confirm page
      window.location.assign(`/service-confirm?appointmentId=${newAppointment.id}`);
    } catch (error) {
      console.error('Error saving data to database:', error.message);
      // You can show an error message to the user
    }
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#fcecae]">
      <div className="max-w-xl w-full px-6 py-4 shadow-2xl bg-white rounded overflow-hidden">
        <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight-bold text-center">
          Ayurvedic SPA Service Appointment
        </h4>
        <div className="max-w-xl rounded overflow-hidden shadow-lg bg-[#D1FAE5] p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-700 font-bold mb-2">
                Service to be booked
              </label>
              <select
                id="service"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedService}
                onChange={(event) => setSelectedService(event.target.value)}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service._id} value={service.topic}>
                    {service.topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
                Time
              </label>
              <input
                type="time"
                id="time"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={time}
                onChange={handleTimeChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={date}
                onChange={handleDateChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNo" className="block text-gray-700 font-bold mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="phoneNo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={phoneNo}
                onChange={(event) => setPhoneNo(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="bg-[#34D399] hover:bg-[#064E3B] text-black font-bold py-2 px-4 rounded transition duration-200 w-full"
              >
                BOOK NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;