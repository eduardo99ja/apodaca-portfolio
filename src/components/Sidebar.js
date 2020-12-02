import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import CV from '../assets/CV.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
  const handleContactMe = () => {
    window.open('mailto:eduardo1ja99@gmail.com')
  }
  const sidebar_variant = {
    hidden: {
      x: '-20vw',
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: 'spring',
      },
    },
  }
  return (
    <motion.div
      className='sidebar'
      variants={sidebar_variant}
      initial='hidden'
      animate='visible'
    >
      <img src={mightycoder} alt='avatar' className='sidebar__avatar' />
      <div className='sidebar__name'>
        Eduardo <span>Apodaca</span>
      </div>
      <div className='sidebar__item sidebar__title'>Fullstack developer</div>
      <a href={CV} download='resume.pdf'>
        <div className='sidebar__item sidebar__resume'>
          <img src={tie} alt='resume' className='sidebar__icon' />
          Dowload Resume
        </div>
      </a>
      <figure className='sidebar__social-icons my-2'>
        <a href='!#'>
          <img src={facebook} alt='facebook' className='sidebar__icon mr-3' />
        </a>
        <a href='!#'>
          <img src={instagram} alt='instagram' className='sidebar__icon' />
        </a>
      </figure>
      <div className='sidebar__contact'>
        <div className='sidebar__item sidebar__github'>
          <a href='https://github.com/eduardo99ja' target="_blank" rel='noopener noreferrer'>
            <img src={github} alt='github' className='sidebar__icon mr-3' />
            github
          </a>
        </div>
        <div className='sidebar__location'>
          <img src={pin} alt='location' className='sidebar__icon mr-3' />{' '}
          Xonacatlán México
        </div>
        <div className='sidebar__item'>eduardo1ja99@gmail.com</div>
        <a href='https://wa.link/spulph'  target="_blank" rel='noopener noreferrer' className='sidebar__item'>7291001805</a>
      </div>
      <div className='sidebar__item sidebar__email' onClick={handleContactMe}>
        Get in touch
      </div>
    </motion.div>
  )
}

export default Sidebar
