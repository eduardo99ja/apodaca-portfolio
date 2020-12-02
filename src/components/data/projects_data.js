import portfolio from '../../assets/projects_images/portfolio.JPG'
import mall from '../../assets/projects_images/mall.JPG'
import journal_app from '../../assets/projects_images/journal_app.JPG'
import MernTask from '../../assets/projects_images/MernTask.JPG'
import amazon_clone from '../../assets/projects_images/amazon_clone.JPG'
import proshop from '../../assets/projects_images/proshop.JPG'

const data_projects = [
  {
    name: 'Dev Portfolio',
    image: portfolio,
    deployed_url: 'https://apodaca-portfolio.netlify.app',
    github_url: 'https://github.com/eduardo99ja/apodaca-portfolio',
    category: ['react.js'],
  },
  {
    name: 'Mall',
    image: mall,
    deployed_url: 'https://silly-lalande-0025b4.netlify.app',
    github_url: '',
    category: ['react.js'],
  },
  {
    name: 'Journal App',
    image: journal_app,
    deployed_url: 'https://determined-ptolemy-93e5ab.netlify.app',
    github_url: 'https://github.com/eduardo99ja/journal-app',
    category: ['react.js', 'firebase'],
  },
  {
    name: 'Amazon Clone',
    image: amazon_clone,
    deployed_url: 'https://vigilant-mcnulty-b8f916.netlify.app/',
    github_url: 'https://github.com/eduardo99ja/ecommerce-amazon-clone',
    category: ['react.js', 'firebase'],
  },
  {
    name: 'Proshop',
    image: proshop,
    deployed_url: 'https://proshop-apo.herokuapp.com/',
    github_url: 'https://github.com/eduardo99ja/Proshop',
    category: ['react.js', 'node.js', 'mongoDB'],
  },
  {
    name: 'MERN TASKS (front)',
    image: MernTask,
    deployed_url: 'https://inspiring-hamilton-e2a8a1.netlify.app/',
    github_url: 'https://github.com/eduardo99ja/front-tareas',
    category: ['react.js'],
  },
  {
    name: 'MERN TASKS (back)',
    image: MernTask,
    deployed_url: 'https://inspiring-hamilton-e2a8a1.netlify.app/',
    github_url: 'https://github.com/eduardo99ja/back-tareas',
    category: ['react.js', 'mongoDB', 'node.js'],
  },
]

export default data_projects
