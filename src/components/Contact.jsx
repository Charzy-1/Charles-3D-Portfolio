import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  // Reference to the form element
  const formRef = useRef();
  
  // State for managing form input fields
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to track loading state during form submission
  const [loading, setLoading] = useState(false);

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setForm({ ...form, [name]: value }); // Dynamically update the form state
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true when submitting

    // EmailJS send method for sending email with the provided form data
    emailjs.send(
      'service_yxudmck', // EmailJS service ID
      'template_9qa1wca', // EmailJS template ID
      {
        from_name: form.name, // Sender's name from the form input
        to_name: 'Charles',   // Your name (recipient)
        from_email: form.email, // Sender's email from the form input
        to_email: 'charlesadiks@gmail.com', // Your email (recipient)
        message: form.message,  // Message from the form input
      },
      '0doGALnr-Fx0KSo2M' // Your EmailJS public API key
    )
    .then(() => {
      setLoading(false); // Reset loading state after success
      alert('Thank you. I will get back to you shortly.');

      // Reset form fields after successful submission
      setForm({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((error) => {
      setLoading(false); // Reset loading state in case of error
      console.log(error); // Log the error for debugging
      alert('Something went wrong. Please try again later.');
    });
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)} // Slide-in animation for the contact form
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Hire me</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit} // Attach the form submit handler
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name input field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="Enter your name" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Email input field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Message input field */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
              rows="7"
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              placeholder="Tell me something..." 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Submit button */}
          <button
            type="submit" 
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'} {/* Show 'Sending...' text while loading */}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)} // Slide-in animation for the Earth canvas
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');
