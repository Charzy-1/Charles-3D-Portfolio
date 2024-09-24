import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles'; 
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div>
        
      </div>
    </>
  )
}

export default SectionWrapper(Works, '');