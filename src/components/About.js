import React from 'react'
import api from '../assets/icons/api.svg'
import SkillCard from './SkillCard'
import { motion } from 'framer-motion'

const skills = [
  {
    icon: api,
    title: 'Frontend Development',
    about: [
      'I can build responsive and scalable webs using',
      <strong> html, css, react.js</strong>,
    ],
  },
  {
    icon: api,
    title: 'Backend Development',
    about: [
      'I handle SQL and noSQL databases like',
      <strong> oracle, mysql, mongoDB</strong>,
    ],
  },
  {
    icon: api,
    title: 'API Development',
    about: [
      'I can develop robust REST API using',
      <strong> node.js, express, mongoDB</strong>,
    ],
  },
  {
    icon: api,
    title: 'UI/UX designer',
    about: [
      'minimalistic user interface designer using',
      <strong> adobeXD </strong>,
    ],
  },
  
]
const about_variant = {
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
const About = () => {
  return (
    <motion.div
      className='about'
      variants={about_variant}
      initial='hidden'
      animate='visible'
    >
      <h6 className='about__intro'>
        I am an engineering student in computer systems. I describe myself as
        someone who is always exploring new technologies and developing software
        solutions.
      </h6>
      <div className='container about__container'>
        <h6 className='about__heading'>What I offer</h6>
        <div className='row'>
          {skills.map(skill => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default About
