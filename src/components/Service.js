import React, { useState } from "react";
import Modall from "./Modall";
import { useNavigate } from "react-router-dom";
import car from './shiftedfrommain/hireee.jpg'
import sun from './shiftedfrommain/sun-airport.jpg'
import excursion from './shiftedfrommain/lifeee.jpg'
import people from './shiftedfrommain/people.jpg'
import jioni from './shiftedfrommain/linktoplaces.jpg'


function Service() {
  const [activeCard, setActiveCard] = useState(null);
  // Add new state variable for selected service image
  const [selectedServiceImage, setSelectedServiceImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState([-1.2921, 36.8219]);


  const toggleCard = (title, image) => {
    setActiveCard((prevActiveCard) => (prevActiveCard === title ? null : title));
    // Set the selected service image when the card is clicked
    setSelectedServiceImage(activeCard === title ? null : image);
  };

  const handleBookNow = () => {
    // Simulating a booking process with a 1.5-second delay
    // Replace this with your actual booking logic (e.g., API calls, database updates, etc.)
    setTimeout(() => {
      setBookingSuccess(true);
      setShowModal(true);
      navigate("/calendar");
    }, 1500);
  };

  const handleBookingSuccess = () => {
    // Redirect the user to the calendar page after the booking is successful
    navigate("/calendar");
    setBookingSuccess(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const ServiceCard = ({ image, title, description }) => (
    <div className={`service-card bg-white rounded-lg shadow-lg ${activeCard === title ? "active" : ""}`}>
      <div className="service-card-header cursor-pointer flex items-center justify-between px-4 py-2" onClick={() => toggleCard(title)}>
        <h2 className="text-l font-semibold text-brown-600">{title}</h2>
        <img src={image} alt={title} className="h-32 w-32" />
      </div>
      <div className={`service-card-content px-4 pb-4 ${activeCard === title ? "block" : "hidden"}`}>
        <p className="text-gray-700">{description}</p>
        {/* Book Now button */}
        <button
          onClick={handleBookNow}
          className="mt-4 bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  );

  const backgroundStyle = {
    backgroundImage: `url(${jioni})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease-in-out',
    width: '400px',
    height: '300px',
  };
  
  const cardStyle = {
    width: '400px', // Adjust the width of the card as per your preference
    height: '300px', // Adjust the height of the card as per your preference
  };

  return (
    <div className="service-page">
      <main className="service-section">
        <div className="service-container">

          <div>
          <h1 className="text-2xl font-bold text-orange-700 mb-4">Our Services</h1>
          <p className=" mb-6">At our company, we pride ourselves on providing a comprehensive range of services to cater to all your travel needs.
						 Whether you're arriving at an airport, looking for exciting excursions, seeking thrilling safaris, requiring car hire, accommodation bookings, or assistance with air tickets, we've got you covered!</p>

          </div>

          <div className="grid grid-cols-1 gap-4">
            <ServiceCard
              image={sun}
              title="Safari Tours"
              description="Explore Kenya's world-renowned national parks, including Maasai Mara, Amboseli, Tsavo and Samburu, on our guided safari tours. Witness the Big Five and countless other species in their natural habitats."
            />

            <ServiceCard
              image={excursion}
              title="Cultural Expeditions"
              description="Immerse yourself in the vibrant traditions and daily life of Kenya's diverse cultures. Meet local communities, learn about their customs, and savor traditional cuisine."
            />

            <ServiceCard
              image={people}
              title="Adventure Safaris"
              description="For the thrill-seekers, we offer adventure safaris that include activities like hiking, biking, and hot air ballooning."
            />

            <ServiceCard
              image={car}
              title="Car Hire"
              description="The company has a diverse fleet of well-maintained vehicles. We provide both residents and tourists the freedom to explore Kenya's scenic landscapes, cities and attractionsat their own pace. Our fleet comprises of; Economy Cars, SUVs, Luxury Cars, Vans and 4x4 Off-Road Vehicles"
            />

            <ServiceCard
            image={sun}
            title="Customized Safaris"
            description="We tailor itineraries to match your preferences, whether you're travelling with family, friends, or as a solo-adventurer."
            />
            <ServiceCard
            image={excursion}
            title="Beach Escapes"
            description="Unwind on the pristine shores of the Kenyan Coast in Diani, Watamu, or Malindi. Relax in luxury beach resorts and explore marine life through snorkeling and diving."
            />
          </div>

        </div>
      </main>
      <Modall isOpen={showModal} onClose={handleModalClose} title="Booking Successful">
        <p className="text-gray-700 mb-4">Thank you for booking with us. We are excited to have you on our tour. Our team will get in touch with you shortly.</p>
      </Modall>
    </div>
  );
}

export default Service;
