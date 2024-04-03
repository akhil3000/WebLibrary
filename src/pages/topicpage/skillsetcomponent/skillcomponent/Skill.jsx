import React from 'react'
import './Skill.css'
import { Link } from 'react-router-dom'

function Skill({skill, path}) {
  return (
    <Link className="card-link" to={path}>
      <div className='skill-card'>
        <p className='skill-name'>{skill.title}</p>
        <p className="skill-resources-count">{skill.stages.flatMap((stage)=> stage.resources).length} Resources</p>
      </div>
    </Link>
  )
}

export default Skill