import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles'; 
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div>
      test
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         The projects below provide samples of my work from the real world that highlight my abilities and experience. Every project has a brief description, links to live demos, and code repositories. It displays my aptitude for handling challenging issues, collaborating with various technologies, and efficiently managing projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '');