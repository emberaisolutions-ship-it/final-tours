import React, { useState } from "react";
import { Send, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null, success: false });

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        Danil_Tours: "Danil Tours", // This matches {{Danil Tours}} in your template
        formData: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      };

      await emailjs.send(
        'service_8y6hkr8', // Replace with your service ID
        'template_vfhnecb', // Replace with your template ID
        templateParams,
        'BXE-qX9e_QzruN0OR' // Replace with your public key
      );

      setStatus({ submitting: false, error: null, success: true });
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Optional: Show success message for 3 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 3000);

    } catch (error) {
      setStatus({ submitting: false, error: "Failed to send message. Please try again.", success: false });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Send us a message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white/50"
              placeholder="John Doe"
              required
              disabled={status.submitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white/50"
              placeholder="john@example.com"
              required
              disabled={status.submitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white/50"
            placeholder="How can we help you?"
            required
            disabled={status.submitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white/50 resize-none"
            placeholder="Tell us about your travel plans..."
            required
            disabled={status.submitting}
          ></textarea>
        </div>

        {status.error && (
          <div className="text-red-500 text-sm text-center">{status.error}</div>
        )}

        {status.success && (
          <div className="text-green-500 text-sm text-center">Message sent successfully!</div>
        )}

        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg 
                   flex items-center justify-center space-x-2 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                   ${status.submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          <Send className="w-5 h-5" />
          <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
        </button>

        <p className="text-sm text-gray-500 text-center flex items-center justify-center">
          <Lock className="w-4 h-4 mr-2" />
          Your information is protected by our{" "}
          <Link to="/privacy" className="text-orange-600 hover:text-orange-700 ml-1">
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;