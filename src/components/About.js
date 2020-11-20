import React from 'react'
import api from '../assets/icons/api.svg'
import SkillCard from './SkillCard'
import { motion } from 'framer-motion'

const skills = [
  {
    icon: api,
    title: 'lorem ipsum dolor sit.',
    about:
      ['Lorem ipsum dolor sit, amet consectetur adipisicing elit.',<strong> Voluptates mollitia</strong> ],
  },
  {
    icon: api,
    title: 'lorem ipsum dolor sit.',
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates mollitia',
  },
  {
    icon: api,
    title: 'lorem ipsum dolor sit.',
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates mollitia',
  },
  {
    icon: api,
    title: 'lorem ipsum dolor sit.',
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates mollitia',
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        mollitia optio architecto, obcaecati excepturi odit asperiores atque
        quod sed minima aperiam fugit unde, harum recusandae exercitationem.
        Eligendi hic tempora esse?
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
