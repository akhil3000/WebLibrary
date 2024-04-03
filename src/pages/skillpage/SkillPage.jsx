import React from 'react'
import SkillStage from './skillstagecomponent/SkillStage'
import './SkillPage.css';

function SkillPage({skill}) {
  return (
    <div className="skill-page">
      <p className="skill-heading">{skill.title}</p>
      <div className="stage-container">
        {
          skill.stages.map((stage)=> {
            return <SkillStage stage={stage}/>
          })
        }
      </div>
    </div>
  )
}

export default SkillPage