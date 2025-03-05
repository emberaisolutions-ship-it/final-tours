import React from 'react';
import { motion } from 'framer-motion';
import alex from './team/alex.jpeg';
import moses from './team/moses.jpeg';
import translator from './team/translator.jpeg';
import t from './team/T.jpeg';
import makiwa from './team/makiwa.jpeg';
import Ann from './team/Ann.jpeg';
import Dan from './team/dan.jpeg';

function TeamData() {
  const teamMembers = [
    {
      name: 'Dan Wanyoike',
      position: 'Director',
      image: Dan
    },
    {
      name: 'Ann Wainana',
      position: 'Director',
      image: Ann
    },
    {
      name: 'Mary Njoki',
      position: 'Project Manager',
      image: makiwa
    },
    {
      name: 'Moses Njoroge',
      position: 'Tour Guide',
      image: moses
    },
    {
      name: 'Joseph Chege',
      position: 'Spanish Guide',
      image: translator
    },
    {
      name: 'Alex Irungu',
      position: 'IT Systems Developer',
      image: alex
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-amber-800 mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-600">Creating unforgettable experiences together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Team Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={t} 
                alt="Team Photo" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Safari Squad</h3>
                  <p className="text-amber-200">Your guides to adventure</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Members Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="relative mb-4">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-amber-800 group-hover:text-amber-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TeamData;