import React from 'react'
import { Tilt } from 'react-tilt' // Importing 'Tilt' for the tilting effect on hover
import { motion } from 'framer-motion'; // Importing 'motion' for animation using framer-motion
import { SectionWrapper } from '../hoc';

import { styles } from '../styles'; // Custom CSS styles
import { services } from '../constants'; // Data for services
import { fadeIn, textVariant } from '../utils/motion'; // Animation utility functions

// Component to display individual service cards
const ServiceCard = ({ index, title, icon }) => {
  return (
    // Tilt effect for the card
    <Tilt className='xs:w-[250px]'> 
      {/* Motion div for fade-in animation with custom timing */}
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' 
      >
        <div 
          // Tilt options (effect settings for max tilt, scale, and speed)
          options={{
            max: 45, // Maximum tilt angle
            scale: 1, // No scaling on hover
            speed: 450 // Speed of the tilt effect
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          {/* Icon for the service */}
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          {/* Title of the service */}
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

// Main About component
const About = () => {
  return (
    <>
      {/* Introduction section with animated text */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      {/* Paragraph about personal skills and introduction */}
      <motion.p variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a dynamic software developer with knowledge of frameworks like React, NextJS, and ThreeJS. I have experience with Typescript and JavaScript. I work directly with clients to develop effective, scalable, and user-friendly solutions that address challenges in the real world. I'm a quick learner. Together, let's make your ideas a reality!
      </motion.p>

      {/* Service cards section */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Map through the services array and render each service card */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
