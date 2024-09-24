import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import{ styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const Experience = () => {
  return (
    <>
      {/* Introduction section with animated text */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've completed thus far
        </p>
        <h2 className={styles.sectionHeadText}>Employment History.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')