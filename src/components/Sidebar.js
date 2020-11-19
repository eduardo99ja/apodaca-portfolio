import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import CV from '../assets/CV.pdf'

const Sidebar = () => {
  const handleContactMe = () => {
    window.open('mailto:eduardo1ja99@gmail.com')
  }
  return (
    <div className='sidebar'>
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
        <a href=''>
          <img src={facebook} alt='facebook' className='sidebar__icon mr-3' />
        </a>
        <a href=''>
          <img src={instagram} alt='instagram' className='sidebar__icon' />
        </a>
      </figure>
      <div className='sidebar__contact'>
        <div className='sidebar__item sidebar__github'>
          <a href=''>
            <img src={github} alt='github' className='sidebar__icon mr-3' />
            github
          </a>
        </div>
        <div className='sidebar__location'>
          <img src={pin} alt='location' className='sidebar__icon mr-3' />{' '}
          Xonacatlán México
        </div>
        <div className='sidebar__item'>eduardo1ja99@gmail.com</div>
        <div className='sidebar__item'>7291001805</div>
      </div>
      <div className='sidebar__item sidebar__email' onClick={handleContactMe}>
        Get in touch
      </div>
    </div>
  )
}

export default Sidebar
