import React, { useState, useRef } from "react";
import "react-calendar/dist/Calendar.css";
import { InlineWidget } from "react-calendly";
import { Calendar, Clock, CheckCircle, Users, MapPin, Mail, DollarSign, Send } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const CalendarComponent = () => {
  const [showForm, setShowForm] = useState(true); // Changed to true to show form first
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    travelDays: 12,
    adults: 2,
    children: 0,
    childrenAges: "",
    travelDate: "",
    budget: 4500,
    travelType: "",
    activities: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    if (name === "children" && parseInt(value) === 0) {
      setFormData({
        ...formData,
        [name]: parseInt(value),
        childrenAges: ""
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "number" ? parseInt(value) : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS implementation
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_BOOKING,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        alert("Your request has been submitted! We'll get back to you within 24 hours.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          travelDays: 12,
          adults: 2,
          children: 0,
          childrenAges: "",
          travelDate: "",
          budget: 4500,
          travelType: "",
          activities: "",
          message: ""
        });
        setShowForm(false);
      }, (error) => {
        alert("There was an error submitting your request. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleToggleView = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-800 py-24">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center mb-4">
            Book Your Safari Adventure
          </h1>
          <p className="text-orange-100 text-xl text-center max-w-2xl mx-auto">
            Schedule a consultation with our expert team to plan your perfect journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow -mt-16 relative z-30">
        <div className="container mx-auto px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              {/* Left side: Quote Form or Calendly Widget */}
              <div className="lg:w-2/3 p-8 lg:p-12 bg-white">
                {showForm ? (
                  <div className="bg-white rounded-xl">
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-8 h-8 text-orange-600" />
                        <h2 className="text-2xl font-bold text-gray-900">
                          Request a Free Quote
                        </h2>
                      </div>
                      <button 
                        onClick={handleToggleView}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                      >
                        Schedule Call
                      </button>
                    </div>
                    
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 mb-8">
                        <h3 className="text-lg font-bold text-orange-800 mb-4">TRAVEL INFORMATION</h3>
                        
                        <div className="mb-6">
                          <p className="font-medium text-gray-700 mb-2">1. What do you want to do? <span className="text-red-500">*</span></p>
                          <p className="text-sm text-gray-500 mb-2">Tell us about the activities you're interested in (safari, beach holiday, mountain climbing, etc.)</p>
                          <textarea
                            name="activities"
                            value={formData.activities}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Example: Safari in Masai Mara, Beach vacation in Mombasa, Climbing Mount Kenya..."
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                          ></textarea>
                        </div>
                        
                        <div className="mb-6">
                          <p className="font-medium text-gray-700 mb-2">2. How many days do you want to travel? <span className="text-red-500">*</span></p>
                          <div className="mb-2">
                            <span className="text-gray-700">Choose number of days: {formData.travelDays} days</span>
                          </div>
                          <input
                            type="range"
                            name="travelDays"
                            min="1"
                            max="21"
                            value={formData.travelDays}
                            onChange={handleChange}
                            className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>1 day</span>
                            <span>21+ days</span>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <p className="font-medium text-gray-700 mb-2">3. Who are you travelling with? <span className="text-red-500">*</span></p>
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            {["Honeymoon", "Family", "Solo", "Couple", "Group of friends", "Other"].map(type => (
                              <label key={type} className="flex items-center space-x-2 cursor-pointer">
                                <input 
                                  type="radio"
                                  name="travelType" 
                                  value={type}
                                  onChange={handleChange}
                                  className="h-5 w-5 text-orange-600 rounded-full border-gray-300 focus:ring-orange-500"
                                />
                                <span>{type}</span>
                              </label>
                            ))}
                          </div>
                          
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 mb-1">Number of adults <span className="text-red-500">*</span></label>
                              <input
                                type="number"
                                name="adults"
                                min="1"
                                value={formData.adults}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                              />
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-1">Number of children</label>
                              <input
                                type="number"
                                name="children"
                                min="0"
                                value={formData.children}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                              />
                            </div>
                          </div>
                          
                          {formData.children > 0 && (
                            <div className="mt-4">
                              <label className="block text-gray-700 mb-1">Children's ages <span className="text-red-500">*</span></label>
                              <input
                                type="text"
                                name="childrenAges"
                                value={formData.childrenAges}
                                onChange={handleChange}
                                placeholder="Example: 5, 7, 12"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                              />
                            </div>
                          )}
                        </div>
                        
                        <div className="mb-6">
                          <p className="font-medium text-gray-700 mb-2">4. When do you want to travel? <span className="text-red-500">*</span></p>
                          <p className="text-sm text-gray-500 mb-2">Select a date. You can always change it later on, if you are not sure.</p>
                          <input
                            type="date"
                            name="travelDate"
                            value={formData.travelDate}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                          />
                        </div>
                        
                        <div>
                          <p className="font-medium text-gray-700 mb-2">Anything else you'd like to share with us?</p>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Which national parks or animals would you really want to see? Please share with us anything we should know to make this trip unforgettable!"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                          ></textarea>
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                        <h3 className="text-lg font-bold text-orange-800 mb-4">YOUR CONTACT DETAILS</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className="block text-gray-700 mb-1">First name <span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Your first name"
                              required
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-1">Last name <span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Your last name"
                              required
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label className="block text-gray-700 mb-1">E-mail <span className="text-red-500">*</span></label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your e-mail address"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 mb-1">Phone number <span className="text-red-500">*</span></label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="(123) 456-7890"
                              required
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            />
                          </div>
                          <div>
  <label className="block text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
  <input
    type="text"
    name="country"
    value={formData.country}
    onChange={handleChange}
    required
    placeholder="Enter your country"
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
  />
</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center">
                        <button 
                          type="submit" 
                          className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Submit Request
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl">
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-8 h-8 text-orange-600" />
                        <h2 className="text-2xl font-bold text-gray-900">
                          Schedule a Call
                        </h2>
                      </div>
                      <button 
                        onClick={handleToggleView}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                      >
                        Request Quote
                      </button>
                    </div>
                    
                    <InlineWidget 
                      url="https://calendly.com/danilscenic" // Replace with your Calendly link
                      styles={{ height: '600px' }}
                    />
                  </div>
                )}
              </div>

              {/* Right side: Contact Information */}
              <div className="lg:w-1/3 p-8 lg:p-12 bg-orange-50">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700">danilscenic@gmail.com / safari@danilscenictours.co.ke</span>
                        
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaWhatsapp className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700">254 722 919249</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700">P.O Box 49377-00100, Nairobi, Kenya</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Why Choose Us?</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700">Expert Safari Guides</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700">Personalized Itineraries</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700">24/7 Support</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Our Promise</h3>
                    <p className="text-gray-700">
                      We are committed to providing you with an unforgettable safari experience. From the moment you contact us until you return home, we ensure every detail is taken care of.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CalendarComponent;
