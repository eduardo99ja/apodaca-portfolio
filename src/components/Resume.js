import React from 'react'
import react from '../assets/icons/react.svg'
import Bar from './Bar'
import { motion } from 'framer-motion'
const languages = [
  {
    icon: react,
    name: 'JS',
    level: '90',
  },
  {
    icon: react,
    name: 'HTML & CSS',
    level: '90',
  },

  {
    icon: react,
    name: 'React.js',
    level: '85',
  },
  {
    icon: react,
    name: 'Next.js',
    level: '50',
  },
  {
    icon: react,
    name: 'Node.js',
    level: '75',
  },
  {
    icon: react,
    name: 'MongoDB',
    level: '85',
  },
]

const tools = [
  {
    icon: react,
    name: 'Firebase',
    level: '60',
  },
  {
    icon: react,
    name: 'Adobe XD',
    level: '50',
  },
  {
    icon: react,
    name: 'Git',
    level: '90',
  },
  {
    icon: react,
    name: 'GitHub',
    level: '90',
  },
]
const deploys = [
  {
    icon: react,
    name: 'Netlify',
    level: '100',
  },
  {
    icon: react,
    name: 'Heroku',
    level: '95',
  },
]
const resume_variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
}
const Resume = () => {
  return (
    <motion.div
      className='container resume'
      variants={resume_variant}
      initial='hidden'
      animate='visible'
    >
      <div className='row'>
        <div className='col-lg-6 resume-card'>
          <h4 className='resume-card__heading'>Education</h4>
          <div className='resume-card__body'>
            <h5 className='resume-card__title'>Computer Systems Engineering</h5>
            <p className='resume-card__name'>
              Instituto Tecnologico de Toluca{' '}
            </p>
            <p className='resume-card__details'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
              nobis?
            </p>
          </div>
        </div>
        <div className='col-lg-6 resume-card'>
          <h4 className='resume-card__heading'>Experience</h4>
          <div className='resume-card__body'>
            <h5 className='resume-card__title'>Freelancer.</h5>
            <p className='resume-card__name'>Present.</p>
            <p className='resume-card__details'>
              I work as a freelancer and developing personal projects.
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 resume-languages'>
          <h5 className='resume-anguage__heading'>Language and Framework</h5>
          <div className='resume-language__body mt-3'>
            {languages.map(language => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className='col-lg-6 resume-anguages'>
          <h5 className='resume-language__heading'>Software and Tools</h5>
          <div className='resume-language__body mt-3'>
            {tools.map(tool => (
              <Bar value={tool} />
            ))}
          </div>
          <h5 className='resume-language__heading'>Deployments</h5>
          <div className='resume-language__body mt-3'>
            {deploys.map(deploy => (
              <Bar value={deploy} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
