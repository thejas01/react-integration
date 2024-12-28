'use client'

import { useState } from 'react'

const allSkills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'GraphQL', category: 'API' },
  { name: 'MongoDB', category: 'Database' },
]

const Skills = () => {
  const [filter, setFilter] = useState('All')

  const filteredSkills = filter === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === filter)

  return (
    <section id="skills">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <div className="flex justify-center space-x-4 mb-4">
        {['All', 'Frontend', 'Backend', 'Language', 'Cloud', 'DevOps', 'API', 'Database'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded ${filter === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="font-semibold">{skill.name}</p>
            <p className="text-sm text-gray-600">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

