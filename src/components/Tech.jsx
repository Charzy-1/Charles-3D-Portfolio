import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { technologies } from "../constants";
import { styles } from '../styles'; 

import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Technologies i use</p>
        <h2 className={styles.sectionHeadText}>My Technologies</h2> {/* Corrected spelling */}
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} /> 
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
