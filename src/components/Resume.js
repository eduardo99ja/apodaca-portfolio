import React from 'react'
import react from '../assets/icons/react.svg'
import Bar from './Bar'
const languages = [
  {
    icon: react,
    name: 'JS',
    level: '45',
  },
  {
    icon: react,
    name: 'HTML',
    level: '60',
  },
  {
    icon: react,
    name: 'CSS',
    level: '80',
  },
]

const tools = [
  {
    icon: react,
    name: 'Figma',
    level: '85',
  },
  {
    icon: react,
    name: 'Adobe XD',
    level: '45',
  },
  {
    icon: react,
    name: 'GIT',
    level: '60',
  },
]

const Resume = () => {
  return (
    <div className='container resume'>
      <div className='row'>
        <div className='col-lg-6 resume-card'>
          <h4 className='resume-card__heading'>Education</h4>
          <div className='resume-card__body'>
            <h5 className='resume-card__title'>Computer Systems Engineering</h5>
            <p className='resume-card__name'>Instituto Tecnologico de Toluca</p>
            <p className='resume-card__details'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
              nobis?
            </p>
          </div>
        </div>
        <div className='col-lg-6 resume-card'>
          <h4 className='resume-card__heading'>Experience</h4>
          <div className='resume-card__body'>
            <h5 className='resume-card__title'>Lorem ipsum dolor sit.</h5>
            <p className='resume-card__name'>Lorem ipsum dolor sit.</p>
            <p className='resume-card__details'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
              nobis?
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
        </div>
      </div>
    </div>
  )
}

export default Resume
