import React, { useState } from 'react'
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const Projects = () => {
  const [projects, setProjects] = useState(data_projects)
  const [active, setActive] = useState('All')

  const handleFilterCategory = name => {
    const activeCategory = data_projects.filter(project =>
      project.category.includes(name)
    )
    setProjects(activeCategory)
    setActive(name)
  }

  const projects_variant = {
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
  return (
    <motion.div
      className='container projects'
      variants={projects_variant}
      initial='hidden'
      animate='visible'
    >
      <div className='projects__navbar'>
        <div
          className={active === 'All' ? 'projects__navbar-active':null}
          onClick={() => {
            setProjects(data_projects)
            setActive('All')
          }}
        >
          All
        </div>
        <div
          className={active === 'react.js' ? 'projects__navbar-active':null}
          onClick={() => handleFilterCategory('react.js')}
        >
          React
        </div>
        <div
          className={active === 'mongoDB' ? 'projects__navbar-active':null}
          onClick={() => handleFilterCategory('mongoDB')}
        >
          MongoDB
        </div>
        <div
          className={active === 'node.js' ? 'projects__navbar-active':null}
          onClick={() => handleFilterCategory('node.js')}
        >
          Node
        </div>
        <div
          className={active === 'firebase' ? 'projects__navbar-active':null}
          onClick={() => handleFilterCategory('firebase')}
        >
          Firebase
        </div>
        <div
          className={active === 'vanilla' ? 'projects__navbar-active':null}
          onClick={() => handleFilterCategory('vanilla')}
        >
          Vanilla
        </div>
      </div>
      <div className='row'>
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
