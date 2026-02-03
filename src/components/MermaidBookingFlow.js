import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Mail, Calendar, CheckCircle, Sparkles } from 'lucide-react';

const MermaidBookingFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const stepsInfo = [
    {
      title: "Select Your Booking Method",
      description: "Visit our 'Contact Us' page, click 'Book Now', or navigate to our Services section to select your desired experience.",
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      details: "Multiple convenient ways to start your journey"
    },
    {
      title: "Schedule Your Experience",
      description: "Choose your preferred date and time, then provide your contact information to help us better serve you.",
      icon: Calendar,
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      details: "Flexible scheduling to fit your plans"
    },
    {
      title: "Confirm Your Booking",
      description: "Submit your booking request, and we'll receive your inquiry immediately via our secure booking system.",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      details: "Instant confirmation and secure processing"
    },
    {
      title: "Prepare for Your Journey",
      description: "Get ready for an extraordinary adventure with Danil Scenic Tours, where exceptional experiences await.",
      icon: Sparkles,
      color: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      details: "Your adventure begins here"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % stepsInfo.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, stepsInfo.length]);

  const goToStep = (index) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  const goToNextStep = () => {
    setActiveStep(prev => (prev + 1) % stepsInfo.length);
    setIsAutoPlaying(false);
  };

  const goToPrevStep = () => {
    setActiveStep(prev => (prev - 1 + stepsInfo.length) % stepsInfo.length);
    setIsAutoPlaying(false);
  };

  const currentStep = stepsInfo[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <section className="w-full max-w-6xl mx-auto mb-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl mb-6 shadow-lg">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4 tracking-tight">
          How to Book with Us
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Simple steps to start your extraordinary journey with Danil Scenic Tours
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Interactive Steps */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {stepsInfo.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => goToStep(index)}
                className={`relative cursor-pointer transition-all duration-500 ${
                  isActive ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                <div className={`p-6 rounded-2xl border-2 transition-all duration-500 ${
                  isActive
                    ? `border-transparent bg-gradient-to-r ${step.bgGradient} shadow-xl`
                    : isCompleted
                    ? 'border-green-200 bg-green-50/50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}>
                  <div className="flex items-start space-x-4">
                    {/* Step Number/Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                        : isCompleted
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <StepIcon className="w-6 h-6" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                          isActive
                            ? 'bg-white/80 text-gray-700'
                            : isCompleted
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className={`font-bold text-lg mb-1 transition-colors duration-300 ${
                        isActive ? 'text-gray-800' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm transition-colors duration-300 ${
                        isActive ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {step.details}
                      </p>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg"
                      />
                    )}
                  </div>
                  
                  {/* Progress Line */}
                  {index < stepsInfo.length - 1 && (
                    <div className="absolute left-10 top-20 w-0.5 h-8 bg-gradient-to-b from-gray-200 to-transparent" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Side - Detailed View */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${currentStep.bgGradient} p-8 shadow-2xl`}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${currentStep.color} rounded-2xl shadow-xl mb-6`}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {currentStep.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {currentStep.description}
                  </p>
                  
                  {activeStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50"
                    >
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-700 font-semibold">danilscenic@gmail.com</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={goToPrevStep}
              variant="outline"
              className="border-amber-200 text-amber-700 hover:bg-amber-50 rounded-full px-6"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {/* Progress Dots */}
            <div className="flex space-x-2">
              {stepsInfo.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToStep(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStep
                      ? 'bg-amber-600 shadow-lg'
                      : index < activeStep
                      ? 'bg-green-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={goToNextStep}
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MermaidBookingFlow;