import React from 'react'
import api from '../assets/icons/api.svg'
import SkillCard from './SkillCard'

const skills = [
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
  {
    icon: api,
    title: 'lorem ipsum dolor sit.',
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates mollitia',
  },
]
const About = () => {
  return (
    <div className='about'>
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
    </div>
  )
}

export default About
