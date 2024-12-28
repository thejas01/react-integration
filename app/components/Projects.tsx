'use client'

import { useState } from 'react'

const allProjects = [
  { 
    title: 'E-commerce Platform', 
    description: 'A full-stack e-commerce solution built with React and Node.js',
    category: 'Web App'
  },
  { 
    title: 'Task Management App', 
    description: 'A React Native mobile app for managing daily tasks and schedules',
    category: 'Mobile App'
  },
  { 
    title: 'Data Visualization Dashboard', 
    description: 'An interactive dashboard using D3.js and React for data analysis',
    category: 'Data Visualization'
  },
  { 
    title: 'AI Chatbot', 
    description: 'An AI-powered chatbot using natural language processing',
    category: 'AI'
  },
]

const Projects = () => {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === filter)

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="flex justify-center space-x-4 mb-4">
        {['All', 'Web App', 'Mobile App', 'Data Visualization', 'AI'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded ${filter === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-sm text-blue-500">{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

