import React, { useState } from "react";

function Faq() {
  const faqData = [
    {
      question: "CAN I CUSTOMIZE MY ITINERARY?",
      answer:
        "Yes, absolutely! At Danil Scenic Tours, we specialize in creating customized itineraries tailored to your preferences. We work closely with you to understand your interests, travel goals, and budget, and then design a personalized itinerary that suits your needs. Your trip to Kenya will be crafted according to your preferences, ensuring an unforgettable experience.",
    },
    {
      question: "WHAT DESTINATIONS IN KENYA DO YOU OFFER TOURS TO?",
      answer:
        " Our diverse range of tours covers a multitude of captivating destinations across Kenya. From the iconic landscapes of Maasai Mara to the pristine beaches of the Kenyan coast, our itineraries are crafted to showcase the rich tapestry of Kenya's natural and cultural wonders. For comprehensive information, please refer to the specific tour package details provided to you.",
    },
    {
      question: "WHAT IS INCLUDED IN YOUR TOUR PACKAGES?",
      answer:
        "Our tour packages are designed to provide a comprehensive, hassle-free experience. Depending on the specific itinerary, our packages typically include accommodations, meals as specified, transportation within Kenya, park and entrance fees, experienced guides, and activities mentioned in the itinerary. Any additional inclusions or exclusions will be clearly outlined in the tour package details provided to you.",
    },
    {
      question: "HOW DO I BOOK A TOUR WITH DANIL SCENIC TOURS?",
      answer:
        "Booking a tour with us is easy. Simply get in touch with our team through our website, email, or phone. Let us know your travel dates, preferences, and any specific requirements you may have. Our friendly and knowledgeable staff will assist you in choosing the right tour package and guide you through the booking process, ensuring a smooth and enjoyable experience from start to finish.",
    },
    {
      question: "IS DANIL SCENIC TOURS A SUSTAINABLE AND RESPONSIBLE TRAVEL COMPANY?",
      answer:
        "Yes, sustainability and responsible travel are core values at Danil Scenic Tours. We are committed to minimizing our impact on the environment and supporting local communities. We follow sustainable tourism practices, work with accommodations and partners that share our values, and prioritize responsible wildlife viewing and cultural interactions. By choosing Danil Scenic Tours, you can be assured of an ethical and environmentally conscious travel experience in Kenya.",
    },
    {
      question: "CAN I MODIFY OR CANCEL MY BOOKING?",
      answer:
        "Yes, you can modify or cancel your booking, but it is subject to our cancellation policy. To modify your booking, please contact our customer support team at least 48 hours before the scheduled tour date. Cancellation policies may vary depending on the tour package, so kindly refer to our contact support team for more information.",
    },
    // Add more questions and answers as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-10 px-6">
        <main className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-orange-700 mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div
                  className="flex justify-between items-center cursor-pointer border-b py-2"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className={`transition-transform transform ${activeIndex === index ? "rotate-45" : "rotate-0"
                    } text-lg font-bold`}>
                    +
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="py-2 text-gray-700 mt-2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
   
    </div>
  );
}

export default Faq;
